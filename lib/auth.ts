import { jwtVerify, SignJWT } from "jose";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    console.log(
      "JWT_SECRET_KEY is not set. Please set it in your environment variables."
    );
    throw new Error(
      "JWT_SECRET_KEY is not set. Please set it in your environment variables."
    );
  }

  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload as UserJwtPayload;
  } catch (error) {
    console.log("Invalid token. Please login again.");
    throw new Error("Invalid token. Please login again.");
  }
};
