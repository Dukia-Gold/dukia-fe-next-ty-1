//import { jwtVerify, SignJWT } from "jose";
//import cookieSignature from "cookie-signature";

//interface UserJwtPayload {
   // jti: string;
  //  iat: number;
//}

//export const getJwtSecretKey = () => {
   // const secret = process.env.JWT_SECRET_KEY;

  //  if(!secret || secret.length === 0) {
  //      throw new Error('JWT_SECRET_KEY is not set. Please set it in your environment variables.');
  //  }

   // return secret;
//}

// export const verifyAuth = async (token: string) => {
//     try {
//         const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
//         return verified.payload as UserJwtPayload;
//     } catch (error) {
//         throw new Error('Invalid token. Please login again.')
//     }
// }

//export const signToken = (token: string) => {
    //const secretKey = "cookie023200";
   // if (!secretKey || secretKey.length === 0) {
        //throw new Error('SIGN_KEY is not set.');
   // }

   // const signedToken = cookieSignature.sign(token, secretKey);

   // return signedToken;
}

// export const unSignToken = (signedToken: string) => {
//     const secretKey = "cookie023200";

//     if (!secretKey || secretKey.length === 0) {
//         throw new Error('SIGN_KEY is not set.');
//     }

//     const originalToken: string | false = cookieSignature.unsign(signedToken, secretKey);

//     return originalToken;
// }
