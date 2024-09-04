export const fetchNameByAccNum = async (accNum: string) => {
  const url = `https://api.dukiapreciousmetals.co/api/users/by-account/${accNum}`;

  try {
    const response = await fetch(url);
    if (response.ok){
      const user = await response.json();

      if (user.status === "success") {
        return user;
      }
    }
  } catch (error: any) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return {
        status: "error",
        message: "Network error. Please check your internet connection.",
      };
    } else if (
      error instanceof Error &&
      error.message === "HTTP error! status: 404"
    ) {
      return {
        status: "error",
        message: "Recipient not found",
      };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};
