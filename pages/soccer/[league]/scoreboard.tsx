import React from "react";
// import { useRouter } from "next/router";
import getSchedule from "../../../data/getSchedule";
import { IGame } from "../../../components/utils/common-types";

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
          <h1>Games:</h1>
          {data.data.map((game: IGame) => (
            <h3 key={game.gameId}>{game.gameAbbr}</h3>
          ))}
        </>
      )}
    </div>
  );
};

export default SoccerScoreboard;
