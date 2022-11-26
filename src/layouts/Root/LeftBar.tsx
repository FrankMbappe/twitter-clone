import Logo from "@/components/Logo";
import {
  Flex,
  Stack,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import {
  HomeModernIcon as HomeModernIconSolid,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "@/components/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/Router";
import { useContext, useMemo } from "react";
import ConnectToMetaMaskButton from "@/components/ConnectToMetaMaskButton";
import { AccountContext } from "@/components/AccountProvider";

const LeftBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isUserConnected } = useContext(AccountContext);

  const menuItems = useMemo(
    () => [
      {
        text: "Home",
        route: RoutesEnum.Home,
        icon: HomeModernIcon,
        iconSelected: HomeModernIconSolid,
      },
      {
        text: "Profile",
        route: RoutesEnum.Profile,
        icon: UserCircleIcon,
        iconSelected: UserCircleIconSolid,
      },
    ],
    []
  );

  return (
    <Flex direction="column" h="full" p={3} pos="sticky" top={0}>
      <Flex ml={2}>
        <Logo />
      </Flex>

      <Stack mt={7} align="flex-start">
        {menuItems.map(({ icon, iconSelected, route, text }) => (
          <MenuItem
            key={route}
            icon={icon}
            iconSelected={iconSelected}
            text={text}
            isSelected={pathname === route}
            onClick={() => navigate(route)}
          />
        ))}
      </Stack>

      <Spacer />

      {isUserConnected ? (
        <Tag colorScheme="whatsapp" size="lg">
          <TagLeftIcon as={LockClosedIcon} />
          <TagLabel maxW="150px" noOfLines={1}>
            Connected
          </TagLabel>
        </Tag>
      ) : (
        <ConnectToMetaMaskButton />
      )}
    </Flex>
  );
};
export default LeftBar;
