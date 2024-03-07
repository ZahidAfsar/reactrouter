import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const JacoozziPageComponent = () => {
    
    const navigate = useNavigate()

    const handlePageChange = () => {
        navigate('/')
    }

  return (
    <div className='d-flex justify-content-end' >
      <h1>This is Jacoozzi's Page :3</h1>
      <Button variant="danger" onClick={handlePageChange}>Go to Home Page</Button>{' '}
    </div>
  )
}

export default JacoozziPageComponent
