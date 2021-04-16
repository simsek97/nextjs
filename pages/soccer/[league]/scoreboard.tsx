import React from "react";
// import { useRouter } from "next/router";
import getSchedule from "../../../data/getSchedule";
import { IGame } from "../../../components/utils/common-types";
import FullScorecard from "../../../components/scoreboard/FullScorecard";

type TScoreboardType = {
  startDate?: string;
  endDate?: string;
};
const SoccerScoreboard: React.FC<TScoreboardType> = (props) => {
  const { startDate, endDate } = props;
  // const router = useRouter();
  // const { league } = router.query;
  const { data, isLoading, isError } = getSchedule("champions-league", startDate, endDate);

  return (
    <div style={{ textAlign: "center", minHeight: "300px" }}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred</p>}
      {(data?.data && data?.data.length > 0 && (
        <>
          {data.data.map((game: IGame) => (
            <div key={game.gameId}>
              <FullScorecard gameData={game} />
            </div>
          ))}
        </>
      )) || <p>No game for this date!</p>}
    </div>
  );
};

export default SoccerScoreboard;
