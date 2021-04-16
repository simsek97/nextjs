import React from "react";
import DateFnsAdapter from "@date-io/date-fns";
import { enUS } from "date-fns/locale";
import useSettings from "../../src/hooks/useSettings";
import styles from "../../styles/Marquee.module.css";

const Marquee: React.FC = () => {
  const { settings } = useSettings();
  const dateFns = new DateFnsAdapter({ locale: enUS });

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>
        <div className={styles.logo}>
          <img
            alt="team logo"
            src="https://sportsfly.cbsistatic.com/fly-240/bundles/sportsmediacss/images/league-logos/light/CHLG.svg"
          />
        </div>
        <div>
          <h1>UEFA Champions League Scores</h1>
          <aside>
            Scores for {settings && dateFns.format(settings.selectedDate, "MMM dd, yyyy")}
          </aside>
        </div>
      </div>
      <div className={styles.sponsor}>
        <figure>
          <img src="https://sportsfly.cbsistatic.com/fly-240/bundles/sportsmediacss/images/partners/william-hill/odds-by-vertical-stacked.svg" />
        </figure>
      </div>
    </div>
  );
};

export default Marquee;
