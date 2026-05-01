package org.example.backend.model;

public record Todo(
        String id,
        String title,
        String description,
        boolean done
) {}
