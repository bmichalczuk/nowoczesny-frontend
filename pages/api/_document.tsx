import Document, { Html, NextScript, Main, Head} from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pl">
                <Head />
                <body className="bg-gray-100 antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;