import User from "../Models/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const newUser = async (req, res) => {
  const { name, email, picture } = req.body;

  if (!name || !email || !picture) {
    return res.status(400).json({ success: false, msg: "Enter valid details" });
  }

  try {
    let user = await User.findOne({ email });
    let isNewUser = false;

    if (!user) {
      user = await User.create({ name, email, picture });
      isNewUser = true;
    }

    const token = jwt.sign(
      { userId: user._id, email, name },
      process.env.SECRET_KEY,
      { expiresIn: "10h" }
    );

    console.log("Generated token:", token);

    const cookieOptions = {
      httpOnly: true, // Prevent client-side access
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict",
      maxAge: 10 * 60 * 60 * 1000, // 10 hours
      path: "/",
    };

    // ✅ Always set the cookie, whether new or existing user
    res.cookie("authToken", token, cookieOptions);

    if (!isNewUser) {
      return res
        .status(200)
        .json({
          success: true,
          msg: "User already exists",
          user: user,
        });
    }

    return res
      .status(201)
      .json({
        success: true,
        msg: "User Registered successfully!",
        user: user,
      });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res
      .status(500)
      .json({ success: false, msg: "Server error, please try again later." });
  }
};

export const logout = async (req, res) => {
  try {
    // Optionally check if the authToken cookie exists
    if (!req.cookies.authToken) {
      return res
        .status(400)
        .send({
          success: false,
          message: "No active session to log out from.",
        });
    }

    res.clearCookie("authToken", {
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use this in production (HTTPS)
      sameSite: "strict",
    });

    res.status(200).send({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    res
      .status(500)
      .send({
        success: false,
        message: "Failed to log out, please try again later.",
      });
  }
};
