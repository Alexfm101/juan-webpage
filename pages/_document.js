import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <meta name="google-site-verification" content="PvBz_Xad3u57_VZVnwVLXeOrHUoCZoieO6xf6Y_nJz4" />
                <link rel="canonical" href="https://fraum.vercel.app"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
                <link rel="icon" type="image/svg" href="/svgs/logo.svg"/>
                <meta name="viewport"></meta>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}