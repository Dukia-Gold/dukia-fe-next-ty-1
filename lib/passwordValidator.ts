export const validatePassword = (password: string) => {
  const messages = {
    length:
      password.length >= 8
        ? ""
        : "Password must be at least 8 characters long.",
    uppercase: /[A-Z]/.test(password)
      ? ""
      : "Password must contain at least one uppercase letter.",
    lowercase: /[a-z]/.test(password)
      ? ""
      : "Password must contain at least one lowercase letter.",
    number: /[0-9]/.test(password)
      ? ""
      : "Password must contain at least one number.",
    special: /[!@#$%^&*]/.test(password)
      ? ""
      : "Password must contain at least one special character.",
  };
  return messages;
};
