import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getArenaTitle } from '../../shared/utils';
import ShareThroughAd from '../../react/core/ShareThroughAd';

const ShareThrough = ({ arena, className, device, gameData, stories }) => {
    return (
        <div id='sharethrough-ad' className={`single-score-card sharethrough-card ${className}`}>
            <div className='top-bar'></div>
            <ShareThroughAd />
            {stories &&
                typeof gameData.hideStories === 'undefined' && [
                    <div key='0' className='score-card-headlines article-list-single-lead section'>
                        <div className='article-list-single-content'>
                            <div className='article-list-title'>Around the League</div>
                            <ul className='article-list-single-list'>
                                {stories.map(story => {
                                    return (
                                        <li key={story.id} className='article-list-single-item'>
                                            <h3 className='article-list-item-title'>
                                                <a
                                                    href={`/${arena}/news/${story.slug}/`}
                                                    target='_blank'
                                                >
                                                    {story.promoTitle}
                                                </a>
                                            </h3>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>,
                    <div key='1' className='bottom-bar-container'>
                        <div className='bottom-bar'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href={`/${arena}/`} target='_blank'>
                                                {`More ${getArenaTitle(arena)} News`}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ]}
        </div>
    );
};

const mapStateToProps = state => ({
    stories: state.statics.sharethroughStories
});

export default connect(mapStateToProps)(ShareThrough);
