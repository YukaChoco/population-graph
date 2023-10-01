import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import SettingSheet from '@/components/SettingSheet';
import GraphSheet from '@/components/GraphSheet';
import usePrefectures from '@/hooks/usePrefectures';

export default function Home() {
  const { prefectures } = usePrefectures();
  console.log(prefectures);

  const Main = () => {
    if (prefectures) {
      return (
        <>
          <GraphSheet
            populationGraph={{
              labels: [
                '1980',
                '1985',
                '1990',
                '1995',
                '2000',
                '2005',
                '2010',
                '2015',
                '2020',
              ],
              prefectures: prefectures,
            }}
            populationTypeSelecter={{
              handlePopulationTypeSelecter: () => {},
            }}
          />
          <SettingSheet
            prefectures={prefectures}
            handlePrefectureSelected={() => {}}
          />
        </>
      );
    }
    return <>Loading...</>;
  };

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
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Main />
        </main>
      </div>
    </>
  );
}
