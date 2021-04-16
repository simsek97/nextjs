import React, { Fragment } from 'react';
import styled from "styled-components"

const ScoreCard = styled.div`
    
    margin: 20px;
    padding: 0px;
    border: 1px solid #CCCCCC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    & > div.Wrapper {
        display: flex;
        width: 100%;
        margin-right: 150px;
        position: relative;
        align-items: center;
        & > div.Teams {
            display: flex;
            flex-direction: column;
            width: 40%;
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
                        margin-left: 5px;
                    }
                }
            
            }
        }
        & > div.GameStatus {
            border-right: 3px solid #CCCCCC;
            height: 100px;
            padding: 40px 16px;
        }

        & > div.TeamScorings {
            width: 40%;
            display: flex;
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
                }
            }
        }
    }
    & > div.GameLinks {
      
    
        background-color: #F7F7F7;
        display: flex;
        justify-content: space-between;
        // position: absolute;
        // right: 0;
        // top: 0;
        width: 250px;
        flex-direction: column;
        align-items: stretch;
        & > div.GameLinkItem {
            border-bottom: 1px solid #CCCCCC;
            text-align: center;
            min-height: 80px;
            
        }
    }
`


const getLogo = (abbr) => {
    const imgSrc = `https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/soccer/${abbr}.svg`
    return (<img width="30px" src={imgSrc} />)
}

const Demo = ({
    gameData,

}) => {
    console.log(">>", gameData)

    return (
        <ScoreCard>
            <div className="Wrapper">
            <div className="Teams">
                <div className="TeamRow">
                    <div className="TeamLogoName">
                        <div className="TeamLogo">{getLogo(gameData.homeTeam.abbrev)}</div>
                        <div className="TeamName">{gameData.homeTeam.mediumName}</div>
                    </div>
                    <div className="TeamScore">{gameData.homeTeamScore}</div>
                </div>

                <div className="TeamRow">
                    <div className="TeamLogoName">
                        <div className="TeamLogo">{getLogo(gameData.awayTeam.abbrev)}</div>
                        <div className="TeamName">{gameData.awayTeam.mediumName}</div>
                    </div>
                    <div className="TeamScore">{gameData.awayTeamScore}</div>
                </div>
            </div>

            <div className="GameStatus">{gameData.gameStatusDesc}</div>
            <div className="TeamScorings">
                <div className="TeamScoringTeam">
                    <div className="TeamScoringAbbr">{gameData.homeTeam.abbrev}</div>
                    <div className="TeamScoringLine">
                        { gameData.scoring.scores.filter(s => s.component.teamid == gameData.homeTeamId).map(s => <div key={s.id}>{s.description}</div>)}
                    </div>
                </div>
                <div className="TeamScoringTeam">
                    <div className="TeamScoringAbbr">{gameData.awayTeam.abbrev}</div>
                    <div className="TeamScoringLine">
                        { gameData.scoring.scores.filter(s => s.component.teamid == gameData.awayTeamId).map(s => <div key={s.id}>{s.description}</div>)}
                    </div>
                </div>
            </div>
            </div>
            <div className="GameLinks">
                <div className="GameLinkItem">{gameData.tvInfo[0].name}</div>
                <div className="GameLinkItem">GAME TRACKER</div>
                
            </div>
            
        </ScoreCard>
    );
};
 export default Demo;
