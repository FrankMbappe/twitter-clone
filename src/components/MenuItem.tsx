import { As, Flex, Icon, Text } from "@chakra-ui/react";

type MenuItemProps = {
  icon: As<any>;
  iconSelected?: As<any>;
  text: string;
  isSelected?: boolean;
};

const MenuItem = ({ icon, iconSelected, text, isSelected }: MenuItemProps) => {
  return (
    <Flex>
      <Icon as={isSelected ? iconSelected : icon} />
      <Text>{text}</Text>
    </Flex>
  );
};

export default MenuItem;
