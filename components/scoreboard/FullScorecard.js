import React from "react";
import NBAIcon from "@cbs-sports/fantasy-client-shared-lib/build/cjs/components/icons/IcoMoonIcons/NBAIcon";
import styled from "styled-components";

const ScoreCard = styled.div`
  margin: 20px;
  padding: 0px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;

  & > div.Teams {
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    padding: 50px 20px;

    & > div.TeamRow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:first-child {
        margin-bottom: 10px;
      }
      & > div.TeamLogoName {
        display: flex;
        align-items: center;

        & > div.TeamName {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          & .TeamRecords {
            font-size: 80%;
          }
        }
      }
      & > div.TeamScore {
        font-size: 160%;
        font-weight: bold;
        text-align: center;
        min-width: 30px;
        &.Loser {
          color: gray;
        }
      }
    }
  }
  & > div.GameStatus {
    flex: 0 0 10%;
    border-right: 3px solid #cccccc;
    height: 100px;
    padding: 40px 16px;
  }

  & > div.TeamScorings {
    width: auto;
    display: flex;
    flex: 0 0 40%;
    flex-direction: column;
    padding: 10px;
    & > div.TeamScoringTeam {
      display: flex;
      align-items: flex-start;
      &:first-child {
        margin-bottom: 10px;
      }
      & > div.TeamScoringAbbr {
        margin-right: 10px;
        font-size: 12px;
        font-weight: bold;
      }
      & > div.TeamScoringLine {
        font-size: 12px;
        font-weight: normal;
        color: #999999;
        text-align: left;
      }
    }
  }
  & > div.GameLinks {
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-between;
    width: 150px;
    flex-direction: column;
    align-items: stretch;

    & > div.GameLinkItem {
      border-left: 1px solid #cccccc;
      text-align: center;
      min-height: 100px;
      padding: 35px 5px;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid #cccccc;
      }
    }
  }
`;

const getLogo = (abbr) => {
  const imgSrc = `https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/soccer/${abbr}.svg`;
  return <img width="40px" src={imgSrc} />;
};

const FullScorecard = ({ gameData }) => {
  console.log(">>", gameData);

  return (
    <ScoreCard>
      <div className="Teams">
        <div className="TeamRow">
          <div className="TeamLogoName">
            <div className="TeamLogo">{getLogo(gameData.homeTeam.abbrev)}</div>
            <div className="TeamName">
              <span>{gameData.homeTeam.mediumName}</span>
              <span className="TeamRecords">{`${gameData.scoring.scoreboard.hometeam.wins} - ${gameData.scoring.scoreboard.hometeam.losses} - ${gameData.scoring.scoreboard.hometeam.ties}`}</span>
            </div>
          </div>
          <div
            className={`TeamScore ${
              gameData.homeTeamScore < gameData.awayTeamScore ? "Loser" : ""
            }`}>
            {gameData.homeTeamScore}
          </div>
        </div>

        <div className="TeamRow">
          <div className="TeamLogoName">
            <div className="TeamLogo">{getLogo(gameData.awayTeam.abbrev)}</div>
            <div className="TeamName">
              <span>{gameData.awayTeam.mediumName}</span>
              <span className="TeamRecords">{`${gameData.scoring.scoreboard.awayteam.wins} - ${gameData.scoring.scoreboard.awayteam.losses} - ${gameData.scoring.scoreboard.awayteam.ties}`}</span>
            </div>
          </div>
          <div
            className={`TeamScore ${
              gameData.awayTeamScore < gameData.homeTeamScore ? "Loser" : ""
            }`}>
            {gameData.awayTeamScore}
          </div>
        </div>
      </div>

      <div className="GameStatus">{gameData.gameStatusDesc}</div>
      <div className="TeamScorings">
        <div className="TeamScoringTeam">
          <div className="TeamScoringAbbr">{gameData.homeTeam.abbrev}</div>
          <div className="TeamScoringLine">
            {gameData.scoring.scores
              .filter((s) => s.component.teamid == gameData.homeTeamId)
              .map((s) => (
                <div key={s.id}>{s.description}</div>
              ))}
          </div>
        </div>
        <div className="TeamScoringTeam">
          <div className="TeamScoringAbbr">{gameData.awayTeam.abbrev}</div>
          <div className="TeamScoringLine">
            {gameData.scoring.scores
              .filter((s) => s.component.teamid == gameData.awayTeamId)
              .map((s) => (
                <div key={s.id}>
                  {/* {s.type === "GOAL" && <NBAIcon style={{ marginRight: 4 }} />} */}
                  {s.description}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="GameLinks">
        <div className="GameLinkItem">Match Tracker</div>
        <div className="GameLinkItem">Recap</div>
      </div>
    </ScoreCard>
  );
};
export default FullScorecard;
