import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <html className="h-full">
        <Head/>
        <body className="h-full">
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}

export default MyDocument;