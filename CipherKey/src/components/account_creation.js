const createAccount = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential);
      // Once user is created, initiate MFA setup
      // You can also send an email for verification if needed
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
  