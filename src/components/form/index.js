import React from "react";
import {
  Container,
  Title,
  TextSmall,
  Input,
  Submit,
  Feedback,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Feedback = function FormFeedback({ feedback, children, ...restProps }) {
  return (
    <Feedback {...restProps} feedback={feedback}>
      {children}
    </Feedback>
  );
};
