import { Flex, Heading, Text } from "@chakra-ui/react";

const RightBar = () => {
  return (
    <Flex direction="column" p={3}>
      <Heading size="lg" mb={5}>
        Popular
      </Heading>
      <Text color="gray">Nothing to show yet.</Text>
    </Flex>
  );
};

export default RightBar;
