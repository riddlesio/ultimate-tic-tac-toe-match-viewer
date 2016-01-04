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
                <text x="130" y="284" className="TicTacToeGame-rounds">Rounds</text>
                <g className="TicTacToeGame-rounds">
                    { _.map(rounds, Round) }
                </g>

            </g>;
    });

    module.exports = FieldView;
}());
