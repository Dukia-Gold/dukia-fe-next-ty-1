export const setTransactionCode = async (
  code: string,
  cookies: any,
  loading: Function,
  modalFunc: Function,
  closeModal: Function
) => {
  const token = cookies["auth-token"];

  loading(true);
  try {
    const response = await fetch(
      "https://api.dukiapreciousmetals.co/api/v2/transaction/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          transaction_code: code,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json(); // Await the JSON response
      throw new Error(errorData.message); // Access the message property
    }

    const data = await response.json();
    modalFunc({
      type: "success",
      title: "Transaction Successful!",
      message: data.message,
    });
  } catch (error: any) {
    modalFunc({
      type: "error",
      title: "Transaction Error!",
      message: error.message,
    });
  } finally {
    closeModal();
    loading(false);
  }
};
