import React from 'react';

const Broadcaster = ({ device, tv, liveVideo, gameMode, gameStatus }) => {
    if (gameMode === 'postgame' || gameStatus.toLowerCase() === 'suspended') {
        return '';
    }

    return liveVideo !== '' && device === 'desktop' ? (
        <a target='_blank' href={liveVideo} className='live'>
            {tv}
        </a>
    ) : liveVideo !== '' && device === 'mobile' ? (
        <span className='live'>{tv}</span>
    ) : tv && tv.toLowerCase() == 'cbs' ? (
        <span className='icon-moon-cbs-icon'></span>
    ) : (
        tv && tv
    );
};

export default Broadcaster;
