import React, { useEffect, useState } from "react";
import Web3 from "web3";

const Signature = () => {
  const [signature1, setSignature1] = useState();

  const check = async () => {
    const web3 = new Web3(window.ethereum);

    try {
      // Request permission to connect to MetaMask
      await window.ethereum.enable();

      // Get the user's Ethereum address
      const signerAddress = (await web3.eth.getAccounts())[0];
      console.log("user check r", signerAddress);

      // Create the message and message hash
      const message = "wishing you all the best!";
      const messageHash = web3.utils.keccak256(message);
      console.log("message hash", messageHash);

      // Use MetaMask to sign the message hash
      const signature = await web3.eth.sign(messageHash, signerAddress);

      console.log("Signature:", signature);
      setSignature1(signature);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   check();
  // }, []);

  return (
    <div>
      <button
        type="button"
        className="btnn "
        style={{}}
        onClick={() => {
          check();
        }}
      >
        GET your signature
      </button>

      <h3 className="text-white" style={{ fontFamily: "Burbank" }}>
        signature :<p>{signature1}</p>
        {console.log("Signature1:", signature1)}
      </h3>
    </div>
  );
};

export default Signature;
