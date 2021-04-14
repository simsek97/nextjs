import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js in AWS!</a>
        </h1>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
