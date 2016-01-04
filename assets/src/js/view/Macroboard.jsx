(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Macroboard;

    Macroboard = createView(function (data) {

        /**
         * Data should have the following structure:
         * {
         *    x: Number,
         *    y: Number,
         *    width: Number,
         *    height: Number,
         *    cellType: String
         * }
         */

        var className,
            { x, y, mbwidth, mbheight, cellType, mbplayer } = data;

        className = 0;
        if (cellType == -1) {
            className = "active-" + mbplayer;
        }
        if (cellType == 1) {
            className = "taken-1";
        }
        if (cellType == 2) {
            className = "taken-2";
        }
        
        var id="x" + x + "y" + y;

        return (
             <g id={ id } dangerouslySetInnerHTML={{
                 __html: `<use x="${ x }" y="${ y }" width="${ mbwidth }" height="${ mbheight }" xlink:href="#macroboard-${ className }" />`
             }} />
         );
    });

    // Private functions
    module.exports = Macroboard;
}());
