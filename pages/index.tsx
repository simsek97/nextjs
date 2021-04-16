import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SoccerScoreboard from "./soccer/[league]/scoreboard";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

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

      <main className={styles.main}>
        <div className={styles.ScoreboardNav}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <SoccerScoreboard />
      </main>
    </div>
  );
};

export default Home;
