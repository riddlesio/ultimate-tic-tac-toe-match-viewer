import React       from 'react';
import createView  from 'omniscient';
import classNames  from 'classnames';

const Overlay = createView('Overlay', function (props) {

    const { winner } = props;
    const message = winner === 'none' ? 'The game is a draw' : `${winner} won the game!`;
    const cx = classNames({
        'TicTacToeGame-overlay': true,
        'u-hidden': !winner,
    });

    return (
        <g className={ cx }>
            <rect x="0" y="0" width="100%" height="100%" className="TicTacToeGame-overlayBackground"/>
            <text x="50%" y="50%" className="TicTacToeGame-overlayMessage">{ message }</text>
        </g>
    );
});

export default Overlay;