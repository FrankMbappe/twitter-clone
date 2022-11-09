import Logo from "@/components/Logo";
import { Flex, Stack, Spacer, Avatar, Button } from "@chakra-ui/react";
import { HomeModernIcon as HomeModernIconSolid } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "@/components/MenuItem";

const METAMASK_LOGO_URL =
  "https://miro.medium.com/max/555/1*FjSkfan-Kh3vrgtlW8UP_g.png";

const LeftBar = () => {
  return (
    <Flex direction="column" h="full" p={3} pos="sticky" top={0}>
      <Flex ml={3}>
        <Logo />
      </Flex>

      <Stack mt={7} align="flex-start">
        <MenuItem
          icon={HomeModernIcon}
          iconSelected={HomeModernIconSolid}
          text="Home"
          isSelected
        />
        <MenuItem
          icon={UserCircleIcon}
          iconSelected={UserCircleIconSolid}
          text="Profile"
        />
      </Stack>

      <Spacer />

      <Stack direction="row" align="center">
        <Avatar src={METAMASK_LOGO_URL} />
        <Button variant="solid" rounded="full" colorScheme="whatsapp">
          Connect to Metamask
        </Button>
      </Stack>
    </Flex>
  );
};
export default LeftBar;
