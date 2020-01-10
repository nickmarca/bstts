module Styles = {
  open Css;

  let () = global("body", [margin(px(0))]);
  let () = global("*, *::before, *::after", [boxSizing(`borderBox)]);

  let container =
    style([
      height(vh(100.)),
      width(vw(100.)),
      display(flexBox),
      alignItems(center),
      justifyContent(center),
    ]);
};

[@react.component]
let make = () => {
  <div className=Styles.container> <Board /> </div>;
};