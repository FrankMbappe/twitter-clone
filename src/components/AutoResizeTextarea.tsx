import type { TextareaProps } from "@chakra-ui/react";
import { Textarea, forwardRef } from "@chakra-ui/react";
import type { TextareaAutosizeProps } from "react-textarea-autosize";
import ResizeTextarea from "react-textarea-autosize";

const AutoResizeTextarea = forwardRef<
  TextareaProps & TextareaAutosizeProps,
  "textarea"
>((props, ref) => {
  return (
    <Textarea
      ref={ref}
      as={ResizeTextarea}
      overflow="hidden"
      w="full"
      minH="unset"
      resize="none"
      minRows={1}
      {...props}
    />
  );
});

export default AutoResizeTextarea;
