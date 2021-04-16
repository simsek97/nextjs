import React from 'react';
import ScoresTableHeader from './ScoresTableHeader';
import ScoresTableTeam from './ScoresTableTeam';
import { Table } from '../../shared/components';
import { getAllPeriods, formatWinLossTie } from '../../shared/utils';

const ScoresTable = ({ arena, device, gameData, liveData, gameMode, regPeriods }) => {
    const gameStatus = liveData.status;
    const showScores = ['DELAYED', 'SCHEDULED', 'POSTPONED'].includes(gameStatus) ? false : true;

    const awayTeamScore =
        liveData.awayTeamScore || liveData.awayTeamScore === 0 ? liveData.awayTeamScore : '';
    const homeTeamScore =
        liveData.homeTeamScore || liveData.homeTeamScore === 0 ? liveData.homeTeamScore : '';

    const currentPeriod =
        liveData.game_status && liveData.game_status.quarter
            ? liveData.game_status.quarter
            : liveData.game_status && liveData.game_status.period
            ? liveData.game_status.period
            : '';
    const awayscore =
        liveData.game_status && liveData.game_status.awayscore
            ? liveData.game_status.awayscore
            : '';
    const homescore =
        liveData.game_status && liveData.game_status.homescore
            ? liveData.game_status.homescore
            : '';
    // const periods = awayscore ? awayscore.quarter : '';
    const periodsToShow = arena === 'soccer' ? [] : getAllPeriods(arena, currentPeriod);
    const seasonType = gameData.type ? gameData.type.toLowerCase() : 'regular';
    const tournament = gameData.tournament ? gameData.tournament : '';
    const odds = gameData.odds ? gameData.odds : null;
    const penaltyShootouts = typeof liveData.is_shootout !== 'undefined' && liveData.is_shootout;
    const aggregateScores =
        typeof awayscore.aggregatescore !== 'undefined' &&
        typeof homescore.aggregatescore !== 'undefined';
    const teams = arena === 'soccer' ? ['home', 'away'] : ['away', 'home'];
    const winner =
        awayscore.total && homescore.total
            ? awayscore.total > homescore.total
                ? 'away'
                : awayscore.total < homescore.total
                ? 'home'
                : null
            : null;

    return (
        <Table>
            {showScores && device === 'desktop' && (
                <ScoresTableHeader
                    arena={arena}
                    currentPeriod={currentPeriod}
                    periodsToShow={periodsToShow}
                    penaltyShootouts={penaltyShootouts}
                    aggregateScores={aggregateScores}
                    regPeriods={regPeriods}
                />
            )}
            <tbody>
                {teams.map(type => {
                    const teamData = type === 'away' ? gameData.awayteam : gameData.hometeam;
                    const teamScore = type === 'away' ? awayTeamScore : homeTeamScore;
                    const teamScores = type === 'away' ? awayscore : homescore;
                    const liveTeamData = type === 'away' ? liveData.awayteam : liveData.hometeam;
                    const winLossTie = formatWinLossTie(
                        arena,
                        liveTeamData.wins,
                        liveTeamData.losses,
                        liveTeamData.ties
                    );

                    return (
                        <ScoresTableTeam
                            key={type}
                            arena={arena}
                            device={device}
                            gameMode={gameMode}
                            showScores={showScores}
                            type={type}
                            team={teamData}
                            winLossTie={winLossTie}
                            scores={teamScores}
                            winner={winner}
                            odds={odds}
                            currentPeriod={currentPeriod}
                            periodsToShow={periodsToShow}
                            penaltyShootouts={penaltyShootouts}
                            aggregateScores={aggregateScores}
                            tournament={tournament}
                            seasonType={seasonType}
                            teamScore={teamScore}
                        />
                    );
                })}
            </tbody>
        </Table>
    );
};

export default ScoresTable;
