import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
function StudentDashboard() {
    return (
        <div>
            <Navbar />
            <nav>
                <h1 className='text-center text-3xl md:6xl text-red-700 font-bold'>This is student Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt, 
                    excepturi repellendus delectus incidunt sit asperiores saepe ipsa adipisci quo? 
                    Doloribus saepe tempora officiis iusto, nam asperiores inventore quam aut.</p>
            </nav>

            <Footer />
        </div>
    )
}

export default StudentDashboard
