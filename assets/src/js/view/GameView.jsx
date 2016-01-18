                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            (function () {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        FieldView  = require('./FieldView.jsx'),
        Overlay     = require('./Overlay.jsx').jsx;

    var GameView;

    GameView = createView('GameView', function (props) {
        var { state, settings } = props,
            { round, column, winner, field, fieldWidth, fieldHeight, player1fields, player2fields, cells, illegalMove, rounds } = state,
            { players, field } = settings,
            cell = field.cell;
        var player1class="", player2class="";
        if ( state.player == 1) {
            player1class = " active ";
        } else {
            player2class = " active ";
        }

        return (
            <svg className="TicTacToeGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <symbol id="background-playername-red" dangerouslySetInnerHTML={{
                        __html: `<image width="328" height="71" xlink:href="./img/background-playername-red.svg" />`
                    }} />
                    <symbol id="background-playername-yellow" dangerouslySetInnerHTML={{
                        __html: `<image width="328" height="71" xlink:href="./img/background-playername-yellow.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cell-player1" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cell-player1.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cell-player2" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cell-player2.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active1-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active1-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active2-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active2-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken1" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken1.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken2" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken2.svg" />`
                    }} />
                    <symbol id="round-past" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-past.svg" />`
                    }} />
                    <symbol id="round-future" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-future.svg" />`
                    }} />
                    <symbol id="round-current" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-current.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-background" dangerouslySetInnerHTML={{
                        __html: `<image width="1100" height="500" xlink:href="./img/gamefield.svg" />`
                    }} />

                    <symbol id="TicTacToeGame-avatar1" dangerouslySetInnerHTML={{
                        __html: `<image width="100" height="100" xlink:href="./img/avatar1.jpg" />`
                    }} />
                    <symbol id="TicTacToeGame-avatar2" dangerouslySetInnerHTML={{
                        __html: `<image width="100" height="100" xlink:href="./img/avatar2.jpg" />`
                    }} />
                </defs>

                { FieldView(state) }

                <g dangerouslySetInnerHTML={{
                    __html: `<use x="100" y="60" rx="0.1" ry="0.1" xlink:href="#TicTacToeGame-avatar1" />`
                }} />
                <g dangerouslySetInnerHTML={{
                    __html: `<use x="360" y="60" xlink:href="#TicTacToeGame-avatar2" />`
                }} />
                <text
                    x={ "150" }
                    y={ "200" }
                    className={"TicTacToeGame-playerName TicTacToeGame-player1Name " + player1class }>{ players.names[0] }</text>
                <text
                    x={ "410" }
                    y={ "200" }
                    className={"TicTacToeGame-playerName TicTacToeGame-player2Name " + player2class }>{ players.names[1] }</text>

                <text x="300" y="100" className="TicTacToeGame-playerFields TicTacToeGame-player1Fields u-hidden">{ player1fields }</text>
                <text x="1034" y="100" className="TicTacToeGame-playerFields TicTacToeGame-player2Fields u-hidden">{ player2fields }</text>


                <text x="50%" y="110" className="TicTacToeGame-illegalMove">{ illegalMove }</text>
                <Overlay winner={ winner } />

            </svg>
        );
    });

    module.exports = GameView;
}());

