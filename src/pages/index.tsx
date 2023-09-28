import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>選んで比較-都道府県別総人口推移グラフ</title>
        <meta
          name="description"
          content="都道府県別総人口の推移をグラフで確認できるサイトです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div>hogehoge</div>
      </main>
    </>
  );
}
