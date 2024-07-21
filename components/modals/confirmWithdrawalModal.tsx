"use client"

import useModalsStore from "@/store/modalsStore";

const ConfirmWithdrawalModal = () => {
    const confirmWithdrawal = useModalsStore((state: any) => state.confirmWithdrawal);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  if (confirmWithdrawal === false || confirmWithdrawal === undefined) {
    return null;
  }
  
  return (
    <div>ConfirmWithdrawalModal</div>
  )
}

export default ConfirmWithdrawalModal