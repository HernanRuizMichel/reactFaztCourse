export function Greeting() {
  return <h1>Este es un componente React</h1>;
}

export function UserCard(props) {
    console.log(props);
    return <div>
      <h1>{props.title}</h1>
      <h2>Nombre: <span>{props.name}</span></h2>
      <h2>Saldo: <span>{props.account}💲</span></h2>
    </div>
}
