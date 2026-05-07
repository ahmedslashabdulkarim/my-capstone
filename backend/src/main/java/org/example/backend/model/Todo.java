package org.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;
@Document(collection = "todoCapstone")
public record Todo(
        @Id UUID id,
        String title,
        String description,
        boolean done
) {}



