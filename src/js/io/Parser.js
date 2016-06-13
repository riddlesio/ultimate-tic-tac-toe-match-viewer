const _ = require('lodash');

function parsePlayerNames(playerData, settings) {

    settings.players.names = [];
    settings.players.emailHash = [];

    playerData.forEach((player) => {
        const name = player.name ? player.name : '';
        const hash = player.emailHash ? player.emailHash : '';

        settings.players.names.push(name);
        settings.players.emailHash.push(hash);
    });

    return settings;
}

function parseStates(data, settings) {

    let initialState;

    const field                           = settings.field;
    const { width, height, cellmargin }   = field.cell;
    const { margintop, marginleft }       = field.margins;

    // create initial empty board state
    initialState = _.cloneDeep(data.states[0]);
    initialState.field = initialState.field.replace(/4|8/g, '0');
    initialState.player = -1;
    initialState.move = -1;
    data.states.unshift(initialState);

    return _.map(data.states, function (state) {

        let i;
        let moves = {};
        let { move, column, winner, field, illegalMove, player } = state;

        if (winner) {
            if (winner != 'none') {
                winner = settings.players.names[parseInt(winner.replace('player', '')) - 1];
            }
        }

        for (i = 1; i <= 81; i++) {
            moves[i] = 'current';
            if (i < move) {
                moves[i] = 'past';
            } else if (i > move) {
                moves[i] = 'future';
            }
        }

        return {
            move,
            column,
            winner,
            illegalMove,
            player,
            cells: _.chain(field)
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
                        x       = column * width + marginleft + Math.floor(column / 3) * cellmargin,
                        y       = row * height + margintop + Math.floor(row / 3) * cellmargin;
                    return { row, column, x, y, width, height, player, active, taken };
                })
                .value(),
            moves: _.chain(moves)
                .map(function (type, move) {
                    var row     = Math.floor((move - 1) / 9),
                        column  = (move - 1) % 9,
                        x       = column * 35 + 130,
                        y       = row * 35 + 300;

                    return { x, y, width, height, type, move };
                })
                .value(),
        };
    });
}

export {
    parsePlayerNames,
    parseStates,
};
