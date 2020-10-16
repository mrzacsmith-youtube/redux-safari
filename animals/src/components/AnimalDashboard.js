import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import AnimalForm from './AnimalForm.js'
import AnimalList from './AnimalsList.js'

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([])
  const [updating, setUpdating] = useState(true)

  useEffect(() => {
    axiosWithAuth()
      .get('/api/animals')
      .then((res) => {
        console.log(res.data)
        setAnimals(res.data)
      })
      .catch((err) => console.log(`There is an error fetching.`))
  }, [updating])

  return (
    <div className='dash'>
      <AnimalForm
        animals={animals}
        updateAnimals={setAnimals}
        setUpdating={setUpdating}
        updating={updating}
      />
      <AnimalList animals={animals} />
    </div>
  )
}
