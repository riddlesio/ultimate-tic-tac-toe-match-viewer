(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Round;

    Round = createView(function (data) {
        var className,
            { x, y, width, height, type, index } = data;

        className = createClassName(type);
         var id="x" + x + "y" + y;
         var textx = x + 15, texty = y + 19;
         return (
             <g id={ id } dangerouslySetInnerHTML={{
                 __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#round-${ type }" />
                 <text x="${ textx }" y="${ texty }" class="round-${ type }">${ index }</text>`
             }} />             
         );
    });

    // Private functions

    /**
     * Creates a className string based on the passed cellType
     * @param  {String} cellType A value from enum/CellType
     * @return {String}
     */
    function createClassName (cellType) {
        if (cellType == 1) { return "TicTacToeGame-cell--player1"; }
        if (cellType == 2) { return "TicTacToeGame-cell--player2"; }
        return "TicTacToeGame-cell";
       
    }

    module.exports = Round;
}());
