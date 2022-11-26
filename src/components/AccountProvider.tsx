import React, { createContext, useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import { ADDRESS, SETTINGS } from "@/contract";

type AccountContextType = {
  userAccount: string;
  isUserConnecting: boolean;
  isUserConnected: boolean;
  userConnectError: string;
  connectToMetaMask: () => Promise<void>;
  contract?: ethers.Contract;
};

/* Creating a context object holding account info. */
export const AccountContext = createContext<AccountContextType>({
  userAccount: "",
  isUserConnecting: false,
  isUserConnected: false,
  userConnectError: "",
  connectToMetaMask: async () => {
    // Do nothing
  },
});

/**
 * The AccountProvider is a React component that provides the AccountContext to its children.
 * @param children Components that will be able to consume provided data.
 */
const AccountProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [contract, setContract] = useState<ethers.Contract>();
  const [isUserConnecting, setIsUserConnecting] = useState(false);
  const [userConnectError, setUserConnectError] = useState("");
  const [userAccount, setUserAccount] = useState("");

  /**
   * Connects to the MetaMask instance of browser, and sets user account value.
   */
  const connectToMetaMask = useCallback(async () => {
    try {
      // User is connecting
      setIsUserConnecting(true);

      // Reset userconnecterror
      setUserConnectError("");

      // Ensure ethereum is defined
      if (!window.ethereum) throw new Error("Ethereum is not defined");

      // Connect to MetaMask
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();

      // Check if there are accounts
      if (accounts.length === 0) throw new Error("No account found");

      // Set user account
      setUserAccount(accounts[0]);
    } catch (error) {
      setUserConnectError((error as Error).message);
    } finally {
      // We are done!
      setIsUserConnecting(false);
    }
  }, []);

  useEffect(() => {
    if (!window.ethereum) return;

    // When account changes, set user account
    window.ethereum.on("accountsChanged", function (accounts: string[]) {
      setUserAccount(accounts[0]);
    });

    // Set contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setContract(new ethers.Contract(ADDRESS, SETTINGS.abi, signer));
  }, []);

  return (
    <AccountContext.Provider
      value={{
        userAccount,
        isUserConnected: !!userAccount,
        connectToMetaMask,
        isUserConnecting,
        userConnectError,
        contract,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
