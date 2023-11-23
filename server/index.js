const express = require('express')
const app = express();
const cors = require('cors');
const pool = require('./Schema/database');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

// ROUTES //    

    // Courses (Main Page)

        // Create Course

app.post('/home', async (req, res) => {

    try {
        const { course_name } = req.body;
        const newCourse = await pool.query(
            "insert into courses (course_name) VALUES($1) RETURNING *",
            [course_name]
        );
        console.log(newCourse.rows[0]);
        res.json(newCourse.rows[0]);

    } catch (err) {
        console.log(err);
    }

});

        // Get Course

app.get('/home', async (req, res) => {

    try {
        
        const courses = await pool.query(
            "select * from courses"
        );

        console.log(courses.rows);
        res.json(courses.rows);

    } catch (err) {
        console.log(err);
    }

});

        // Delete Course    TODO::[(And Content Within Course)]
app.delete('/home/:id', async (req, res) => {

    try {
        const { id } = req.params;
        
        const deleted = await pool.query(
            "DELETE FROM courses WHERE course_id = $1",
            [id]
        );

        res.json(`Deleted Course ID ${id}`)
    } catch (err) {
        console.log(err);
    }

});
    
        // Update Course

app.put('/home/:id', async (req, res) => {

    try {
        
        const { id } = req.params;
        const { course_name } = req.body;

        const updated = await pool.query(
            "UPDATE courses SET course_name = $1 WHERE course_id = $2",
            [course_name, id]
        );

        res.json(`Update Course With ID: ${id} => ${course_name}`);

    } catch (err) {
        console.log(err);
    }

});

    // Course Notes

        // Create Course Notes

app.post('/home/:course_id/notes', async (req, res) => {

    try {
        
        const { course_id } = req.params;

        const { note_name } = req.body;

        console.log(note_name);

        const courseNotes = await pool.query(
            "INSERT into notes (course_id, note_name) VALUES($1, $2) RETURNING *",
            [course_id, note_name]
        );
 
    } catch (err) {
        console.log(err);
    }

})

        // Get Course Notes

app.get('/home/:course_id/notes', async (req, res) => {

    try {
        
        const { course_id } = req.params;
        console.log(course_id);

        const courseNotes = await pool.query(
            "SELECT * FROM notes WHERE course_id = $1",
            [course_id]
        );

        console.log(courseNotes.rows);
        res.json(courseNotes.rows);

    } catch (err) {
        console.log(err);
    }

})

        // Delete Course Notes (And Content Within The Note)

        // Update Course Notes Name

    // Note Information

app.listen(5000, () => {
    console.log("SERVER: { LISTENING ON PORT 5000 }");
})

