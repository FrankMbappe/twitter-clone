import {
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HomeModernIcon as HomeModernIconSolid } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "../components/MenuItem";

const LeftBar = () => {
  return (
    <Flex direction="column">
      {/* TODO: Logo here */}

      <Flex direction="column">
        <Stack>
          <MenuItem
            icon={HomeModernIcon}
            iconSelected={HomeModernIconSolid}
            text="Home"
          />
          <MenuItem
            icon={UserCircleIcon}
            iconSelected={UserCircleIconSolid}
            text="Profile"
          />
        </Stack>
      </Flex>

      <Spacer />

      <Button>Connect to Metamask</Button>
    </Flex>
  );
};
const Main = () => {
  return <Stack></Stack>;
};
const RightBar = () => {
  return <Stack></Stack>;
};

const HomePage: React.FC = () => {
  return (
    <SimpleGrid columns={3}>
      <LeftBar />
      <Main />
      <RightBar />
    </SimpleGrid>
  );
};

export default HomePage;
