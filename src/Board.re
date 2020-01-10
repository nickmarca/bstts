let boardSize = 802;
let numberOfBlocks = 20;

module Styles = {
  open Css;

  let container =
    style([
      border(px(1), solid, hex("cccccc")),
      width(px(boardSize)),
      height(px(boardSize)),
    ]);
};

[@react.component]
let make = () => {
  <div className=Styles.container>
    <Rows s={boardSize / numberOfBlocks} n=numberOfBlocks />
  </div>;
};