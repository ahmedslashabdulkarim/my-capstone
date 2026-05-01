package org.example.backend.controller;

import org.example.backend.model.Todo;
import org.example.backend.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Todo> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable String id) { return service.getById(id); }

    @PostMapping
    public Todo create(@RequestBody Todo todo) { return service.create(todo); }

    @PutMapping("/{id}")
    public Todo update(@PathVariable String id, @RequestBody Todo todo) {
        return service.update(id, todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) { service.delete(id); }
}

