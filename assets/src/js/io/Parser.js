(function () {

    const _ = require('lodash');

    var Parser;

    /**
     * Singleton containing several utility functions for data parsing
     * @type {Object}
     */
    Parser = {

        parsePlayerNames: function (settings) {

            var names = window.frameElement.getAttribute("data-players").split(",");
            console.log(names);
            settings.players.names = names;
            return settings;
        },

        parseMoveSet: function (states) {

            var currentRound;

            
            return _
                .chain(states)
                .map(function (state, index) {

                    var label,
                        { round } = state;

                    if (currentRound === round) {
                        return false;
                    }

                    currentRound = round;
                    label = `Round ${round}`;

                    return { label, value: index };
                })
                .compact()
                .value();
        },

        parseStates: function (data, settings) {

            var field                                       = settings.field,
                macroboard                                  = settings.macroboard,
                { width, height, cellmargin }               = field.cell,
                { margintop, marginleft }                   = field.margins;
            var cells = 0;
            return _.map(data.states, function (state) {

                var { round, column, winner, field, illegalMove, player, player1fields, player2fields } = state;
                if (winner) {
                    if (winner != "none") {
                        //winner = settings.players.names[parseInt(winner.replace("player", "")) - 1];
                    }
                }
                var rounds = [];
                for (var i = 0; i < 81; i++) {
                    rounds[i] = "current";
                    if (i < round) {
                        rounds[i] = "past";
                    } else if (i > round) {
                        rounds[i] = "future";
                    }
                }
                return {
                    round,
                    column,
                    winner,
                    field,
                    illegalMove,
                    player1fields,
                    player2fields,
                    player,
                    cells: _
                        .chain(field)
                        .thru((string) => string.split(/,|;/))
                        .map(function (cellType, index) {
                            var player = 0;
                            if (cellType & 1) player = 1;
                            if (cellType & 2) player = 2;
                            var active = 0;
                            if (cellType & 4) active = 1;
                            if (cellType & 8) active = 2;
                            var taken = 0;
                            if (cellType & 16) taken = 1;
                            if (cellType & 32) taken = 2;
                            var row     = Math.floor(index / 9),
                                column  = index % 9,
                                x       = column * width + marginleft + Math.floor(column/3) * cellmargin,
                                y       = row * height + margintop + Math.floor(row/3) * cellmargin;
                            return { row, column, x, y, width, height, player, active, taken };
                        })
                        .value(),
                    rounds: _
                    .chain(rounds)
                    .map(function (type, index) {
                        var row     = Math.floor(index / 9),
                            column  = index % 9,
                            x       = column * 35 + 130,
                            y       = row * 35 + 300;

                        return { row, column, x, y, width, height, type, marginleft, margintop, index };
                    })
                    .value()
                };
            });
        }
    };

    module.exports = Parser;
}());
