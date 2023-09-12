import "@/styles/globals.css";
import localfont from "next/font/local";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import RootLayout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </NextUIProvider>
    );
}
