import { useContext } from "react";
import { AccountContext } from "@/components/AccountProvider";
import ConnectToMetaMaskButton from "@/components/ConnectToMetaMaskButton";
import { METAMASK_LOGO_URL } from "@/config";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const ProfilePage = () => {
  const { userAccount, isUserConnected } = useContext(AccountContext);

  return (
    <Flex direction="column" w="full" align="center" py={7}>
      <Avatar size="2xl" src={METAMASK_LOGO_URL} mb={5} />
      <ConnectToMetaMaskButton />
      {isUserConnected && (
        <>
          <Text fontSize={22} fontWeight="bold" mt={5}>
            Address
          </Text>
          <Text fontSize={25} mt={2} wordBreak="break-all" textAlign="center">
            {userAccount}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default ProfilePage;
