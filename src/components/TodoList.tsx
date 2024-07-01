import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { CirclePlus, Trash2 } from 'lucide-react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const newTask: Todo = {
                id: Date.now(),
                text: newTodo,
                completed: false,
            };
            console.log(`Adding new todo: ${newTodo}`);
            setTodos([...todos, newTask]);
            setNewTodo('');
        }
    };

    const handleToggleComplete = (id: number) => {
        console.log(`Toggling todo with id: ${id}`);
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    const handleDeleteTodo = (id: number) => {
        console.log(`Deleting todo with id: ${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="flex justify-center relative">
            <div className="flex absolute top-[211px] w-[736px]">
                <Input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Adicione uma nova tarefa"
                    className="h-[52px] focus:border-[#9359F3] duration-200 w-[618px] text-base bg-[#F0EDF2] border-[#E0DCE4] border-2 rounded-lg outline-none"
                />
                <Button onClick={handleAddTodo} className="bg-[#6F3CC3] duration-200 hover:bg-[#9359F3] text-sm h-[52px] ml-2 w-[110px] flex gap-2 font-bold text-white rounded-lg">
                    Criar
                    <CirclePlus size={20} />
                </Button>
            </div>
            <div className='relative top-[370px] w-[736px]'>
                <div className='flex'>
                    <h1 className='text-[#6B6572] font-semibold'>Tarefas criadas</h1>
                    <Badge className='bg-[#DDD2EF] ml-2 text-[#6F3CC3] font-bold h-6 flex justify-center items-center rounded-full'>{todos.length}</Badge>
                </div>
                <div className='absolute right-0 flex top-0'>
                    <h1 className='text-[#6B6572] mr-2 font-semibold'>Concluídas</h1>
                    <Badge className='bg-[#BFE3D0] text-[#2D6C4A] font-bold flex justify-center items-center rounded-full'>{todos.filter(todo => todo.completed).length}</Badge>
                </div>
                <ul className='mt-6 flex flex-col gap-3'>
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className={`flex w-[736px] h-[82px] rounded-lg border border-[#D1CBD7] bg-[#E0DCE4] items-center ${todo.completed ? 'line-through bg-[#F0EDF2] border-[#D1CBD7] text-[#6B6572] ' : ''}`}
                        >
                            <div className="flex items-center w-full pl-4">
                                <Checkbox
                                    checked={todo.completed}
                                    onCheckedChange={() => handleToggleComplete(todo.id)}
                                    className='rounded-full h-5 w-5'
                                />
                                <h1 className='flex-grow w-80 text-base font-normal text-[#262428] ml-3'>{todo.text}</h1>
                                <Button onClick={() => handleDeleteTodo(todo.id)} className="bg-inherit hover:bg-inherit">
                                    <Trash2 color='#6B6572' size={20} />
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;