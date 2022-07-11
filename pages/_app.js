// import "./../assets/fonts/fonts.scss";
import "./../assets/styles/startbootstrap-new-age/index.scss";
import "./../assets/styles/custom.scss";

import { useEffect } from 'react'
import Layout from '../components/Layout';
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
        import("./../assets/styles/startbootstrap-new-age/scripts")
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
