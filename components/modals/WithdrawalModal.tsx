"use client"

import useModalsStore from "@/store/modalsStore";

const WithdrawalModal = () => {
    const withdrawal = useModalsStore((state: any) => state.withdrawal);
    const updateModals = useModalsStore((state: any) => state.updateModals);

    if (withdrawal === false || withdrawal === undefined) {
        return null;
      }
      
  return (
    <div>WithdrawalModal</div>
  )
}

export default WithdrawalModal