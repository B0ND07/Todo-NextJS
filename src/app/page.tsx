import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodo(){
  return  prisma.todo.findMany()
}

export default async function Home(){
  const todos=await getTodo()
  // await prisma.todo.create({data:{title:"test",complete:false}})
  return ( 
    <>
  <header className="flex justify-between items-center mx-6 my-3">
    <h1 className="text-4xl">todos</h1>
    <Link href="/new" className="text-2xl border px-2 py-1 border-slate-500 bg-gray-700 text-white">New</Link>
  </header>
  <ul className="pl-4">
    {todos.map(todo=>(
      <TodoItem  key={todo.id} {...todo}/>
    
    )
      
      )}
  </ul>

  </>
  
  )
}