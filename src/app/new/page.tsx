import { prisma } from "@/db";
import { log } from "console";
import Link from "next/link";
import { redirect } from "next/navigation";



async function createTodo(data:FormData){
    "use server"

    console.log("hi");

    const title=data.get("title")?.valueOf()
    if (typeof title!== "string"){
        throw new Error("srkj")
    }
    await prisma.todo.create({data:{title,complete:false}})
    redirect("/")

}

export default function Page(){
    return (
        <div>
            <header>
                <h1>New</h1>
            </header>
            <form action={createTodo}>
                <input className="border border-black" type="text" name="title" />
                <div>
                    <Link className="border border-black mx-2" href="..">Cancel</Link>
                    <button  type="submit" className="border  border-black my-1">Add</button>
                </div>
            </form>
        </div>
    )
}