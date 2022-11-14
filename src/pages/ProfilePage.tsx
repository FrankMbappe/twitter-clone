import { AccountContext } from "@/components/AccountProvider";
import ConnectToMetaMaskButton from "@/components/ConnectToMetaMaskButton";
import { METAMASK_LOGO_URL } from "@/utils";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

const ProfilePage = () => {
  const { userAccount } = useContext(AccountContext);
  return (
    <Flex direction="column" w="full" align="center" py={7}>
      <Avatar size="2xl" src={METAMASK_LOGO_URL} mb={5} />
      <ConnectToMetaMaskButton />
      <Text fontSize={22} fontWeight="bold">
        Address
      </Text>
      <Text fontSize={25} mt={2}>
        {userAccount}
      </Text>
    </Flex>
  );
};

export default ProfilePage;
