import React from 'react';
import { useState } from 'react';
import './App.css';
import { Student, AppName } from './interfaces'
import { DisplayData } from './DisplayData';
import { studentList } from './data';

function App({ name }: AppName) {
  const [student, setStudent] = useState<Student | null>(null)

  const addStudent = () => {
    setStudent(
      {
        name: "Mark",
        surname: "Zuckerberg",
        level: "Postgraduate",
        age: 20
      }
    )
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <p><b>{student?.name} {student?.surname}</b></p>
      {student?.level === "Undergraduate" &&
        <p><b>Age: {student.age}</b></p>
      }
      <button onClick={addStudent}>Add Student</button>
      <h3>List of students</h3>
      <div>
        <DisplayData items={studentList} />
      </div>
    </div>
  );
}

export default App;
