import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Noticeboard</h1>

        <div className={styles.grid}>
          <Link href="/students">
            <a className={styles.card}>
              <h3>Students &rarr;</h3>
            </a>
          </Link>

          <Link href="/teachers">
            <a className={styles.card}>
              <h3>Teachers &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
