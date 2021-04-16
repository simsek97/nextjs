import React from 'react';
import { getLastPlayTeam } from '../../shared/utils';

const LastPlay = ({ enhanced, gameMode, lastPlay, awayteam, hometeam }) => {
    const lastPlayTeam = lastPlay.team_abbr
        ? lastPlay.team_abbr
        : getLastPlayTeam(lastPlay.component, awayteam, hometeam);

    return enhanced.toLowerCase() === 'yes' && gameMode === 'ingame' && lastPlay ? (
        <div className='section status-statement'>
            <table>
                <tbody>
                    <tr>
                        <td className='label'>Last Play</td>
                    </tr>
                    <tr>
                        <td>
                            <span className='other-info'>
                                <strong>{lastPlay.time_remaining}</strong> {lastPlay.description}
                                {lastPlayTeam ? ` (${lastPlayTeam})` : ''}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ) : (
        ''
    );
};

export default LastPlay;
