import useAuth from "../hooks/UseAuth";

export default function Home() {
  const { user, signin } = useAuth();
  console.log('user', user);

  return (
    <div>
      <button onClick={ () => signin() }>Entrar com o GitHub</button>
    </div>
  );
}
