import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from './Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Card,  CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    // Correctly calling useToast()

    const addTodoHandler = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/v1/todo", { title, description }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            });
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
                setTodos([...todos, res.data.todo])
                setTitle("");
                setDescription("");
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/v1/todo");
                if (res.data.success) {
                    setTodos(res.data.todos);
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchTodo();
    }, [])

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col items-start mt-5 px-4">
                <div className="flex items-center gap-5 w-full mb-4">
                    {/* Input Field */}
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Add a new todo..."
                        className="w-1/3"
                    />
                    {/* Add Button */}
                    <Button onClick={addTodoHandler}>Add Todo</Button>
                </div>

                {/* Textarea for description */}
                <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a description..."
                    className="w-1/2"
                />
                <div className='grid grid-cols-5 gap-2 mt-5'>
                    {
                        todos.map((todo) => (
                            <Card key={todo._id} className="bg-gray-800 text-white">
                                <CardHeader>
                                    <CardTitle>{todo.title}</CardTitle>
                                    <CardDescription>{todo.description}</CardDescription>
                                </CardHeader>
                               
                            </Card>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;
