import React, { Fragment } from 'react';
import {
    getRegulationPeriods,
    getGameMode,
    hasAllAccessVideo,
    getStringParam,
    isServer
} from '../../shared/utils';

import GameStatus from './GameStatus';
import Broadcaster from './Broadcaster';
import ScoresTable from './ScoresTable';
import GameSeries from './GameSeries';
import ScoringPlays from './ScoringPlays';
import RelatedVideo from './RelatedVideo';
import LastPlay from './LastPlay';
import PlayerStats from './PlayerStats';
import OddsBar from './OddsBar';
import BottomBar from './BottomBar';
import AAPromo from './AAPromo';

// This is for lack of data quality. Once we get data in a good shape
// we can remove this parameter.
// Use: ?showGoalsCards=true
const showGoalsCards = !isServer
    ? !!getStringParam('showGoalsCards', window.location.search || '')
    : '';

const ScoreCard = ({
    allAccessUrl,
    arena,
    className,
    device,
    externalLinks,
    gameData,
    leaders,
    leagueAbbr,
    liveData,
    relatedContent,
    videos
}) => {
    const gameId = gameData.id;
    const gameAbbr = gameData.abbr;
    const awayTeam = gameData.awayteam;
    const homeTeam = gameData.hometeam;
    const awayteamAbbr = awayTeam.abbr;
    const hometeamAbbr = homeTeam.abbr;
    const gameStatus = liveData.status;
    const gameMode = getGameMode(gameStatus);
    const scoresData = liveData.game_status ? liveData.game_status : null;
    const scoringPlays = liveData.scores ? liveData.scores : null;
    const allPlays = liveData.plays ? liveData.plays : null;
    const teamLeaders = scoresData && scoresData.top_scorers ? scoresData.top_scorers : null;
    const lastPlay = scoresData && scoresData.last_play ? scoresData.last_play : null;
    const relatedVideo = videos ? videos[gameAbbr] : null;
    const regPeriods = getRegulationPeriods(arena);
    const tv = gameData.tv;
    const hasAllAccess = hasAllAccessVideo(leagueAbbr, tv);
    const showAllAccessUrl = allAccessUrl && hasAllAccess && gameMode !== 'postgame';

    return (
        <Fragment>
            <div
                id={`game-${gameId}`}
                className={`single-score-card ${arena} ${gameMode} ${className}`}
            >
                <div className='live-update'>
                    <div className='top-bar'>
                        <div className={`game-status ${gameMode}`}>
                            <GameStatus
                                arena={arena}
                                device={device}
                                gameMode={gameMode}
                                gameStatus={gameStatus}
                                statusData={scoresData}
                                scheduledEpoch={gameData.scheduled_epoch}
                                regPeriods={regPeriods}
                            />
                        </div>
                        <div className='broadcaster'>
                            <Broadcaster
                                device={device}
                                tv={tv}
                                liveVideo={gameData.live_video}
                                gameMode={gameMode}
                                gameStatus={gameStatus}
                            />
                        </div>
                    </div>
                    <div className='in-progress-table section'>
                        <ScoresTable
                            arena={arena}
                            device={device}
                            gameData={gameData}
                            liveData={liveData}
                            gameMode={gameMode}
                            regPeriods={regPeriods}
                        />
                    </div>
                    <GameSeries
                        arena={arena}
                        awayteamAbbr={awayteamAbbr}
                        hometeamAbbr={hometeamAbbr}
                        gameMode={gameMode}
                        series={liveData.series}
                        label={liveData.label}
                        metaData={liveData.meta}
                        tournament={gameData.tournament}
                        venue={gameData.venue}
                    />
                    {relatedVideo && <RelatedVideo />}
                    {scoringPlays &&
                        scoringPlays.length > 0 &&
                        arena === 'soccer' &&
                        gameMode !== 'pregame' &&
                        showGoalsCards && (
                            <ScoringPlays
                                arena={arena}
                                device={device}
                                awayTeam={awayTeam}
                                homeTeam={homeTeam}
                                scoringPlays={scoringPlays}
                                allPlays={allPlays}
                            />
                        )}
                    {lastPlay && (
                        <LastPlay
                            enhanced={gameData.enhanced}
                            gameMode={gameMode}
                            lastPlay={lastPlay}
                            awayteam={gameData.awayteam}
                            hometeam={gameData.hometeam}
                        />
                    )}
                    {device === 'desktop' && teamLeaders && teamLeaders.length > 0 && (
                        <PlayerStats
                            arena={arena}
                            gameMode={gameMode}
                            relatedVideo={relatedVideo}
                            preview={gameData.preview}
                            recap={gameData.recap}
                            awayteamAbbr={awayteamAbbr}
                            hometeamAbbr={hometeamAbbr}
                            teamLeaders={teamLeaders}
                            leaders={leaders}
                        />
                    )}

                    {arena === 'soccer' && gameMode === 'pregame' && device === 'desktop' && (
                        <OddsBar gameData={gameData} />
                    )}

                    {showAllAccessUrl &&
                        device === 'desktop' &&
                        gameStatus.toLowerCase() != 'final' && (
                            <AAPromo allAccessUrl={allAccessUrl} />
                        )}
                </div>
                {device === 'desktop' && (
                    <BottomBar
                        allAccessUrl={allAccessUrl}
                        arena={arena}
                        cstvLink={gameData.cstvlink}
                        enhanced={liveData.enhanced}
                        externalLinks={externalLinks}
                        gameAbbr={gameAbbr}
                        gameId={gameId}
                        gameStatus={gameStatus}
                        leagueAbbr={leagueAbbr}
                        liveVideo={gameData.live_video}
                        preview={gameData.preview}
                        recap={gameData.recap}
                        relatedContent={relatedContent}
                        showAllAccessUrl={showAllAccessUrl}
                        tv={tv}
                    />
                )}
            </div>
        </Fragment>
    );
};
 export default ScoreCard;
