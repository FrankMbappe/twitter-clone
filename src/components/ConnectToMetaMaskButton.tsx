import useUser from "@/hooks/user";
import { Button, Icon } from "@chakra-ui/react";
import { LinkIcon } from "@heroicons/react/24/solid";
import ErrorMsg from "./ErrorMsg";

const ConnectToMetaMaskButton = () => {
  const { error, loading, connectToMetaMask } = useUser();
  return (
    <>
      <Button
        leftIcon={<Icon as={LinkIcon} />}
        variant="solid"
        rounded="full"
        colorScheme="whatsapp"
        onClick={connectToMetaMask}
        isLoading={loading}
        mb={2}
      >
        Connect to MetaMask
      </Button>
      {!!error && <ErrorMsg textOnly />}
    </>
  );
};

export default ConnectToMetaMaskButton;
