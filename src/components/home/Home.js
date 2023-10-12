import React from 'react'
import './home.css';

export default function Home({setLoginUser}) {
  return (
    <>
    <div className='homePage'>
    <h2>Welcome to homePage</h2>
    <div className='button' onClick={ () => setLoginUser({})}>Logout</div>
    </div>
    </>
  )
}
