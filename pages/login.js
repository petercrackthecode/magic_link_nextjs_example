import {useRouter} from "next/router";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {elements} = event.target;
    // Add the Magic code here
    
    // Once we have the token from magic,
    // Update our own database

    // const authRequest = await fetch()
    
    // if (authRequest.ok) {
      // We successfully logged in, our API set authorization cookies and now we can redirect
      // to the dashboard!
    //   router.push('/dashboard');
    // } else {/* handle errors */}
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input name="email" type="email"/>
      <button>Log in</button>
    </form>
  );
}