import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
    return (
        <MainLayout>

            <div className='bg-light p-5 mt-4 rounded-3' class='bgimg'>
                <h1>Welcome to the POS for buiness</h1>
                <p>Different types of fruits are available at a suitable price</p>
                <p>If you have an issue, you can contact 9801116314 anytimes</p>
                <Link to='/pos' className='btn btn-dark text-light'>Click here to buy products</Link>
            </div>
        </MainLayout>
    )
}

export default HomePage
