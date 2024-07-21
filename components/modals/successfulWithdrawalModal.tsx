"use client"

import useModalsStore from "@/store/modalsStore";

const SuccessfulWithdrawalModal = () => {
    const successfulWithdrawal = useModalsStore((state: any) => state.successfulWithdrawal);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  if (successfulWithdrawal === false || successfulWithdrawal === undefined) {
    return null;
  }

  return (
    <div>SuccessfulWithdrawalModal</div>
  )
}

export default SuccessfulWithdrawalModal