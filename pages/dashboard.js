import useAuth from "../hooks/UseAuth";

function Dashboard() {
    const { user } = useAuth();
    console.log(user);

    return (
      <div>
        Usuario: {user?.name}
      </div>
    );
}
  
export default Dashboard