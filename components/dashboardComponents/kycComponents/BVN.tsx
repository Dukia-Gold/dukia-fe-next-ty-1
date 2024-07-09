const BVN = () => {
  return (
    <div className="rounded-lg p-3 md:p-6 bg-white space-y-2 text-dukiaBlue">
      <p className="font-bold text-lg">Proof of Identity</p>

      <div className="space-y-6 text-sm">
        <p>
          To comply with government regulations, we need to verify your identity
          to ensure the security and safety of your account. Please proceed to
          the next step to enter your Bank Verification Number (BVN) to complete
          this step.
          <br /> <br />
          We will not store or share your BVN data. It is only used to verify
          your identity and will be deleted once the process is complete.
        </p>

        <button className="py-3.5 px-6 bg-dukiaBlue text-white rounded-lg">
          Proceed to BVN Verification
        </button>
      </div>
    </div>
  );
};

export default BVN;
