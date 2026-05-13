package org.example.backend.controller;

import org.example.backend.model.Todo;
import org.example.backend.service.TodoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;


import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;


@WebMvcTest(TodoController.class)
class TodoControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockitoBean
    TodoService service;

    @Autowired
    ObjectMapper objectMapper;

    // GET ALL
    @Test
    void getAll() throws Exception {
        // GIVEN
        when(service.getAll()).thenReturn(List.of(
                new Todo(UUID.randomUUID(), "Test", "Desc", false)
        ));

        // WHEN + THEN
        mockMvc.perform(get("/api/todos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(1));
    }

    // GET BY ID
    @Test
    void getById() throws Exception {
        // GIVEN
        UUID id = UUID.randomUUID();

        when(service.getById(id.toString()))
                .thenReturn(new Todo(id, "Test", "Desc", false));

        // WHEN + THEN
        mockMvc.perform(get("/api/todos/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Test"));
    }

    // CREATE
    @Test
    void create() throws Exception {
        // GIVEN
        Todo input = new Todo(null, "New", "Desc", false);
        Todo saved = new Todo(UUID.randomUUID(), "New", "Desc", false);

        when(service.create(any(Todo.class))).thenReturn(saved);

        // WHEN + THEN
        mockMvc.perform(post("/api/todos")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("New"))
                .andExpect(jsonPath("$.id").exists());
    }

    // UPDATE
    @Test
    void update() throws Exception {
        // GIVEN
        UUID id = UUID.randomUUID();
        Todo input = new Todo(null, "Updated", "Desc", true);
        Todo updated = new Todo(id, "Updated", "Desc", true);

        when(service.update(eq(id.toString()), any(Todo.class)))
                .thenReturn(updated);

        // WHEN + THEN
        mockMvc.perform(put("/api/todos/" + id)
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated"));
    }

}