import React from 'react';
import { getPeriodValue } from '../../shared/utils';

const ScoresTableHeader = ({
    arena,
    currentPeriod,
    periodsToShow,
    penaltyShootouts,
    aggregateScores,
    regPeriods
}) => {
    const penaltyShootoutsColumn = penaltyShootouts ? <th key='PEN'>PEN</th> : null;
    const aggregateColumn = aggregateScores ? <th key='AGG'>AGG</th> : null;

    return (
        <thead>
            <tr>
                <th></th>
                {currentPeriod === '' && <th></th>}
                {currentPeriod !== '' && [
                    periodsToShow.map(p => {
                        const formattedP = getPeriodValue(p + 1, regPeriods, arena); //@TODO add seasonType to the getPeriodValue fn
                        return <th key={p}>{formattedP}</th>;
                    }),
                    <th key='T'>T</th>,
                    penaltyShootoutsColumn,
                    aggregateColumn
                ]}
            </tr>
        </thead>
    );
};

export default ScoresTableHeader;
