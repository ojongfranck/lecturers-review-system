import React from 'react';
import { SEO } from '../components'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div >
            <SEO
                title='Teach Review'
                description='A web application to review on lecturers'
                name='Home'
                type='Welome'
            />
            <Link to='/login' className="btn">Login</Link>
            <Link to='/signup' className="btn">Signup</Link>
            <Link to='/contact' className="btn">Contact</Link>
            <Link to='/review' className="btn">Review</Link>
        </div>
    )
}