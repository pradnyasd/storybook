import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../../src/feature/common/Button";

storiesOf("Button", module).add("with text", () => (
  <Button label={`Submit`} myclass="primary" />
));

storiesOf("Button", module).add("with message", () => (
  <Button label={`Hello`} myclass="secondary" />
));

storiesOf("Button", module).add("with emoji", () => (
  <Button label={`😀`} myclass="primary" onClick={action("clicked")} />
));
