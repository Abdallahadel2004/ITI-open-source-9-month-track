package com.example;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

public class Main {
    public static void main(String[] args) {
        // 1. Create a Student object
        student student = new student("Abdallah Adel", 22);

        System.out.println("--- Original Java Object ---");
        System.out.println(student);

        // Create Jsonb instance
        try (Jsonb jsonb = JsonbBuilder.create()) {

            // 2. from Java Object -> to JSON String
            String jsonString = jsonb.toJson(student);
            System.out.println("\n--- Serialized JSON String (Write) ---");
            System.out.println(jsonString);

            // 3. from JSON String -> to Java Object
            student deserializedStudent = jsonb.fromJson(jsonString, student.class);
            System.out.println("\n--- Deserialized Java Object (Read) ---");
            System.out.println(deserializedStudent);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
