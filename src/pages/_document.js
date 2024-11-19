import { Html, Head, Main, NextScript } from 'next/document';
import { getDarkMode } from '@/utils/getDarkMode';

export default function Document() {
  const themeScript = `
    (${getDarkMode.toString()})();
  `;
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

