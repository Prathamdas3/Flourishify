import prisma from '../prisma/index.js';
import cookieToken from '../utils/cookieToken.js';

//user singUp
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    if (!name || !email || !password) {
      throw new Error('provide all the fields');
    }

    const user = await prisma.user.create({
      data: { name, email, password },
    });

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

//login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error('Please provide email and password');
    }

    //find the user from his email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    //if there is no user
    if (!user) {
      throw new Error('user not found');
    }

    //password mismatch
    if (user.password !== password) {
      throw new Error('password is incorrect');
    }

    //user is there and validation
    cookieToken(user, res);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

//logout user
export const logout = async (req, res) => {
  try {
    res.clearCookie('token');

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
