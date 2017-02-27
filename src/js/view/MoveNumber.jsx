import React      from 'react';
import createView from 'omniscient';

const MoveNumber = createView(function (data) {

    const { x, y, type, move } = data;
    const textX = x + 15;
    const textY = y + 20;

    return (
        <g key={`${x}x${y}y`}>
            <use
                x={ x }
                y={ y }
                width="30"
                height="30"
                xlinkHref={ `#round-${type}` }
            />
            <text x={ textX } y={ textY } className={ `round-${type}` }>
                { move }
            </text>
        </g>
    );
});

export default MoveNumber;
