import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      {loading ? "Loading..." : (
        <div>
          <h2>User email {user.email}</h2>
          <button>Log out</button>
        </div>
        )}
    </>
  );
}
