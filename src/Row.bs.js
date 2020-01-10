'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

var container = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* [] */0
    ]);

function blockA(s) {
  return Css.style(/* :: */[
              Css.width(Css.px(s)),
              /* :: */[
                Css.height(Css.px(s)),
                /* :: */[
                  Css.nthChild(/* odd */5542319, /* :: */[
                        Css.backgroundColor(Css.hex("cccccc")),
                        /* [] */0
                      ]),
                  /* :: */[
                    Css.nthChild(/* even */-1021546726, /* :: */[
                          Css.backgroundColor(Css.hex("ffffff")),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

function blockB(s) {
  return Css.style(/* :: */[
              Css.width(Css.px(s)),
              /* :: */[
                Css.height(Css.px(s)),
                /* :: */[
                  Css.nthChild(/* even */-1021546726, /* :: */[
                        Css.backgroundColor(Css.hex("cccccc")),
                        /* [] */0
                      ]),
                  /* :: */[
                    Css.nthChild(/* odd */5542319, /* :: */[
                          Css.backgroundColor(Css.hex("ffffff")),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

var Styles = {
  container: container,
  blockA: blockA,
  blockB: blockB
};

function Row(Props) {
  var s = Props.s;
  var t = Props.t;
  var n = Props.n;
  var a = $$Array.init(n, (function (i) {
          return React.createElement("div", {
                      key: "row__" + String(i),
                      className: t ? blockA(s) : blockB(s)
                    });
        }));
  return React.createElement("div", {
              className: container
            }, a);
}

var make = Row;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
