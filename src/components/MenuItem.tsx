import { As, Flex, Icon, Text } from "@chakra-ui/react";

type MenuItemProps = {
  icon: As<any>;
  iconSelected?: As<any>;
  text: string;
  isSelected?: boolean;
};

const MenuItem = ({ icon, iconSelected, text, isSelected }: MenuItemProps) => {
  return (
    <Flex
      cursor="pointer"
      px={3}
      py={2}
      bg="white"
      rounded="full"
      align="center"
      transition="all 150ms"
      _hover={{
        backgroundColor: "whitesmoke",
      }}
    >
      <Icon
        as={isSelected ? iconSelected : icon}
        boxSize={8}
        color="whatsapp.600"
      />
      <Text
        ml={4}
        fontSize={20}
        fontFamily="Inter"
        flex={1}
        {...(isSelected && { fontWeight: "bold" })}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default MenuItem;
