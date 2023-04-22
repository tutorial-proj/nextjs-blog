import Head from 'next/head';
import Link from 'next/link'
import Script from 'next/script';
import Layout from '../../components/layout';
import { getArticles } from '../../lib/low';
import utilStyles from '../../styles/utils.module.css'
export async function getServerSideProps(context) {
    const articles= await getArticles();
    return {
      props: {
        articles
      }, // will be passed to the page component as props
    }
  }
  
export default function FirstPost({articles}) {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
            <ul  className={utilStyles.list}>
          {articles.map((article, idx)=>(
            <li className={utilStyles.listItem} key={idx}>{idx}{ article}</li>
            // {console.log(idx,article)}

          ))}
        </ul>
        </Layout>
    );
}
