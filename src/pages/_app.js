import Theme from '../styles/theme';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";
import Head from 'next/head';
import { et, en, ru } from "../constants/translations";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
    const { locale } = router;
    let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  return (
    <>
    <Head>
    <title>{t.title}</title>
    <meta name="description" content={t.museum1} />
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 