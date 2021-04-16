import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import GamblingAd from '../../react/core/GamblingAd';
import { hasAllAccessVideo } from '../../shared/utils';
import ScoreCard from './ScoreCard';
import ShareThrough from './ShareThrough';
import AAPromo from './AAPromo';
import { Row } from './Shared';
import { fallbackActions } from '../soccer/redux/sagas/games';

const columnClass = (device, column) => {
    var columnText = '';

    if (device === 'desktop') {
        columnText = column % 3 === 1 ? 'first' : column % 3 === 2 ? 'second' : 'third';
    } else {
        columnText = column % 2 === 1 ? 'first' : 'second';
    }

    return columnText;
};

const Scoreboard = ({
    allAccessUrl,
    arena,
    device,
    fallbackUrl,
    gamblingPartnerAds,
    games,
    leagueAbbr,
    liveGames,
    updateGames,
    ...props
}) => {
    const numberOfGames = games.length;
    // Show gambling ad after 2nd row
    const adAfterGame = device === 'desktop' ? 6 : 4;

    // Iterate over the games to see if any of them are showing on all access.
    const oneGameHasAA = games.find(
        game =>
            game.id !== 'sharethrough' &&
            hasAllAccessVideo(leagueAbbr, game.tv) &&
            game.status.toLowerCase() != 'final'
    );

    useEffect(() => {
        if (fallbackUrl) {
            const interval = setInterval(() => {
                updateGames(fallbackUrl);
            }, 60000);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <Fragment>
            {device === 'mobile' && oneGameHasAA && (
                <div className='all-access scoreboard-hud'>
                    <AAPromo allAccessUrl={allAccessUrl} />
                </div>
            )}

            <div className='score-cards'>
                {games.map((game, i) => {
                    const gameKey = i + 1;
                    const gameColumn = 'column-' + columnClass(device, gameKey);
                    const liveGame = liveGames[i];

                    const gameCard =
                        game.id === 'sharethrough' ? (
                            <ShareThrough
                                key={i}
                                arena={arena}
                                className={gameColumn}
                                device={device}
                                gameData={game}
                                {...props}
                            />
                        ) : (
                            <ScoreCard
                                key={i}
                                arena={arena}
                                className={gameColumn}
                                device={device}
                                gameData={game}
                                leagueAbbr={leagueAbbr}
                                liveData={liveGame}
                                {...props}
                            />
                        );

                    const showGamblingAd =
                        (numberOfGames < adAfterGame && gameKey === numberOfGames) ||
                        (numberOfGames > adAfterGame && gameKey === adAfterGame)
                            ? true
                            : false;

                    return showGamblingAd
                        ? [
                              gameCard,
                              <Row key='gambling_partner_ad' useWrapper={false}>
                                  <GamblingAd
                                      arena={arena}
                                      leagueAbbr={leagueAbbr}
                                      device={device}
                                      calculateWidth={false}
                                  />
                              </Row>
                          ]
                        : gameCard;
                })}
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    allAccessUrl: state.statics.allAccessUrl,
    arena: state.config.arena,
    device: state.config.device,
    fallbackUrl: state.config.fallbackUrl,
    gamblingPartnerAds: state.config.gamblingPartnerAds,
    games: state.statics.games,
    leagueAbbr: state.statics.leagueAbbr,
    liveGames: state.games
});

const mapDispatchToProps = dispatch => ({
    updateGames(fallbackUrl) {
        dispatch(fallbackActions.updateGames(fallbackUrl));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
