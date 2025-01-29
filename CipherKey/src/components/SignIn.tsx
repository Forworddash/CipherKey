import React, { useState } from "react";
import { signIn } from "../auth";


const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [error, setError] = useState<string | null>(null); // Adjusted error type

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      // Handle post-signin (e.g., redirect or show confirmation)
    } catch (error) {
      // setError(error.message); // Handle error from signIn function
      // setError(error.message); // Handle error from signIn function
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default SignIn;
