import React from 'react';
import { getPlayerUrl, getPlayerMug, getSportFromArena } from '../../shared/utils';
import { TeamName } from '../../shared/components';

const formatPlayerAndMinute = play => {
    return `${
        play.component.playerFirstName !== '' ? play.component.playerFirstName.charAt(0) + '. ' : ''
    }${play.component.playerLastName ? play.component.playerLastName + ' ' : ''}(${
        play.minutes + play.extra
    }')`;
};

const PlayRow = ({ play }) => {
    return (
        <p className='play-item'>
            <span className='play-icon icon-moon-arena-soccer'></span>
            <span className='play-description'>{formatPlayerAndMinute(play)}</span>
        </p>
    );
};

const RedCardRow = ({ play }) => {
    return (
        <p className='play-item'>
            <span className='play-icon play-icon--red icon-moon-soccer-card'></span>
            <span className='play-description'>{formatPlayerAndMinute(play)}</span>
        </p>
    );
};

const YellowCardRow = ({ play }) => {
    return (
        <p className='play-item'>
            <span className='play-icon play-icon--yellow icon-moon-soccer-card'></span>
            <span className='play-description'>{formatPlayerAndMinute(play)}</span>
        </p>
    );
};

const ScoringPlays = ({ arena, device, awayTeam, homeTeam, scoringPlays, allPlays }) => {
    const awayTeamPlays = scoringPlays.filter(play =>
        play.component
            ? play.component.teamid === awayTeam.id && !play.description.includes('Shot on Goal')
            : null
    );
    const homeTeamPlays = scoringPlays.filter(play =>
        play.component
            ? play.component.teamid === homeTeam.id && !play.description.includes('Shot on Goal')
            : null
    );
    const awayTeamCards = allPlays.filter(play =>
        play.component
            ? play.component.teamid === awayTeam.id &&
              (play.type === 'REDCARD' || play.type === 'YELLOWCARD')
            : null
    );
    const homeTeamCards = allPlays.filter(play =>
        play.component
            ? play.component.teamid === homeTeam.id &&
              (play.type === 'REDCARD' || play.type === 'YELLOWCARD')
            : null
    );

    return (
        <div className={`section scoring-plays`}>
            <table className='TableBase-table'>
                <thead>
                    <tr>
                        <th className='team'>
                            <TeamName
                                arena={arena}
                                device={device}
                                teamName={`${homeTeam.location} ${homeTeam.nickname}`}
                                teamAbbr={homeTeam.abbr}
                                nickname={homeTeam.nickname}
                                mediumname={homeTeam.mediumname}
                            />
                        </th>
                        <th className='team'>
                            <TeamName
                                arena={arena}
                                device={device}
                                teamName={`${awayTeam.location} ${awayTeam.nickname}`}
                                teamAbbr={awayTeam.abbr}
                                nickname={awayTeam.nickname}
                                mediumname={awayTeam.mediumname}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {homeTeamPlays.map(play => (
                                <PlayRow key={play.id} play={play} />
                            ))}
                            {homeTeamCards.map(play => {
                                return play.type === 'REDCARD' ? (
                                    <RedCardRow key={play.id} play={play} />
                                ) : play.type === 'YELLOWCARD' ? (
                                    <YellowCardRow key={play.id} play={play} />
                                ) : (
                                    ''
                                );
                            })}
                        </td>
                        <td>
                            {awayTeamPlays.map(play => (
                                <PlayRow key={play.id} play={play} />
                            ))}
                            {awayTeamCards.map(play => {
                                return play.type === 'REDCARD' ? (
                                    <RedCardRow key={play.id} play={play} />
                                ) : play.type === 'YELLOWCARD' ? (
                                    <YellowCardRow key={play.id} play={play} />
                                ) : (
                                    ''
                                );
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScoringPlays;
