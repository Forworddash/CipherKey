const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in:', userCredential);
      // Start the MFA process after sign-in
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  