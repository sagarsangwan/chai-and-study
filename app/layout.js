import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import { Navbar } from "@/components/component/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chai & Study  || previous years question papers, ptu previous year question papers, diploma question papers, mca question papers, mba question papers, bba question papers, bcom question papers, pseb 10 12 question papers",
  desription: "Download Previous Years Question Papers absolutely Free for PTU, PU, BFUHS, PSBTE, PSEB, GTU, HPTSB, MDU, BCOM, BBA, BCA, MBA, MCA, MCOM, Btech, MTech , BSc IT, MSc IT, PGDCA, DIPLOMA, 10th, 12, Distance Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
