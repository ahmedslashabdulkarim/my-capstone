package org.example.backend.service;

import org.example.backend.model.Todo;
import org.example.backend.repo.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TodoService {

    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> getAll() {
        return repo.findAll();
    }

    /*
    public Todo getById(String id) {
        return repo.findById(id).orElseThrow();
    }*/
    public Todo getById(String id) {
        return repo.findById(UUID.fromString(id)).orElseThrow();
    }

    public Todo create(Todo todo) {
        Todo newTodo = new Todo(
                UUID.randomUUID(),
                todo.title(),
                todo.description(),
                todo.done()
        );
        return repo.save(newTodo);
    }
    /*
    public Todo create(Todo todo) {
        return repo.save(todo);
    }*/

    public Todo update(String id, Todo todo) {
        Todo updated = new Todo(
                UUID.fromString(id),
                todo.title(),
                todo.description(),
                todo.done()
        );
        return repo.save(updated);
    }
    /*
    public Todo update(String id, Todo todo) {
        return repo.save(todo);
    }
    */

    public void delete(String id) {
        repo.deleteById(UUID.fromString(id));
    }
}

