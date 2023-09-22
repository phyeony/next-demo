import { NextResponse } from 'next/server'
import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import path from 'path';
import { revalidatePath } from 'next/cache';

const dataFilePath = path.join(process.cwd(), './src/app/api/todo/data.json');

export async function POST(request) {
    try {
        // Parse the request body to get the new todo item
        const requestBody = await request.text();
        const {newTodo} = JSON.parse(requestBody);

        const jsonData = await fs.readFile(dataFilePath)
        const todos = JSON.parse(jsonData)
        todos.push({id: randomUUID(), content: newTodo});

        // console.log(todos);
        // Write the updated todos array back to data.json
        await fs.writeFile(dataFilePath, JSON.stringify(todos),'utf-8');
        revalidatePath('/')

        return NextResponse.json("Todo item added successfully");
    } catch (error) {
        console.error('Error:', error)
    }
}

// In our case, this will be lambda function and it will be protected by iam
export async function GET(Request) {
    const jsonData = await fs.readFile(dataFilePath)
    const todos = JSON.parse(jsonData)
    return NextResponse.json(todos)
}