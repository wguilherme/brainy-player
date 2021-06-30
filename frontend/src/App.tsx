import React, { useEffect, useState } from 'react';
import dirTree from "directory-tree"
import api from "./services/api"

function App() {

  const [courses, setCourses] = useState<any>(false)

  useEffect(() => {
    async function filterTree() {

      const courses = await api.get("/courses")
      setCourses(courses.data)
      console.log(courses.data)
    }
    filterTree()
    return () => {
      console.log("unmount component")
    }
  }, [])
  return (
    <main>
      <h2>Meus cursos</h2>
      <ul>

        {courses ? courses.children.map((course: any, index: any) => (<li key={index}>
          Curso: {course.name}
          {console.log(course.children)}





          {!course.children ? <p>Carregando</p>
            : (

              course.children.map((course: any) => <li>{course.name}</li>
              ))
          }

        </li>))
          : <h2>Carregando cursos</h2>
        }

      </ul>



    </main >
  );
}

export default App;
