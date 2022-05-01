import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html lang="fr" >
            <Head>
                <link rel="shortcut icon" href="/images/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
