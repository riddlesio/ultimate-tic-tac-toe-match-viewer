import React      from 'react';
import createView from 'omniscient';

const MoveNumber = createView(function (data) {

    const { x, y, width, height, type, move } = data;
    const textX = x + 15;
    const textY = y + 20;

    return (
        <g>
            <use
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                xlinkHref={ `#round-${type}` }
            />
            <text x={ textX } y={ textY } className={ `round-${type}` }>
                { move }
            </text>
        </g>
    );
});

export default MoveNumber;
