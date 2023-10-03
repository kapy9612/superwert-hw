import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Superwert SWAPI</title>
                <meta name="description" content="Superwert SWAPI homework." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SWRConfig
                value={{
                    errorRetryCount: 3,
                }}
            >
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </SWRConfig>
        </>
    );
}
