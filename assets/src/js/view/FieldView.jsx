(function (undefined) {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        Cell        = require('./Cell.jsx'),
        Round        = require('./Round.jsx'),
        Macroboard  = require('./Macroboard.jsx');

    var FieldView;

    FieldView = createView('FieldView', function (state) {
        var { round, column, winner, field, fieldWidth, fieldHeight, cells, rounds, macroboard } = state;
        /*
        var fieldWidth = fieldWidth * field.cell.width,
            fieldHeight = fieldHeight * field.cell.height, */
        var moveClass = "TicTacToeGame-playerInfo TicTacToeGame-playerMove";

        // if (!_.includes(MoveType, move)) {
        //     moveClass += " TicTacToeGame-playerMove-illegal";
        // }
        var name = "name";
        var points = "points";
        var move = "Move";
        /**
         * Data should have the following structure:
         * {
         *     combo: Integer,
         *     points: Integer,
         *     move: String,
         *     cells: [],
         *     nextShape: String
         *     settings: Object
         * }
         */
        return <g
            key="key"
            className="TicTacToeGame-playerView" >
                <g dangerouslySetInnerHTML={{
                    __html: `<use x="50" y="135" xlink:href="#TicTacToeGame-background" />`
                }} />
                <g className="TicTacToeGame-macroboard">
                    { _.map(macroboard, Macroboard) }
                </g>
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
