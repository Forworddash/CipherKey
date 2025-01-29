import { useState, FormEvent } from "react";
import { createAccount } from "../auth";  // Import the createAccount function

const SignUp = () => {
  // Define state types for email, password, and error
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Define the event type for form submission
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createAccount(email, password);
      // Handle post-signup (e.g., redirect or show confirmation)
    } catch (error: unknown) {
      // Type checking for error
      if (error instanceof Error) {
        setError(error.message); // Handle error from createAccount function
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
