import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    private todos: Todo[] = [];
    private idCounter: number = 1;

    create(createTodoDto: CreateTodoDto): Todo {
        const newTodo: Todo = {
            id: this.idCounter++,
            title: createTodoDto.title,
            description: createTodoDto.description || '',
            isCompleted: false,
        };

        this.todos.push(newTodo);
        return newTodo;
    }

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find((item) => item.id === id);

        if (!todo) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }

        return todo;
    }

    update(id: number, updateTodoDto: UpdateTodoDto): Todo {
        const todo = this.findOne(id);

        if (updateTodoDto.title !== undefined) {
            todo.title = updateTodoDto.title;
        }
        if (updateTodoDto.description !== undefined) {
            todo.description = updateTodoDto.description;
        }
        if (updateTodoDto.isCompleted !== undefined) {
            todo.isCompleted = updateTodoDto.isCompleted;
        }

        return todo;
    }

    remove(id: number): { message: string } {
        const index = this.todos.findIndex((item) => item.id === id);

        if (index === -1) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }

        this.todos = this.todos.filter((item) => item.id !== id);
        return { message: `Todo with ID ${id} has been deleted` };
    }
}
