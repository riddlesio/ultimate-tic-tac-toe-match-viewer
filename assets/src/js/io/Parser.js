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

            var field                                   = settings.field,
                macroboard                              = settings.macroboard,
                { width, height, cellmargin, mainmargin }           = field.cell,
                { macroboardwidth, macroboardheight }   = field.macroboard,
                { margintop, marginleft }               = field.margins;
            var cells = 0;
            console.log(macroboardwidth + " " + macroboardheight);
            return _.map(data.states, function (state) {


                var { round, column, winner, field, macroboard, illegalMove, player, player1fields, player2fields } = state;
                if(winner) {
                    winner = settings.players.names[parseInt(winner.replace("player", "")) - 1];
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
                    .chain(macroboard)
                    .thru((string) => string.split(/,|;/))
                    .map(function (cellType, index) {
                        var row     = Math.floor(index / 3),
                            column  = index % 3,
                            x       = column * width * 3 + marginleft,
                            y       = row * height * 3 + margintop;
                        var mbwidth = width * 2;
                        var mbheight = height * 2;
                        var mbplayer = player;

                        return { row, column, x, y, mbwidth, mbheight, cellType, marginleft, margintop, mbplayer };
                    })
                    .value()
                };
            });
        }
    };

    module.exports = Parser;
}());
