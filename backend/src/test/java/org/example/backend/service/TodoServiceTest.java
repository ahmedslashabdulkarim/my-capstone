package org.example.backend.service;

import org.example.backend.model.Todo;
import org.example.backend.repo.TodoRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TodoServiceTest {

    TodoRepository repo = Mockito.mock(TodoRepository.class);
    TodoService service = new TodoService(repo);

    @Test
    void getAll_shouldReturnList() {
        // GIVEN
        Todo todo = new Todo(UUID.randomUUID(), "Test", "Desc", false);
        when(repo.findAll()).thenReturn(List.of(todo));

        // WHEN
        List<Todo> result = service.getAll();

        // THEN
        assertEquals(1, result.size());
        assertEquals("Test", result.get(0).title());
    }

    @Test
    void getById_shouldReturnTodo() {
        // GIVEN
        UUID id = UUID.randomUUID();
        Todo todo = new Todo(id, "Test", "Desc", false);
        when(repo.findById(id)).thenReturn(Optional.of(todo));

        // WHEN
        Todo result = service.getById(id.toString());

        // THEN
        assertEquals("Test", result.title());
        assertEquals("Desc", result.description());
        assertFalse(result.done());
    }

    @Test
    void create_shouldGenerateIdAndSave() {
        // GIVEN
        Todo input = new Todo(null, "New", "Desc", false);
        Todo saved = new Todo(UUID.randomUUID(), "New", "Desc", false);
        when(repo.save(any())).thenReturn(saved);

        // WHEN
        Todo result = service.create(input);

        // THEN
        assertNotNull(result.id());
        assertEquals("New", result.title());
        assertEquals("Desc", result.description());
    }

    @Test
    void update_shouldSaveUpdatedTodo() {
        // GIVEN
        UUID id = UUID.randomUUID();
        Todo input = new Todo(null, "Updated", "Desc2", true);
        Todo updated = new Todo(id, "Updated", "Desc2", true);
        when(repo.save(any())).thenReturn(updated);

        // WHEN
        Todo result = service.update(id.toString(), input);

        // THEN
        assertEquals(id, result.id());
        assertEquals("Updated", result.title());
        assertEquals("Desc2", result.description());
        assertTrue(result.done());
    }

    @Test
    void delete_shouldCallRepository() {
        // GIVEN
        UUID id = UUID.randomUUID();

        // WHEN
        service.delete(id.toString());

        // THEN
        verify(repo, times(1)).deleteById(id);
    }
}
