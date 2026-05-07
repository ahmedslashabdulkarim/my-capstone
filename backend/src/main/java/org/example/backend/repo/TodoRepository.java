package org.example.backend.repo;

import org.example.backend.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface TodoRepository extends MongoRepository<Todo, UUID> {}
