import React from 'react'
import CardLayout from './CardLayout'
import AddNote from './AddNote'

export default function Home() {
  return (<>
    <div className="container">
      <AddNote/>
              
              <CardLayout></CardLayout>
        </div>
        </>
  )
      
       
}
