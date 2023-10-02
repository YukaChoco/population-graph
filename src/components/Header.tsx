import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <span className={styles.title}>選んで人口を比較しよう</span>
        <span className={styles.description}>- 都道府県別人口推移グラフ -</span>
      </h1>
    </header>
  );
}
