import React, { useState, useEffect } from 'react';
import { getFormattedDate, getOrdinalOrOvertime, renderInnerHtml } from '../../shared/utils';

const InGameStatus = ({
    arena,
    device,
    gameStatus,
    isHalftime,
    timeRemaining,
    minute,
    extratime,
    overtimeOrdinal
}) => {
    if (gameStatus.toLowerCase() === 'delayed') {
        return <div className='game-status'>{gameStatus}</div>;
    }

    if (arena === 'soccer') {
        if (isHalftime) {
            return <div className='game-status emphasis'>HT</div>;
        } else if (minute !== null) {
            return extratime !== null && extratime > 0 ? (
                <div className='game-status emphasis'>
                    {minute}+{extratime}'
                </div>
            ) : (
                <div className='game-status emphasis'>{minute}'</div>
            );
        } else {
            return <div className='game-status'>{gameStatus}</div>;
        }
    } else {
        if (isHalftime) {
            return <div className='game-status emphasis'>Halftime</div>;
        } else {
            return (
                <div className={`game-status ${device === 'desktop' ? 'emphasis' : 'in-progress'}`}>
                    {timeRemaining === '0.0' && `End ${overtimeOrdinal}`}
                    {timeRemaining !== '0.0' && `${overtimeOrdinal} ${timeRemaining}`}
                </div>
            );
        }
    }
};

const GameStatus = ({
    arena,
    device,
    gameMode,
    gameStatus,
    statusData,
    scheduledEpoch,
    regPeriods
}) => {
    const [gameDate, setGameDate] = useState('');
    const halftimePeriod = regPeriods / 2;
    const timeRemaining =
        statusData && typeof statusData.time_remaining !== 'undefined'
            ? statusData.time_remaining
            : null;
    const minute =
        statusData && typeof statusData.minute !== 'undefined' ? statusData.minute : null;
    const extratime =
        statusData && typeof statusData.extratime !== 'undefined' ? statusData.extratime : null;
    const currentPeriod =
        statusData && statusData.quarter
            ? statusData.quarter
            : statusData && statusData.period
            ? statusData.period
            : '';
    const isHalftime =
        gameStatus.toLowerCase() === 'halftime'
            ? true
            : parseInt(currentPeriod) == parseInt(halftimePeriod) && timeRemaining == '0.0'
            ? true
            : false;
    const isOvertime = currentPeriod > regPeriods && gameStatus.toLowerCase() === 'final';
    const overtimeOrdinal = getOrdinalOrOvertime(currentPeriod, regPeriods, true);

    useEffect(() => {
        const formattedDate = getFormattedDate(scheduledEpoch, device, 'E h:mma', 'h:mma');

        setGameDate(formattedDate);
    });

    return gameMode === 'pregame' ? (
        <span className={`game-status ${gameMode}`}>
            {gameStatus === 'tba' && gameStatus}
            {scheduledEpoch && (
                <span
                    className={`game-status ${gameMode}-date`}
                    dangerouslySetInnerHTML={renderInnerHtml(gameDate)}
                ></span>
            )}
        </span>
    ) : gameMode === 'ingame' ? (
        <span className={`game-status ${gameMode}`}>
            <InGameStatus
                arena={arena}
                device={device}
                gameStatus={gameStatus}
                isHalftime={isHalftime}
                timeRemaining={timeRemaining}
                minute={minute}
                extratime={extratime}
                overtimeOrdinal={overtimeOrdinal}
            />
        </span>
    ) : (
        <span className={`game-status ${gameMode}`}>{`${arena === 'soccer' ? 'FT' : gameStatus}${
            isOvertime ? '/' + overtimeOrdinal : ''
        }`}</span>
    );
};

export default GameStatus;
