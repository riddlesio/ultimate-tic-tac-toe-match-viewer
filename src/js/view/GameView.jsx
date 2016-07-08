import React from 'react';
import createView from 'omniscient';
import FieldView from './FieldView.jsx';
import Overlay from './Overlay.jsx';

const GameView = createView('GameView', function (props) {

    const { state, settings } = props;
    const { winner, illegalMove, player } = state;
    const { players } = settings;

    let player1class = '';
    let player2class = '';
    let illegalMoveClass = '';

    if (player === 1) {
        player1class = ' active';
        illegalMoveClass = ' TicTacToeGame-player1Color';
    } else if (player === 2) {
        player2class = ' active';
        illegalMoveClass = ' TicTacToeGame-player2Color';
    }

    return (
        <svg className="TicTacToeGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
            <defs>
                <mask
                    id="mask"
                    x="-2"
                    y="-2"
                    width="27"
                    height="27"
                    maskUnits="userSpaceOnUse">
                    <g transform="translate(-1,-1)">
                        <image
                            width="27"
                            height="27"
                            transform="translate(-1,-1)"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAAACXBIWXMAAAsSAAALEgHS3X78AAABcElEQVRIS+2VQWqDQBSGcy+9iZgTGDeiGAwInsWF4BFcBMlGXKio7SJ3cJFlUGy/JpuOjExoWmih/y7O/F/mvTfz3mbzl6Tr+na7tW3b87z9fh8EwWFFwU2+77uuu9vtcOGV4KIoStP0dDpVVdV1Xd/3Lze9irp/ZLVtW3bmeY4rDENN0wQi/8PC+Xy+XC7jOL49pmma2I8rSRLTNAUiwXI6llUQiXAdj0fCF4jkjhAeP91n4SrLkpwKREpB7lReueZ5bpqGQglEakeyVd5VUSUIApE7QQVVxlUR3/cTISyJ3DWVcVX/xJ8kPlnr5e3h9zNEyQ1//s3wjgUir5KvKqNcvOu6rpfvms5B76HfqewSXa/XoigcxxGIdDe68df64zAMWZZZliUQFz2cQFScj2A5HTgKHcexYRgCkTnDrKC5041pn/Q70tqtqL2J3BEspwNHEiXDi9HDrCB8csqO+8BbG4RUlj3kjmA5nQT3q/UOXdRdgMJtoh8AAAAASUVORK5CYII="
                        />
                    </g>
                </mask>
                <symbol id="TicTacToeGame-cell-player1" viewBox="0 0 25 25">
                    <path
                        width="55"
                        height="55"
                        fill="#ff5552"
                        d="M 12.5,9.64 A 2.86,2.86 0 1 1 9.6400003,12.5 2.86,2.86 0 0 1 12.5,9.64 M 12.5,7 A 5.5,5.5 0 1 0 18,12.5 5.5044,5.5044 0 0 0 12.5,7 h 0 z"
                    />
                </symbol>
                <symbol id="TicTacToeGame-cell-player2" viewBox="0 0 24.99 24.99">
                    <g
                        width="55"
                        height="55"
                        transform="matrix(0.44014993,0,0,0.43997388,6.9980404,6.9980392)"
                    >
                        <rect
                            transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,-5.19,12.5)"
                            height="29.34"
                            width="6"
                            y="-2.1700001"
                            x="9.5"
                            fill="#6aa2fe"
                        />
                        <rect
                            transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,12.49,-5.19)"
                            height="29.34"
                            width="6"
                            y="-2.1700001"
                            x="9.5"
                            fill="#6aa2fe"
                        />
                    </g>
                </symbol>
                <symbol id="TicTacToeGame-cellbackground-active0-taken0" viewBox="0 0 25 25">
                    <g transform="translate(0,-165)">
                        <rect
                            id="rect9"
                            ry="3.8333333"
                            rx="3.8333333"
                            height="23"
                            width="23"
                            x="1"
                            y="166"
                            fill="#1f2225"
                        />
                    </g>
                </symbol>
                <symbol id="TicTacToeGame-cellbackground-active0-taken1" viewBox="0 0 25 25">
                    <g transform="translate(0,-165)">
                        <rect
                            ry="3.8333333"
                            rx="3.8333333"
                            height="23"
                            width="23"
                            x="1"
                            y="166"
                            fill="#a64242"
                        />
                    </g>
                </symbol>
                <symbol id="TicTacToeGame-cellbackground-active0-taken2" viewBox="0 0 25 25">
                    <g transform="translate(0,-165)">
                        <rect
                            ry="3.8333333"
                            rx="3.8333333"
                            height="23"
                            width="23"
                            x="1"
                            y="166"
                            fill="#4268a6"
                        />
                    </g>
                </symbol>


                <symbol id="TicTacToeGame-cellbackground-active1-taken0" viewBox="0 0 25 25">
                    <g isolation="isolate" transform="translate(1,1)">
                        <g>
                            <rect
                                width="23"
                                height="23"
                                rx="3.8299999"
                                ry="3.8299999"
                                x="0"
                                y="0"
                                fill="#fe6f69"
                            />
                            <g style={{ mask: 'url(#mask)' }}>
                                <g mixBlendMode="screen">
                                    <rect
                                        width="23"
                                        height="23"
                                        rx="3.8299999"
                                        ry="3.8299999"
                                        x="0"
                                        y="0"
                                        fill="#1f2225"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </symbol>
                <symbol id="TicTacToeGame-cellbackground-active2-taken0" viewBox="0 0 25 25">
                    <g isolation="isolate" transform="translate(1,1)">
                        <g>
                            <rect
                                width="23"
                                height="23"
                                rx="3.8299999"
                                ry="3.8299999"
                                x="0"
                                y="0"
                                fill="#69a2fc"
                            />
                            <g style={{ mask: 'url(#mask)' }}>
                                <g mixBlendMode="screen">
                                    <rect
                                        width="23"
                                        height="23"
                                        rx="3.8299999"
                                        ry="3.8299999"
                                        x="0"
                                        y="0"
                                        fill="#1f2225"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </symbol>


                <symbol id="round-past"   viewBox="0 0 672 672">
                    <path
                        fill="#1f2225"
                        fillRule="evenodd"
                        stroke="none"
                        d="M 336,33.015 C 503.1641,33.015 638.985,168.8358 638.985,336 638.985,503.1641 503.1641,638.985 336,638.985 168.8358,638.985 33.015001,504.4701 33.015001,337.3059 33.015001,168.8358 168.8358,33.015 336,33.015 z"
                        clipRule="evenodd"
                    />
                </symbol>
                <symbol id="round-future"   viewBox="0 0 672 672">
                    <path
                        width="30"
                        height="30"
                        fill="#1f2225"
                        fillRule="evenodd"
                        stroke="none"
                        d="M 336,33.015 C 503.1641,33.015 638.985,168.8358 638.985,336 638.985,503.1641 503.1641,638.985 336,638.985 168.8358,638.985 33.015001,504.4701 33.015001,337.3059 33.015001,168.8358 168.8358,33.015 336,33.015 z"
                        clipRule="evenodd"
                    />
                </symbol>
                <symbol id="round-current"  viewBox="0 0 672 672">
                    <path
                        width="30"
                        height="30"
                        fill="#fec278"
                        fillRule="evenodd"
                        stroke="none"
                        d="m 336,33.014876 c 167.16417,0 302.98512,135.820854 302.98512,302.985114 C 638.98512,503.16416 503.16417,638.98512 336,638.98512 168.83573,638.98512 33.014878,504.47017 33.014878,337.3059 33.014878,168.83573 168.83573,33.014876 336,33.014876 z"
                        clipRule="evenodd"
                    />
                </symbol>
                <symbol id="TicTacToeGame-avatar1" dangerouslySetInnerHTML={{
                    __html: `<image width="120" height="120" xlink:href="http://gravatar.com/avatar/${ players.emailHash[0] }?s=100&amp;d=mm" />`
                }} />
                <symbol id="TicTacToeGame-avatar2" dangerouslySetInnerHTML={{
                    __html: `<image width="120" height="120" xlink:href="http://gravatar.com/avatar/${ players.emailHash[1] }?s=100&amp;d=mm" />`
                }} />
            </defs>

            { FieldView(state) }
            <use x="100" y="85" rx="0.1" ry="0.1" xlinkHref="#TicTacToeGame-avatar1" />
            <use x="352" y="85" xlinkHref="#TicTacToeGame-avatar2" />
            <text
                x={ '158' }
                y={ '235' }
                className={ 'TicTacToeGame-playerName TicTacToeGame-player1Color' + player1class }
            >
                { players.names[0] }
            </text>
            <text
                x={ '410' }
                y={ '235' }
                className={ 'TicTacToeGame-playerName TicTacToeGame-player2Color' + player2class }
            >
                { players.names[1] }
            </text>
            <text x="50%" y="60" className={ 'TicTacToeGame-illegalMove' + illegalMoveClass }>
                { illegalMove }
            </text>
            <Overlay winner={ winner } />

        </svg>
    );
});

export default GameView;
