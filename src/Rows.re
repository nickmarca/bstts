module Styles = {
  open Css;

  let container = style([flexDirection(column), display(flexBox)]);
};

[@react.component]
let make = (~s: int, ~n: int) => {
  let a =
    Array.init(n, j =>
      <Row key={"row__" ++ string_of_int(j)} t={j mod 2 == 0} s n />
    );

  <div className=Styles.container> {ReasonReact.array(a)} </div>;
};