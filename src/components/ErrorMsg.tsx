import React from "react";
import { Alert, AlertIcon, Text } from "@chakra-ui/react";

type ErrorMsgProps = {
  msg?: string;
  textOnly?: boolean;
};

const ErrorMsg = ({
  msg = "Sorry, something went wrong", // Default value
  textOnly,
}: ErrorMsgProps) => {
  return textOnly ? (
    <Text color="red" textAlign="center">
      {msg}
    </Text>
  ) : (
    <Alert status="error">
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default ErrorMsg;
