import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          CBS Sports - News, Live Scores, Schedules, Fantasy Games, Video and more. - CBSSports.com
        </title>
        <link
          rel="icon"
          href="https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/core/cbssports-app-icon.svg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
