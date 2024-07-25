export const extractParams = (
  url: string
): { email: string; token: string } | null => {
  try {
    const parsedUrl = new URL(url);
    const email = parsedUrl.searchParams.get("email");
    const token = parsedUrl.pathname.split("/").pop();

    if (email && token) {
      return { email, token };
    }

    return null;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
};
