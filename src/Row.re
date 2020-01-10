module Styles = {
  open Css;

  let container = style([display(flexBox)]);

  let blockA = s =>
    style([
      width(px(s)),
      height(px(s)),
      nthChild(`odd, [backgroundColor(hex("cccccc"))]),
      nthChild(`even, [backgroundColor(hex("ffffff"))]),
    ]);

  let blockB = s =>
    style([
      width(px(s)),
      height(px(s)),
      nthChild(`even, [backgroundColor(hex("cccccc"))]),
      nthChild(`odd, [backgroundColor(hex("ffffff"))]),
    ]);
};

[@react.component]
let make = (~s: int, ~t: bool, ~n: int) => {
  let a =
    Array.init(n, i =>
      <div
        key={"row__" ++ string_of_int(i)}
        className={t ? Styles.blockA(s) : Styles.blockB(s)}
      />
    );

  <div className=Styles.container> {ReasonReact.array(a)} </div>;
};