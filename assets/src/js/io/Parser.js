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
                    console.log( "currentRound " + currentRound); 
                    label = `Round ${round}`;

                    return { label, value: index };
                })
                .compact()
                .value();
        },

        parseStates: function (data, settings) {

            var field                                       = settings.field,
                macroboard                                  = settings.macroboard,
                { width, height, cellmargin, mainmargin }   = field.cell,
                { macroboardwidth, macroboardheight }       = field.macroboard,
                { margintop, marginleft }                   = field.margins;
            var cells = 0;
            return _.map(data.states, function (state) {

                var { round, column, winner, field, macroboard, illegalMove, player, player1fields, player2fields } = state;
                if(winner) {
                    winner = settings.players.names[parseInt(winner.replace("player", "")) - 1];
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
                            var row     = Math.floor(index / 9),
                                column  = index % 9,
                                x       = column * width + marginleft+mainmargin+Math.floor(column/3) * cellmargin,
                                y       = row * height + margintop+mainmargin+Math.floor(row/3) * cellmargin;

                            return { row, column, x, y, width, height, cellType, marginleft, margintop };
                        })
                        .value(),
                    macroboard: _
                    .chain(macroboard)
                    .thru((string) => string.split(/,|;/))
                    .map(function (cellType, index) {
                        var row     = Math.floor(index / 3),
                            column  = index % 3,
                            x       = macroboardwidth * row + marginleft,
                            y       = macroboardheight * column + margintop;
                        var mbwidth = macroboardwidth;
                        var mbheight = macroboardheight;
                        var mbplayer = player;

                        return { row, column, x, y, mbwidth, mbheight, cellType, marginleft, margintop, mbplayer };
                    })
                    .value(),
                    rounds: _
                    .chain(rounds)
                    .map(function (type, index) {
                        var row     = Math.floor(index / 9),
                            column  = index % 9,
                            x       = column * 35 + 60,
                            y       = row * 35 + 250;
                        var mbplayer = player;

                        return { row, column, x, y, width, height, type, marginleft, margintop, index };
                    })
                    .value()
                };
            });
        }
    };

    module.exports = Parser;
}());
