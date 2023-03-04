import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
// export default { hashPassword, comparePassword };
