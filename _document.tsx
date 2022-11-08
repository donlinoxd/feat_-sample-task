import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<script>window.dataLayer = []<script/><iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                /> */}
            </body>
        </Html>
    )
}
