import React from "react";
import Head from "next/head";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsAdapter from "@date-io/date-fns";
import { enUS } from "date-fns/locale";
import SoccerScoreboard from "./soccer/[league]/scoreboard";
import styles from "../styles/Home.module.css";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardHeader,
  Divider,
  CardContent
} from "@material-ui/core";
import useSettings from "../src/hooks/useSettings";

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const [selectedDateBefore, setSelectedDateBefore] = React.useState<Date | null>(null);
  const [selectedDateAfter, setSelectedDateAfter] = React.useState<Date | null>(null);
  const { saveSettings } = useSettings();
  const dateFns = new DateFnsAdapter({ locale: enUS });

  const handleTabChange = (_event: React.SyntheticEvent<Element, Event>, newDate: Date) => {
    setSelectedDate(newDate);

    saveSettings({
      selectedDate: newDate
    });
    // navigate();
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  React.useEffect(() => {
    const selDateBefore = dateFns.addDays(selectedDate, -1);
    const selDateAfter = dateFns.addDays(selectedDate, 1);
    setSelectedDateBefore(selDateBefore);
    setSelectedDateAfter(selDateAfter);
  }, [selectedDate]);

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
        <Card style={{ width: "100%" }}>
          <CardHeader
            style={{ paddingLeft: 32 }}
            title={
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Scoress
              </Typography>
            }
          />
          <Divider />

          <CardContent style={{ display: "flex", alignItems: "center", padding: "0 16px" }}>
            <Box style={{ height: 40 }}>
              <Tabs
                value={selectedDate}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                scrollButtons="auto"
                variant="scrollable"
                aria-label="page tabs">
                <Tab
                  key="daybefore"
                  label={selectedDateBefore && dateFns.format(selectedDateBefore, "MMM dd, yyyy")}
                  value={selectedDateBefore}
                />
                <Tab
                  key="day"
                  label={selectedDate && dateFns.format(selectedDate, "MMM dd, yyyy")}
                  value={selectedDate}
                />
                <Tab
                  key="dayafter"
                  label={selectedDateAfter && dateFns.format(selectedDateAfter, "MMM dd, yyyy")}
                  value={selectedDateAfter}
                />
              </Tabs>
            </Box>

            <Box style={{ flexGrow: 1 }}></Box>

            <Box>
              <MuiPickersUtilsProvider utils={DateFnsAdapter}>
                <KeyboardDatePicker
                  autoOk={true}
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
            </Box>
          </CardContent>

          <Divider />

          <CardContent>
            {selectedDate && (
              <SoccerScoreboard
                startDate={dateFns.format(selectedDate, "yyyyMMdd")}
                endDate={dateFns.format(selectedDate, "yyyyMMdd")}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;
