
import RouteHandlerAddTodo  from "./component/RouteHandlerAddTodo"
import ServerActionAddTodo from "./component/ServerActionAddTodo";

async function getTodoData() {
  const res = await fetch("http://localhost:3000/api/todo", {method:"GET"})

  console.log("secret should not be in browser", "SECRET")
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

export default async function Home() {
  const todos = await getTodoData();

  return (
    <main>
      <h1>TODOS:</h1>
      <h3>Client Component using Route Handler Mutation</h3>
      <RouteHandlerAddTodo/>
      <br/><br/>
      <h3>Client Component Using Server Action for mutation</h3>
      <ServerActionAddTodo/>
      <ul>
        {
          todos.map(todo => (<li key={todo.id}>{todo.content}</li>))
        }
      </ul>
    </main>
  )
}