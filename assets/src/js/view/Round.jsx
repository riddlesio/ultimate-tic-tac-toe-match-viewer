(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Round;

    Round = createView(function (data) {
        var { x, y, width, height, type, index } = data;

         var id="x" + x + "y" + y;
         var textx = x + 15, texty = y + 19;
         var round = index + 1;
         return (
             <g id={ id } dangerouslySetInnerHTML={{
                 __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#round-${ type }" />
                 <text x="${ textx }" y="${ texty }" class="round-${ type }">${ round }</text>`
             }} />             
         );
    });

    // Private functions

    module.exports = Round;
}());
