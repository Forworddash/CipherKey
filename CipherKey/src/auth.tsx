// src/auth.ts
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, UserCredential } from "firebase/auth";

// Initialize Firebase Authentication
const auth = getAuth();

// Function to create an account with email and password
const createAccount = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential);
    // Once user is created, initiate MFA setup if needed
    // You can also send an email for verification if needed
    return userCredential;
  } catch (error) {
    console.error("Error creating account:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error"); // Throw an error to be handled in the component
  }
};

// Function to sign in with email and password
const signIn = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential);
    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

// Function to send password reset email
const sendPasswordReset = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent.');
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export { createAccount, signIn, sendPasswordReset };
