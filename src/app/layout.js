import "../styles/style.scss";
import { getDarkMode } from '@/utils/getDarkMode';

export default function RootLayout({ children }) {
  const themeScript = `
    (${getDarkMode.toString()})();
  `;

  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        ></script>
        {children}
      </body>
    </html>
  );
}
