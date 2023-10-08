import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import SettingSheet from '@/components/SettingSheet';
import GraphSheet from '@/components/GraphSheet';
import LoadingModal from '@/components/LoadingModal';
import usePrefectures from '@/hooks/usePrefectures';
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

      const graphSheetProps = {
        populationType,
        labels,
        prefectures,
        getPopulationWithType,
        handlePopulationTypeSelecter,
      }
      const settingSheetProps = {
        prefectures,
        handleChange: handlePrefectureSelected,
        setLoading,
      }

      return (
        <>
          <LoadingModal onOpen={loading} />
          <GraphSheet {...graphSheetProps} />
          <SettingSheet {...settingSheetProps} />
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
        <meta property="og:title" content="選んで人口を比較しよう-都道府県別人口推移グラフ-" />
        <meta property="og:description" content="都道府県別に総人口または年齢層別人口の推移をグラフで確認できるサイトです。" />
        <meta property="og:image" content="/ogp_img.png" />
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
