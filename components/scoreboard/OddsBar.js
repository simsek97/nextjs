import React from 'react';

const oddsFormat = odds => {
    if (typeof odds === 'undefined') {
        return '';
    }

    return odds > 0 ? '+' + odds : odds;
};

const OddsBar = ({ gameData }) => {
    const odds = typeof gameData.odds !== 'undefined' ? gameData.odds : null;
    const awayteamAbbr = gameData.awayteam.abbr;
    const hometeamAbbr = gameData.hometeam.abbr;

    if (!odds || odds.length === 0) {
        return '';
    }

    return (
        <ul className='odds-block'>
            <div className='odds-block-title'>ODDS</div>

            <ul className='BettingOddsDetailed'>
                <li className='BettingOddsDetailed-type'>
                    <span className='BettingOddsDetailed-subTitle'>ML: </span>
                    {odds.away_current_money &&
                        `${awayteamAbbr} ${oddsFormat(odds.away_current_money)}, `}
                    {odds.home_current_money &&
                        `${hometeamAbbr} ${oddsFormat(odds.home_current_money)}, `}
                    {odds.draw_current_money && `Draw ${oddsFormat(odds.draw_current_money)}`}
                </li>

                <li className='BettingOddsDetailed-type'>
                    <span className='BettingOddsDetailed-subTitle'>Total: </span>
                    {odds.current_total &&
                        odds.over_current_total_line &&
                        `o${odds.current_total} (${oddsFormat(odds.over_current_total_line)}), `}
                    {odds.opening_total &&
                        odds.under_current_total_line &&
                        `u${odds.opening_total} (${oddsFormat(odds.under_current_total_line)})`}
                </li>
            </ul>
        </ul>
    );
};

export default OddsBar;
