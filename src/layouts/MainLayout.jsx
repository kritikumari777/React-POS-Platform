import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({ children }) {
    return (
        <div>
            <header>
                <nav className="navbar navbar-light bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand text-light">KRITI-POS</Link>
                    </div>
                </nav>
            </header>
            <main>
                <div className='container mt-3'>
                    {children}
                </div>
                <ToastContainer />
                <img className='p-5 mb-4 mt-5 ml-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfuwwWjG-0QYtYJDB2iiejPvF_mSo6gGsNg&usqp=CAU" />
            </main>
            <footer>
                <nav className="navbar fixed-bottom navbar-light bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand text-light ">   <ul>
                            <p>Copyright &copy; 2023 Kriti Inc. All rights reserved.</p>
                        </ul></Link>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default MainLayout
