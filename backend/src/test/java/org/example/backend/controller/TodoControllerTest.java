
/*
package org.example.backend.controller;

import org.example.backend.model.Todo;
import org.example.backend.service.TodoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;

import org.springframework.boot.webmvc.autoconfigure.WebMvcAutoConfiguration;
import org.springframework.boot.webmvc.autoconfigure.error.ErrorMvcAutoConfiguration;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(TodoController.class)
@ImportAutoConfiguration({
        WebMvcAutoConfiguration.class,
        ErrorMvcAutoConfiguration.class
})
class TodoControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    TodoService service;

    @Test
    void getAll_shouldReturnList() throws Exception {
        when(service.getAll()).thenReturn(
                List.of(new Todo(UUID.randomUUID(), "Test", "Desc", false))
        );

        mockMvc.perform(get("/api/todos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Test"));
    }

    @Test
    void getById_shouldReturnTodo() throws Exception {
        UUID id = UUID.randomUUID();
        when(service.getById(id.toString()))
                .thenReturn(new Todo(id, "Test", "Desc", false));

        mockMvc.perform(get("/api/todos/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Test"));
    }

    @Test
    void create_shouldReturnCreatedTodo() throws Exception {
        Todo created = new Todo(UUID.randomUUID(), "New", "Desc", false);

        when(service.create(any())).thenReturn(created);

        mockMvc.perform(post("/api/todos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "title": "New",
                                  "description": "Desc",
                                  "done": false
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("New"));
    }

    @Test
    void update_shouldReturnUpdatedTodo() throws Exception {
        UUID id = UUID.randomUUID();
        Todo updated = new Todo(id, "Updated", "Desc2", true);

        when(service.update(eq(id.toString()), any())).thenReturn(updated);

        mockMvc.perform(put("/api/todos/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "title": "Updated",
                                  "description": "Desc2",
                                  "done": true
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated"));
    }

    @Test
    void delete_shouldReturnOk() throws Exception {
        mockMvc.perform(delete("/api/todos/" + UUID.randomUUID()))
                .andExpect(status().isOk());
    }
}
*/
