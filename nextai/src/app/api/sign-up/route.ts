import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const isUserLoggedInByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (isUserLoggedInByUsername) {
      return Response.json(
        {
          success: false,
          message: 'Username is already taken',
        },
        { status: 400 }
      );
    }

    const isUserLoggedInByEmail = await UserModel.findOne({ email });
    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (isUserLoggedInByEmail) {
      if (isUserLoggedInByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: 'User already exists with this email, try with another email account',
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        isUserLoggedInByEmail.password = hashedPassword;
        isUserLoggedInByEmail.verifyCode = verifyCode;
        isUserLoggedInByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await isUserLoggedInByEmail.save();
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessages: true,
        messages: [],
      });

      await newUser.save();
    }

    // Send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'User registered successfully. Please verify your account.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
      },
      { status: 500 }
    );
  }
}