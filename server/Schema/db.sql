create database notestar;

create table users (
    id uuid primary key,
    name varchar(255),
    password varchar(255),
    email varchar(255)
);

create table courses (
    course_id serial primary key,
    course_name varchar(255)
);

create table notes (
    note_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    note_name VARCHAR(255)
);

CREATE TABLE note (
    note_id SERIAL PRIMARY KEY,
    notes_id INT REFERENCES notes(note_id),
    text_info TEXT
);