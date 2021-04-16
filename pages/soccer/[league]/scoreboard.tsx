import React from "react";
// import { useRouter } from "next/router";
import getSchedule from "../../../data/getSchedule";
import { IGame } from "../../../components/utils/common-types";
import Demo from "../../../components/scoreboard/Demo"
const SoccerScoreboard: React.FC = () => {
  // const router = useRouter();
  // const { league } = router.query;
  const { data, isLoading, isError } = getSchedule("champions-league", "20210414", "20210414");

  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "An error occurred"}
      {data && (
        <>
          {data.data.map((game: IGame) => (
              <div key={game.gameId}>
                <Demo gameData={game} />
              </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SoccerScoreboard;
