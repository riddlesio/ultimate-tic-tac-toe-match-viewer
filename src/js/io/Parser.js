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

    const { field, players }            = settings;
    const { width, height, cellmargin } = field.cell;
    const { margintop, marginleft }     = field.margins;
    const { winner }                    = data;

    const states = _.map(data.states, function (state) {

        const moves = {};
        const { move, column, field, player } = state;
        const illegalMove = state.error;

        for (let i = 1; i <= 81; i++) {
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
            illegalMove,
            player,
            winner: null,
            cells: _.chain(field)
                .thru((string) => string.split(/,|;/))
                .map(function (cellType, index) {
                    let player = 0;
                    if (cellType & 1) player = 1;
                    if (cellType & 2) player = 2;
                    let active = 0;
                    if (cellType & 4) active = 1;
                    if (cellType & 8) active = 2;
                    let taken = 0;
                    if (cellType & 16) taken = 1;
                    if (cellType & 32) taken = 2;
                    const row     = Math.floor(index / 9);
                    const column  = index % 9;
                    const x       = column * width + marginleft + Math.floor(column / 3) * cellmargin;
                    const y       = row * height + margintop + Math.floor(row / 3) * cellmargin;

                    return { row, column, x, y, width, height, player, active, taken };
                }).value(),
            moves: _.map(moves, (type, move) => {
                const row     = Math.floor((move - 1) / 9);
                const column  = (move - 1) % 9;
                const x       = column * 35 + 130;
                const y       = row * 35 + 300;

                return { x, y, width, height, type, move };
            }),
        };
    });

    return addFinalState(states, winner, players.names);
}

function addFinalState(states, winner, playerNames) {
    const lastState = states[states.length - 1];
    return states.concat([{
        ...lastState,
        winner: winner !== null ? playerNames[winner] : null,
    }]);
}

export {
    parsePlayerNames,
    parseStates,
};
