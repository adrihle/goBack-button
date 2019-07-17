import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return(
        <div>
            <h3 className='container text-white pt-3'>Main Page</h3>
            <Link to='/second'>To Second Page</Link>
        </div>
    );
}