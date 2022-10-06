import Document, { Html, NextScript, Main, Head} from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pl">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;