import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from './components/Header';
import SettingSheet from './components/SettingSheet';
import GraphSheet from './components/GraphSheet';
import usePrefectures from '@/hooks/usePrefectures';

export default function Home() {
  const { prefectures } = usePrefectures();
  return (
    <>
      <Head>
        <title>選んで人口を比較しよう</title>
        <meta
          name="description"
          content="都道府県別総人口の推移をグラフで確認できるサイトです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <GraphSheet />
        <SettingSheet />
      </main>
    </>
  );
}
