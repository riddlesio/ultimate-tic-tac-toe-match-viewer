import _           from 'lodash';
import React       from 'react';
import createView  from 'omniscient';
import Cell        from './Cell.jsx';
import MoveNumber  from './MoveNumber.jsx';

const FieldView = createView('FieldView', function (state) {

    const { cells, moves } = state;

    return (
        <g key="key" className="TicTacToeGame-playerView">
            <g className="TicTacToeGame-grid" transform="translate(0,150)">
                { _.map(cells, Cell) }
            </g>
            <text x="130" y="284" className="TicTacToeGame-rounds">Moves</text>
            <g className="TicTacToeGame-rounds">
                { _.map(moves, MoveNumber) }
            </g>
        </g>
    );
});

export default FieldView;
