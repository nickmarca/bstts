'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Row$ReasonReactExamples = require("./Row.bs.js");

var container = Css.style(/* :: */[
      Css.flexDirection(Css.column),
      /* :: */[
        Css.display(Css.flexBox),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container
};

function Rows(Props) {
  var s = Props.s;
  var n = Props.n;
  var a = $$Array.init(n, (function (j) {
          return React.createElement(Row$ReasonReactExamples.make, {
                      s: s,
                      t: j % 2 === 0,
                      n: n,
                      key: "row__" + String(j)
                    });
        }));
  return React.createElement("div", {
              className: container
            }, a);
}

var make = Rows;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
