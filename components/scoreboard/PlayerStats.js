import React from 'react';
import { getPlayerUrl, getPlayerMug, getSportFromArena } from '../../shared/utils';

const StatsRow = ({ arena, player }) => {
    const playerUrl = getPlayerUrl(arena, player);
    const playerMug = getPlayerMug(arena, player);

    return (
        <tr key={player.id}>
            <td className='label'>
                <a href={playerUrl} target='_blank'>
                    <img src={playerMug} className='player-pic-small-round' />
                </a>
            </td>
            <td>
                <a href={playerUrl} target='_blank' className='player-name'>
                    {player.initial ? player.initial + '. ' : ''}
                    {player.last_name ? player.last_name : ''}
                </a>{' '}
                <span className='player-team'>{player.team_abbr ? player.team_abbr : ''}</span>
                {player.stats && (
                    <span>
                        {player.stats.points && player.stats.points > 0
                            ? `${player.stats.points} ${player.stats.points > 1 ? 'PTS ' : 'PT '}`
                            : ''}
                        {player.stats.rebounds && player.stats.rebounds > 0
                            ? `${player.stats.rebounds} REB `
                            : ''}
                        {player.stats.assists && player.stats.assists > 0
                            ? `${player.stats.assists} AST `
                            : ''}
                    </span>
                )}
            </td>
        </tr>
    );
};

const PlayerStats = ({
    arena,
    gameMode,
    relatedVideo,
    preview,
    recap,
    awayteamAbbr,
    hometeamAbbr,
    teamLeaders,
    leaders
}) => {
    const videoClass =
        relatedVideo &&
        ((gameMode === 'pregame' && preview.toLowerCase() === 'yes') ||
            (gameMode === 'postgame' && recap.toLowerCase() === 'yes'))
            ? 'condensed'
            : '';
    const sectionClass = arena === 'collegebasketball' ? 'condensed' : videoClass;
    const sport = getSportFromArena(arena);

    // Save team leaders in all leaders
    // Object.values(teamLeaders).forEach(leader => {
    //     if (leaders.filter(l => parseInt(l.id) == parseInt(leader.int)).length === 0) {
    //         leaders.push(leader);
    //     }
    // });

    // Check if team exists
    // Object.values(teamLeaders).forEach(leader => {
    //     if (typeof leader.team_abbr === 'undefined' || leader.team_abbr === '') {
    //         const leaderInfo = leaders.find(l => parseInt(l.id) == parseInt(leader.id));
    //         if (leaderInfo.length > 0) leader.team_abbr = leaderInfo.team_abbr;
    //     }
    // });

    var awayTeamLeader = teamLeaders
        .filter(player => player.team_abbr === awayteamAbbr)
        .sort((a, b) => Number(a.stats.points) - Number(b.stats.points));
    var homeTeamLeader = teamLeaders
        .filter(player => player.team_abbr === hometeamAbbr)
        .sort((a, b) => Number(a.stats.points) - Number(b.stats.points));

    return gameMode !== 'pregame' && teamLeaders.length > 0 ? (
        <div className={`section team-player-stats ${sport} ${sectionClass}`}>
            <table>
                <thead>
                    <tr>
                        <th className='label' colSpan='2'>
                            Scoring Leaders
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {awayTeamLeader &&
                        awayTeamLeader.length > 0 &&
                        awayTeamLeader
                            .slice(0, 1)
                            .map(leader => (
                                <StatsRow key={leader.id} arena={arena} player={leader} />
                            ))}
                    {homeTeamLeader &&
                        homeTeamLeader.length > 0 &&
                        homeTeamLeader
                            .slice(0, 1)
                            .map(leader => (
                                <StatsRow key={leader.id} arena={arena} player={leader} />
                            ))}
                </tbody>
            </table>
        </div>
    ) : (
        ''
    );
};

export default PlayerStats;
