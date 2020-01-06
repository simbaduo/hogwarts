import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const HomePage = () => {
  const [value, setValue] = useState(false) //why do we use false here?
  const [temp, setTemp] = useState([])
  const [house, setHouse] = useState([])
  const [student, setStudent] = useState([])

  const Pony = ref => {
    setValue(true)
    setTemp(ref)
  }

  useEffect(() => {
    getAll()
    console.log(house)
    console.log(student)
  }, []) //why do we set an empty array again?

  const getAll = async () => {
    const response = await axios.get('https://localhost:5001/api/Student')
    setStudent(response.data)
    const resp = await axios.get('https://localhost:5001/api/House')
    setHouse(response.data)
  }
  return (

    <>
    {value && <Redirect to={`/${temp}`}/>}
      {console.log(student)}
      {console.log(student)}

      <button onClick={() => Pony('Student')}>Create Student</button>
      <button onClick={() => Pony('House')}>Create House</button>

      <h1>Hogwarts Students</h1>
      {student.map(xyz => {
        return <div>{student.Name}</div>
      })}
    </>
  )
}

export default HomePage
