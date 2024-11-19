import { DM_Sans } from 'next/font/google';
import Layout from "../components/layout";
import "@/styles/style.scss";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={dmSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
