const express = require('express');
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

})

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

})

        // Delete Course (And Content Within Course)
    
        // Update Course

    // Course Notes

        // Create Course Notes

        // Get Course Notes

        // Delete Course Notes (And Content Within The Note)

        // Update Course Notes Name

    // Note Information

app.listen(5000, () => {
    console.log("SERVER: LISTENING ON PORT {5000}");
})

