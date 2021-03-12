import {AuthProvider} from '@/contexts/user';
import React, { useEffect } from 'react';
import Head from 'next/head';
import store from 'stores';
import { Provider } from 'react-redux';
import { statusBarStyle } from 'config';
import { AppProps } from 'next/app';
import 'styles/main.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    // useEffect(() => {
    //     if ('serviceWorker' in navigator) {
    //         navigator.serviceWorker.register(
    //             process.env.serviceWorkerUrl as string,
    //             { scope: '/' }
    //         );
    //     }
    // }, []);

    const Layout = (Component as any).Layout || React.Fragment;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content={ statusBarStyle } />
                <link rel="apple-touch-startup-image" sizes="512x512" href="/logo512.png" />
                <link rel="apple-touch-startup-image" sizes="256x256" href="/logo256.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
                <link rel="apple-touch-icon" sizes="256x256" href="/logo256.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Provider store={ store }>
                <AuthProvider>
                    <div className="min-h-screen">
                        <Layout>
                            <Component { ...pageProps } />
                        </Layout>
                    </div>
                </AuthProvider>
            </Provider>
        </>
    );
}
