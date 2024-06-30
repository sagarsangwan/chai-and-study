
import { ThemeProvider } from "./theme-provider";

import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';
export default async function Providers({ children }) {

    return (

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <NextTopLoader position="top-right" />
            <Toaster />
            {children}
        </ThemeProvider>
        // </SessionProvider>
    );
}
