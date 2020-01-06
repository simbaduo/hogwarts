import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const HousePage = () => {

  const [house, setHouse] = useState({ Name: '', Color: ''})
  const [houseId, setHouseId] = useState(0)
  const [check, setCheck] = useState(false)

  const handleChange = x => ({
    x.persist()
    setHouse(prevHouse => ({
    ...prevHouse,
    []
    }))

  })






  return (
    <div>
      
    </div>
  );
}

export default HousePage;
