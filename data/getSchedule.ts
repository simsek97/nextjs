import useSWR from "swr";
import fetcher from "../components/utils/fetcher";
import leagueToAbbreviation from "../components/utils/leagueToAbbreviation";
import { IPrimpyGameResponse } from "../components/utils/primpy-types";
import { prod } from "../config";

type TScheduleApiReturn = {
  data?: IPrimpyGameResponse;
  isLoading: boolean;
  isError: boolean;
};

function getSchedule(
  league: string | string[],
  startDate: string,
  endDate: string
): TScheduleApiReturn {
  if (!league) {
    return {
      data: null,
      isLoading: true,
      isError: false
    };
  }

  const leagueAbbr = leagueToAbbreviation(league);
  const { data, error } = useSWR(
    `${prod.primpyUrl}/league/games/${leagueAbbr}?access_token=${prod.accessToken}&startDate=${startDate}&endDate=${endDate}&resources=metaData%2CscoringScoreboard%2CscoringScores%2CscoringPlays%2Cvenue%2CgameOdds%2CprobablePlayers%2CscoringPlayerStats%2CscoringYtdPlayerStats&dateFormat=Y-MM-DD%5CTHH%3Amm%3AssZ`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default getSchedule;
