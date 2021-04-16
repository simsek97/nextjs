import React, { useState, useEffect } from 'react';
import { getTeamUrl, getSeoName, getTeamLogo, formatOdds, getTeamRank } from '../../shared/utils';
import { TeamName, TeamLogo } from '../../shared/components';
import { soccerFallbackLogo } from '../config';

const PenaltyShootoutsColumn = ({ scores, penaltyShootouts }) => {
    return scores && penaltyShootouts ? (
        <td className='ScoreCard-linescoreItem ScoreCard-linescoreItem--important'>
            {scores.shootoutgoals}
        </td>
    ) : null;
};

const AggregateColumn = ({ scores, aggregateScores }) => {
    return scores && aggregateScores ? (
        <td className='ScoreCard-linescoreItem ScoreCard-linescoreItem--regular'>
            {scores.aggregatescore}
        </td>
    ) : null;
};

const ScoresTableTeam = ({
    arena,
    device,
    gameMode,
    showScores,
    type = 'away',
    team,
    winLossTie,
    scores,
    winner,
    odds,
    currentPeriod,
    periodsToShow,
    penaltyShootouts,
    aggregateScores,
    tournament,
    seasonType,
    teamScore
}) => {
    const teamName = team.location + ' ' + team.nickname;
    const teamSeoName = getSeoName(teamName);
    const teamUrl = getTeamUrl(arena, team.abbr, teamSeoName);
    const teamStaticLogo = getTeamLogo(arena, team.abbr, 'dark');
    const teamStatus = typeof team.status !== 'undefined' ? team.status : '';
    const [teamLogo, setTeamLogo] = useState(arena === 'soccer' ? '' : teamStaticLogo);

    const isSpecialTeam = teamStatus.toLowerCase() === 'special';
    const periods =
        scores && scores.quarter ? scores.quarter : scores && scores.period ? scores.period : '';
    const teamRank = device === 'desktop' ? getTeamRank(arena, team, tournament, seasonType) : '';

    const onLogoError = () => {
        setTeamLogo(soccerFallbackLogo);
    };
    const winnerClass = device === 'mobile' &&  winner === type ? 'winner' : '';

    useEffect(() => {
        setTeamLogo(teamStaticLogo);
    }, [team]);

    return (
        <tr className={`${winnerClass}`}>
            <td className={`team team--${arena}`}>
                {gameMode === 'postgame' && winner === type && (
                    <span className='marker'>
                        <span className='icon-moon-caret-right'></span>
                    </span>
                )}
                {teamLogo && (
                    <TeamLogo
                        arena={arena}
                        teamUrl={teamUrl}
                        teamLogo={teamLogo}
                        onLogoError={onLogoError}
                    />
                )}
                {teamRank && <span className='rank'>{`${teamRank} `}</span>}
                {isSpecialTeam && <span className='team'>{team.location}</span>}
                {!isSpecialTeam && (
                    <TeamName
                        arena={arena}
                        device={device}
                        teamUrl={teamUrl}
                        teamName={teamName}
                        teamAbbr={team.abbr}
                        nickname={team.nickname}
                        mediumname={team.mediumname}
                    />
                )}
                {winLossTie && <span className='record'>{winLossTie}</span>}
            </td>
            {showScores &&
                gameMode !== 'pregame' && [
                    periodsToShow.map((p, i) => {
                        return <td key={p}>{periods[i + 1] ? periods[i + 1] : '-'}</td>;
                    }),
                    <td
                        key='T'
                        className={
                            arena === 'soccer'
                                ? 'ScoreCard-linescoreItem ScoreCard-linescoreItem--important'
                                : ''
                        }
                    >
                        {scores.total ? scores.total : teamScore}
                    </td>,
                    <PenaltyShootoutsColumn
                        key='PEN'
                        scores={scores}
                        penaltyShootouts={penaltyShootouts}
                    />,
                    <AggregateColumn key='AGG' scores={scores} aggregateScores={aggregateScores} />
                ]}
            {showScores && gameMode === 'pregame' && (
                <AggregateColumn key='AGG' scores={scores} aggregateScores={aggregateScores} />
            )}
            {gameMode === 'pregame' && odds && (
                <td
                    key='ODDS'
                    className={`in-progress-odds in-progress-odds-${type}`}
                >
                    {arena === 'soccer' 
                        ? type === 'home' ? formatOdds(odds, 'ou') : formatOdds(odds, 'ml') 
                        : type === 'away' ? formatOdds(odds, 'ou') : formatOdds(odds, 'ml')
                    }
                </td>
            )}
        </tr>
    );
};

export default ScoresTableTeam;
