import { prisma } from "@/db"


type TodoItemProps={
    id:string
    title:string
    complete:Boolean
}

const TodoItem = ({id,title,complete}:TodoItemProps) => {

    const handleDelete=async()=>{
       await prisma.todo.delete({
            where: {
              id: id,
            }})
    }
  return (
    <div className="flex gap-3">
          <li className="flex gap-1 items-center">
            <input type="checkbox" id={id} className="cursor-pointer peer"/>
            <label htmlFor={id} className="peer-checked:line-through">{title}</label>
            </li>
          
    </div>
  )
}

export default TodoItem