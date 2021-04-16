import React from 'react';
import { getVenueString } from '../../shared/utils';

const RoundAndAggregate = ({ awayteamAbbr, hometeamAbbr, gameMode, metaData }) => {
    const hometeamMeta = metaData ? metaData.homeTeamMetaData : null;
    const awayteamMeta = metaData ? metaData.awayTeamMetaData : null;
    const roundText =
        metaData &&
        metaData.gameTypeDescription &&
        metaData.gameTypeDescription !== '' &&
        metaData.gameTypeDescription !== 'Regular Season'
            ? metaData.gameTypeDescription
            : '';
    const winnerTeam =
        hometeamMeta && hometeamMeta.aggregateOutcome === 'Win'
            ? hometeamMeta
            : awayteamMeta && awayteamMeta.aggregateOutcome === 'Win'
            ? awayteamMeta
            : null;
    const loserTeam =
        hometeamMeta && hometeamMeta.aggregateOutcome === 'Loss'
            ? hometeamMeta
            : awayteamMeta && awayteamMeta.aggregateOutcome === 'Loss'
            ? awayteamMeta
            : null;
    const winnerTeamAbbr =
        hometeamMeta && hometeamMeta.aggregateOutcome === 'Win'
            ? hometeamAbbr
            : awayteamMeta && awayteamMeta.aggregateOutcome === 'Win'
            ? awayteamAbbr
            : null;
    const leadWinText = gameMode === 'pregame' ? 'leads' : 'wins';
    const aggregateText = winnerTeamAbbr
        ? `${winnerTeamAbbr} ${leadWinText} on aggregate ${winnerTeam.aggregateOutcomeScore}-${loserTeam.aggregateOutcomeScore}`
        : '';

    return gameMode === 'pregame' || gameMode === 'postgame'
        ? `${roundText}${roundText !== '' && aggregateText !== '' ? ' - ' : ''}${aggregateText}`
        : roundText;
};

const GameSeries = ({
    arena,
    awayteamAbbr,
    hometeamAbbr,
    gameMode,
    series,
    label,
    metaData,
    tournament,
    venue
}) => {
    const seriesText =
        series && series.series_status && series.series_status !== ''
            ? `GAME ${series.game_number}: ${series.series_status}`
            : '';
    const tournamentText =
        (arena === 'ncaab' || arena === 'collegebasketball') && series && series.tournament !== ''
            ? `${label !== '' ? ', ' : ''}${getVenueString(venue)}`
            : '';

    return (
        <div className='section series-statement'>
            {seriesText}
            {tournamentText}
            {tournamentText === '' && arena === 'soccer' && (
                <RoundAndAggregate
                    awayteamAbbr={awayteamAbbr}
                    hometeamAbbr={hometeamAbbr}
                    gameMode={gameMode}
                    metaData={metaData}
                />
            )}
        </div>
    );
};

export default GameSeries;
