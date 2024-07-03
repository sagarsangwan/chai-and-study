"use server";
import { google } from "googleapis";
import { Readable } from "stream";
export const findExistingFile = async (driveService, fileName) => {
    try {
        const response = await driveService.files.list({
            q: `name='${fileName}'`,
            fields: "files(id, webViewLink)",
        });

        const files = response.data.files;
        if (files && files.length > 0) {
            return files[0]; // Return the first matching file
        } else {
            return null; // File not found
        }
    } catch (error) {
        console.error("Error searching for file:", error);
        throw error;
    }
};
export const uploadToGooglDrive = async (file) => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: process.env.TYPE,
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.CLIENT_EMAIL,
            client_id: process.env.CLIENT_ID,
            auth_uri: process.env.AUTH_URI,
            token_uri: process.env.TOKEN_URI,
            auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
            universe_domain: process.env.UNIVERSE_DOMAIN,
        },
        scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const fileBuffer = file.stream();
    const fileMetadata = {
        name: file.name,
    };


    const driveService = google.drive({ version: "v3", auth });
    const existingFile = await findExistingFile(driveService, file.name);
    if (existingFile) {
        const viewLink = existingFile.webViewLink
        return { viewLink: viewLink, success: true, };
    }
    const response = await driveService.files.create({
        requestBody: fileMetadata,
        media: {
            mimeType: "application/pdf",
            body: Readable.from(fileBuffer)
        },
        fields: "id, webViewLink",
    });

    const docId = response.data.id;
    const viewLink = response.data.webViewLink;
    console.log(`File '${file.name}' uploaded with ID: ${docId}`);
    console.log(`View link: ${viewLink}`);

    // Add permissions
    await driveService.permissions.create({
        fileId: docId,
        requestBody: {
            role: "reader",
            type: "anyone",
        },
    });

    await driveService.permissions.create({
        fileId: docId,
        requestBody: {
            role: "writer",
            type: "user",
            emailAddress: "sagarchotuu21@gmail.com",
        },
    });
    const newFileviewLink = response.data.webViewLink
    return { viewLink: newFileviewLink, success: true, };

}