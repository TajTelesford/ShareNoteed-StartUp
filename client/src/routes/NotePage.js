import React from 'react'
import { useParams } from 'react-router-dom';
import TextEditor from '../components/TextEditor/TextEditor';
import NavBar from '../NavBarComponents/NavBar';

const NotePage = () => {

  const {course_id, note_id, note_name} = useParams();
  

  return (
    
    <div>
       <NavBar />
        <TextEditor />
    </div>
  )
}

export default NotePage;