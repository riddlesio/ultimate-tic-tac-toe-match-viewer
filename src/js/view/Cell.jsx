import React      from 'react';
import createView from 'omniscient';

const Cell = createView(function (data) {

    /**
     * Data should have the following structure:
     * {
     *    x: Number,
     *    y: Number,
     *    width: Number,
     *    height: Number,
     *    cellType: String
     * }
     */

    const  { row, column, x, y, width, height, player, active, taken } = data;
    const key                   = `row${row}col${column}`;
    const backgroundClassName   = `active${active}-taken${taken}`;
    const className             = createClassName(player);

    console.log(backgroundClassName);

    return (
        <g key={ key } className="TicTacToeGame-cell">
            <use
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                xlinkHref={ `#TicTacToeGame-cellbackground-${backgroundClassName}` }
            />
            <use
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                xlinkHref={ `#TicTacToeGame-cell-${className}` }
            />
        </g>
     );
});

/**
 * Creates a className string based on the passed cellType
 * @param  {String} cellType A value from enum/CellType
 * @return {String}
 */
function createClassName(cellType) {

    if (cellType == 1) return 'player1';
    if (cellType == 2) return 'player2';
}

export default Cell;
