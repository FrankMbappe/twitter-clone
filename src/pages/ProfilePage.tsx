import ConnectToMetaMaskButton from "@/components/ConnectToMetaMaskButton";
import useUser from "@/hooks/user";
import { METAMASK_LOGO_URL } from "@/utils";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const ProfilePage = () => {
  const { isUserConnected, userAddress } = useUser();
  return (
    <Flex direction="column" w="full" align="center" py={7}>
      <Avatar size="2xl" src={METAMASK_LOGO_URL} mb={5} />
      {isUserConnected ? (
        <>
          <Text fontSize={22} fontWeight="bold">
            Address
          </Text>
          <Text fontSize={25} mt={2}>
            {userAddress}
          </Text>
        </>
      ) : (
        <ConnectToMetaMaskButton />
      )}
    </Flex>
  );
};

export default ProfilePage;
