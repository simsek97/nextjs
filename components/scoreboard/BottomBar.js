import React from 'react';
import { getGameUrl } from '../../shared/utils';

const BottomBar = ({
    arena,
    leagueAbbr,
    gameId,
    gameAbbr,
    tv,
    allAccessUrl,
    showAllAccessUrl,
    enhanced,
    preview,
    recap,
    liveVideo,
    gameStatus,
    externalLinks,
    relatedContent,
    cstvLink
}) => {
    const noFooter = ['POSTPONED'].includes(gameStatus);
    const isPreview = ['SCHEDULED', 'RESCHEDULED', 'CANCELLED'].includes(gameStatus);
    const isGametracker = ['INPROGRESS', 'DELAYED', 'HALFTIME'].includes(gameStatus);
    const isFinal = ['FINAL'].includes(gameStatus);

    const sportslineUrl =
        externalLinks &&
        typeof externalLinks[gameAbbr] !== 'undefined' &&
        typeof externalLinks[gameAbbr]['sportslineForecastUrl'] !== 'undefined'
            ? externalLinks[gameAbbr]['sportslineForecastUrl']
            : null;
    const tuneInLink =
        externalLinks &&
        typeof externalLinks[gameAbbr] !== 'undefined' &&
        typeof externalLinks[gameAbbr]['tuneInLink'] !== 'undefined'
            ? externalLinks[gameAbbr]['tuneInLink']
            : null;
    const ticketUrl =
        externalLinks &&
        typeof externalLinks[gameAbbr] !== 'undefined' &&
        typeof externalLinks[gameAbbr]['ticketUrl'] !== 'undefined'
            ? externalLinks[gameAbbr]['ticketUrl']
            : null;
    const relatedContentUrl =
        relatedContent && typeof relatedContent[gameId] !== 'undefined'
            ? relatedContent[gameId]
            : null;

    const showBottomBar =
        (isPreview &&
            (preview.toLowerCase() === 'yes' ||
                sportslineUrl !== null ||
                liveVideo != '' ||
                tuneInLink ||
                ticketUrl)) ||
        (isGametracker &&
            (enhanced.toLowerCase() === 'yes' ||
                liveVideo != '' ||
                tuneInLink ||
                (enhanced.toLowerCase() !== 'yes' && arena === 'collegebasketball' && cstvLink))) ||
        (isFinal &&
            arena !== 'soccer' &&
            (enhanced.toLowerCase() === 'yes' || recap.toLowerCase() === 'yes')) ||
        showAllAccessUrl ||
        relatedContentUrl;

    return (
        <div className='bottom-bar-container'>
            {!noFooter && showBottomBar && (
                <div className='bottom-bar'>
                    <table>
                        <tbody>
                            <tr>
                                {isPreview &&
                                    preview.toLowerCase() === 'yes' &&
                                    arena !== 'soccer' && (
                                        <td>
                                            <a
                                                href={getGameUrl(arena, gameAbbr, 'preview')}
                                                target='_blank'
                                            >
                                                Preview
                                            </a>
                                        </td>
                                    )}
                                {isPreview && sportslineUrl && (
                                    <td className='sportsline-td'>
                                        <a
                                            className='game-forecast'
                                            href={sportslineUrl}
                                            target='_blank'
                                        >
                                            Game Picks
                                        </a>
                                    </td>
                                )}
                                {(isPreview || isGametracker) && liveVideo != '' && (
                                    <td>
                                        <a href={liveVideo} target='_blank'>
                                            Watch Live
                                        </a>
                                    </td>
                                )}
                                {(isPreview || isGametracker) && tuneInLink && (
                                    <td className='listen-live-td'>
                                        <a href={tuneInLink} target='_blank'>
                                            Watch Live
                                        </a>
                                    </td>
                                )}
                                {isPreview && ticketUrl && (
                                    <td className='tickets-td'>
                                        <a href={ticketUrl} target='_blank'>
                                            StubHub
                                        </a>
                                    </td>
                                )}
                                {isGametracker &&
                                    enhanced.toLowerCase() === 'yes' &&
                                    arena !== 'soccer' && (
                                        <td>
                                            <a
                                                href={getGameUrl(arena, gameAbbr, 'live')}
                                                target='_blank'
                                            >
                                                Gametracker
                                            </a>
                                        </td>
                                    )}
                                {isGametracker &&
                                    enhanced.toLowerCase() !== 'yes' &&
                                    arena === 'collegebasketball' &&
                                    cstvLink && (
                                        <td>
                                            <a href={cstvLink} target='_blank'>
                                                Gametracker
                                            </a>
                                        </td>
                                    )}
                                {(isPreview || isGametracker) && showAllAccessUrl && (
                                    <td>
                                        <a href={allAccessUrl} target='_blank'>
                                            Stream Live
                                        </a>
                                    </td>
                                )}
                                {isFinal && enhanced.toLowerCase() === 'yes' && arena !== 'soccer' && (
                                    <td>
                                        <a
                                            href={getGameUrl(arena, gameAbbr, 'boxscore')}
                                            target='_blank'
                                        >
                                            Box Score
                                        </a>
                                    </td>
                                )}
                                {isFinal && recap.toLowerCase() === 'yes' && arena !== 'soccer' && (
                                    <td>
                                        <a
                                            href={getGameUrl(arena, gameAbbr, 'recap')}
                                            target='_blank'
                                        >
                                            Recap
                                        </a>
                                    </td>
                                )}
                                {relatedContentUrl && (
                                    <td>
                                        <a href={relatedContentUrl} target='_blank'>
                                            {isPreview
                                                ? 'Preview'
                                                : isGametracker
                                                ? 'Follow Live'
                                                : 'Blog'}
                                        </a>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BottomBar;
