import { ExternalLinkIcon } from "lucide-react";

const BVN = () => {
  return (
    <div className="mt-10 mb-16 space-y-6 text-dukiaBlue">
      <div className="font-semibold flex items-center gap-6">
        <p>Proof of Identity</p>
        <p className="text-sm">Tier 1 KYC</p>
      </div>

      <div className="border border-[#E8E9ED] py-10 px-6 rounded-xl space-y-14">
        <p>
          To comply with government regulations, we need to verify your identity
          to ensure the security and safety of your account.
          <br />
          <br /> Please proceed to the next step to enter your Bank Verification
          Number (BVN) to complete this step.
          <br /> <br />
          We will not store or share your BVN data. It is only used to verify
          your identity and will be deleted once the process is complete.
        </p>

        <div className="flex items-center justify-between">
          <div className="py-4 px-6 border-2 border-dukiaBlue rounded flex items-center justify-between w-[450px]">
            <div className="flex items-center gap-6">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#008751]"></div>
                <div className="absolute inset-0 bg-white left-1/3 right-1/3"></div>
              </div>

              <div>
                <p className="font-semibold">BVN Verification</p>
                <p className="text-sm">For Nigerian Customers</p>
              </div>
            </div>

            <ExternalLinkIcon />
          </div>

          <div className="py-4 px-6 border border-[#E8E9ED] rounded flex items-center justify-between w-[450px]">
            <div className="flex items-center gap-6">
              

              <div>
                <p className="font-semibold">BVN Verification</p>
                <p className="text-sm">For Nigerian Customers</p>
              </div>
            </div>

            <ExternalLinkIcon />
          </div>
        </div>
      </div>

      <div className="space-y-6 text-sm">
        <button className="py-3.5 px-6 bg-dukiaBlue text-white rounded-lg">
          Proceed to BVN Verification
        </button>
      </div>
    </div>
  );
};

export default BVN;
