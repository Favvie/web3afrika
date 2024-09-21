import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x2d6829Bd5e2635aFf778DA6FC3891CAB5C1145D0";
const nftAddress = "0x8Da051672cBEc4714cFcaf9560C013496206C77c";

const CauseKoinSmartContractModule = buildModule("CauseKoinSmartContractModule", (m) => {

    const save = m.contract("CauseKoinSmartContract", [tokenAddress,nftAddress]);

    return { save };
});

export default CauseKoinSmartContractModule;


//CauseKoinSmartContractModule#CauseKoinSmartContract - 0x2e79CC77048e48C85ccc14959A8b6963ADcF5376