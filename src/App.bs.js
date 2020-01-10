'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Board$ReasonReactExamples = require("./Board.bs.js");

Css.$$global("body", /* :: */[
      Css.margin(Css.px(0)),
      /* [] */0
    ]);

Css.$$global("*, *::before, *::after", /* :: */[
      Css.boxSizing(/* borderBox */9307263),
      /* [] */0
    ]);

var container = Css.style(/* :: */[
      Css.height(Css.vh(100)),
      /* :: */[
        Css.width(Css.vw(100)),
        /* :: */[
          Css.display(Css.flexBox),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.justifyContent(Css.center),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  container: container
};

function App(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement(Board$ReasonReactExamples.make, { }));
}

var make = App;

exports.Styles = Styles;
exports.make = make;
/*  Not a pure module */
