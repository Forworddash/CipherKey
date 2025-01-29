import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'invisible', // Invisible reCAPTCHA
    callback: (response) => {
      console.log("reCAPTCHA verified:", response);
    }
  }, auth);
};

const sendVerificationCode = async (phoneNumber) => {
  setupRecaptcha();
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    window.confirmationResult = confirmationResult;
    console.log("SMS sent!");
  } catch (error) {
    console.error("Error sending verification code:", error);
  }
};

const verifyCode = async (code) => {
  try {
    const result = await window.confirmationResult.confirm(code);
    console.log("Phone number verified!", result);
    // User successfully verified their identity
  } catch (error) {
    console.error("Error verifying code:", error);
  }
};
