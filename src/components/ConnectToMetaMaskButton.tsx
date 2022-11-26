import React from "react";
import { Button, Icon, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AccountContext } from "./AccountProvider";
import ErrorMsg from "./ErrorMsg";

const ConnectToMetaMaskButton = () => {
  const {
    userConnectError,
    isUserConnecting,
    connectToMetaMask,
    isUserConnected,
  } = useContext(AccountContext);

  return isUserConnected ? (
    <Tag size="lg" colorScheme="green">
      <TagLeftIcon as={CheckCircleIcon} />
      <TagLabel>Connected</TagLabel>
    </Tag>
  ) : (
    <>
      <Button
        leftIcon={<Icon as={LinkIcon} />}
        variant="solid"
        rounded="full"
        colorScheme="whatsapp"
        onClick={connectToMetaMask}
        isLoading={isUserConnecting}
        mb={2}
      >
        Connect to MetaMask
      </Button>
      {!!userConnectError && <ErrorMsg textOnly />}
    </>
  );
};

export default ConnectToMetaMaskButton;
