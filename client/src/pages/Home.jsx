import React from 'react';
import { SEO } from '../components'
import { Link } from 'react-router-dom';
import './Home.css'
export default function Home() {
    return (
        <div className="all">
        <div className='nav'>
            <SEO
                title='Teach Review'
                description='A web application to review on lecturers'
                name='Home'
                type='Welome'
            />
            <p className='text-3xl font-bold'>Teach Review</p>
            <div className="right">

            <Link to='/Home' className="text-2xl font-semibold">Home</Link>
            <Link to='/login' className="text-2xl font-semibold">Login</Link>
            <Link to='/signup' className="text-2xl font-semibold">Signup</Link>

            {/* <Link to='/#contact' className="text-center text-3xl font-semibold mb-12">Contact</Link> */}
            <Link to='/review' className="text-2xl font-semibold">Review</Link>
            <Link to='/about' className="text-2xl font-semibold">About</Link>
            {/* <Link to='/#contact' className="btn">contact</Link> */}
          
            </div>
            
        </div>

        <div className="hero">
            <p>ojong</p>
        </div>

        <footer>
            <p>franck</p>
        </footer>
        </div>
    )
}