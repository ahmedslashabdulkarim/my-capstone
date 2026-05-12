
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
        when(repo.findAll()).thenReturn(List.of(
                new Todo(UUID.randomUUID(), "Test", "Desc", false)
        ));

        List<Todo> result = service.getAll();

        assertEquals(1, result.size());
        verify(repo).findAll();
    }

    @Test
    void getById_shouldReturnTodo() {
        UUID id = UUID.randomUUID();
        Todo todo = new Todo(id, "Test", "Desc", false);

        when(repo.findById(id)).thenReturn(Optional.of(todo));

        Todo result = service.getById(id.toString());

        assertEquals("Test", result.title());
        verify(repo).findById(id);
    }

    @Test
    void create_shouldGenerateNewUUID() {
        Todo input = new Todo(null, "New", "Desc", false);

        when(repo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        Todo result = service.create(input);

        assertNotNull(result.id());
        assertEquals("New", result.title());
        verify(repo).save(any());
    }

    @Test
    void update_shouldSaveUpdatedTodo() {
        UUID id = UUID.randomUUID();
        Todo input = new Todo(null, "Updated", "Desc2", true);

        when(repo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        Todo result = service.update(id.toString(), input);

        assertEquals(id, result.id());
        assertEquals("Updated", result.title());
        verify(repo).save(any());
    }

    @Test
    void delete_shouldCallRepo() {
        UUID id = UUID.randomUUID();

        service.delete(id.toString());

        verify(repo).deleteById(id);
    }
}
