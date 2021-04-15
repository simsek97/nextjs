export type TGameStatusType = "" | "C" | "D" | "F" | "N" | "O" | "P" | "S" | "X";
export type TTournamentGameStatus =
  | "unannounced"
  | "scheduled"
  | "inprogress"
  | "delayed"
  | "cancelled"
  | "postponed"
  | "final"
  | "suspended"
  | "tba"
  | "pretourney";

export type TSportType =
  | "MLB"
  | "NBA"
  | "NFL"
  | "NHL"
  | "NCAAF"
  | "CFB"
  | "NCAAB"
  | "MLS"
  | "EPL"
  | "UEFA"
  | "CHLG"
  | "ARGE"
  | "BUND"
  | "LIGA"
  | "SERI"
  | "SCOT"
  | "FRAN"
  | "HOLL"
  | "BRAZ"
  | "FMF"
  | "WCS";
export type TSeasonType = "pre" | "regular" | "post";
export interface IGameOdds {
  opening_spread: string;
  current_spread: string;
  home_current_spread: string;
  away_current_spread: string;
  home_current_spread_line: string;
  away_current_spread_line: string;
  opening_total: string;
  current_total: string;
  over_current_total_line: string;
  under_current_total_line: string;
  home_opening_money: string;
  away_opening_money: string;
  home_current_money: string;
  away_current_money: string;
  home_spread_selection_id: string;
  away_spread_selection_id: string;
  home_money_selection_id: string;
  away_money_selection_id: string;
  over_selection_id: string;
  under_selection_id: string;
}
export interface IGame {
  gameId: string | number;
  awayTeamScore?: number;
  homeTeamScore?: number;
  scheduledTimeEpoch?: number;
  gameStatus: TGameStatusType;
  defaultTvNetwork?: string | null;
  gameAbbr?: string;
  odds?: IGameOdds;
  liveVideo?: string;
  highlightsVideo?: string;
  gamePeriod?: number;
  timeRemaining?: string | null;
}
