import React, { Fragment } from 'react';

export const Row = ({
    useWrapper = true,
    className = 'row scores-row',
    fixedHeight = true,
    ...props
}) => {
    return useWrapper ? (
        <div className={className}>
            {fixedHeight && <div className='row-fixed-height'>{props.children}</div>}
            {!fixedHeight && props.children}
        </div>
    ) : (
        props.children
    );
};

export const Column = props => {
    const placeholder = props.placeholder ? 'placeholder' : '';

    return props.placeholder ? (
        <div className='placeholder'></div>
    ) : (
        <Fragment>{props.children}</Fragment>
    );
};
