'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Rows$ReasonReactExamples = require("./Rows.bs.js");

var container = Css.style(/* :: */[
      Css.border(Css.px(1), Css.solid, Css.hex("cccccc")),
      /* :: */[
        Css.width(Css.px(802)),
        /* :: */[
          Css.height(Css.px(802)),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container
};

function Board(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement(Rows$ReasonReactExamples.make, {
                  s: 40,
                  n: 20
                }));
}

var boardSize = 802;

var numberOfBlocks = 20;

var make = Board;

exports.boardSize = boardSize;
exports.numberOfBlocks = numberOfBlocks;
exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
