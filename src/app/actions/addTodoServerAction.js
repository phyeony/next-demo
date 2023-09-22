"use server"

import { revalidatePath } from "next/cache";

export const addTodoAction = async (formData) => {
    const data =  formData.get("content")
    console.log("server side", data);
    // either api call or direct db change.
    const res = await fetch(`http://localhost:3000/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTodo: data }),
    });
    revalidatePath("/")
}