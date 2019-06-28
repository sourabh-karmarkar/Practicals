import React from "react";
import { boolean, text, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

export class Button extends React.Component {
  render() {
    return (
      <button
        style={object("CSS", { border: "2px solid" })}
        onClick={action("clicked")}
        disabled={boolean("disable", false)}
      >
        {text("type any text", "Sourabh")}
      </button>
    );
  }
}
export default Button;
