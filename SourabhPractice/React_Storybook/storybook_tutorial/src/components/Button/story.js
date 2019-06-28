import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import Button from "./index.js";

export const button = storiesOf("components/Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => <Button />);
