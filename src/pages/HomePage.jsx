import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
    return (
        <MainLayout>

            <div className='bg-light p-5 mt-4 rounded-3' class='bgimg'>
                <h1>Welcome to the POS for buiness</h1>
                <p>Online Shopping Site for Fashion & Lifestyle in India.</p>
                <p>Different types of merchandise are available at a suitable price,
                    Flat 10% discount on min spends of Rs.4,000.Max disc of Rs.1,000 on selected bank cards.</p>
                <p> Shop your favorites at season's biggest sale, up to 70% off only at Shoppers Stop.</p>
                <p>If you have an issue, you can contact 9801116314 anytimes.</p>
                <Link to='/pos' className='btn btn-dark text-light'>Click here to sell products</Link>
            </div>
        </MainLayout>
    )
}

export default HomePage
