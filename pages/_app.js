import "./../assets/fonts/fonts.scss";
import "./../assets/styles/startbootstrap-new-age.css";
import "./../assets/styles/custom.scss";

import { useEffect } from 'react'
import Layout from '../components/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <>
            <Head>
                <title>Teknilec</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp
