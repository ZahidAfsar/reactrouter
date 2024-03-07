import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomePageComponent = () => {

    // useNavigate is react-router-doms method of changing urls
    const navigate = useNavigate()

    const handlePageChange = () => {
        navigate('/jacoozzi')
    }

  return (
    <div className='d-flex justify-content-center'>
      <h1>This is our Home Page</h1>
      <Button variant="dark" onClick={handlePageChange} >To Jacoozzi's Page</Button>
    </div>
  )
}

export default HomePageComponent
