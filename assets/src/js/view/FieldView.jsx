(function (undefined) {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        Cell        = require('./Cell.jsx'),
        Round        = require('./Round.jsx');

    var FieldView;

    FieldView = createView('FieldView', function (state) {
        var { round, column, winner, field, fieldWidth, fieldHeight, cells, rounds } = state;

        var name = "name";
        var points = "points";
        var move = "Move";

        return <g
            key="key"
            className="TicTacToeGame-playerView" >
                <g dangerouslySetInnerHTML={{
                    __html: `<use x="0" y="0" xlink:href="#TicTacToeGame-background" />`
                }} />
                <g className="TicTacToeGame-grid">
                    { _.map(cells, Cell) }
                </g>
                <text x="60" y="234" className="TicTacToeGame-rounds">Rounds</text>
                <g className="TicTacToeGame-rounds">
                    { _.map(rounds, Round) }
                </g>

            </g>;
    });

    function createTransform (index, fieldWidth, canvas) {

        var x = 200 + index * (canvas.width - 400 - fieldWidth),
            y = 100;

        return `translate(${x}, ${y})`;
    }

    module.exports = FieldView;
}());
