import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import SettingSheet from '@/components/SettingSheet';
import GraphSheet from '@/components/GraphSheet';
import usePrefectures from '@/hooks/usePrefectures';
import LoadingModal from '@/components/LoadingModal';
import useLoading from '@/hooks/useLoading';
import usePopulationType from '@/hooks/usePopulationType';

export default function Home() {
  const { prefectures, labels, handlePrefectureSelected } = usePrefectures();
  const { loading, setLoading } = useLoading();
  const {
    populationType,
    handlePopulationTypeSelecter,
    getPopulationWithType,
  } = usePopulationType();

  const Main = () => {
    if (prefectures && labels) {
      return (
        <>
          <LoadingModal onOpen={loading} />
          <GraphSheet
            populationType={populationType}
            populationGraph={{
              labels,
              prefectures,
              getPopulationWithType,
            }}
            populationTypeSelecter={{
              handlePopulationTypeSelecter,
            }}
          />
          <SettingSheet
            prefectures={prefectures}
            handleChange={handlePrefectureSelected}
            setLoading={setLoading}
          />
        </>
      );
    }
    return <LoadingModal onOpen />;
  };

  return (
    <>
      <Head>
        <title>選んで人口を比較しよう</title>
        <meta
          name="description"
          content="都道府県別に総人口または年齢層別人口の推移をグラフで確認できるサイトです。"
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
