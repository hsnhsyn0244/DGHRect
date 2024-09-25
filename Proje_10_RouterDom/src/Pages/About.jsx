import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link style={{ marginRight: "10px" }} to="employee">Çalışanlar Hakkında</Link>
            <Link to="company">Şirket Hakkında</Link>
            {/* outlet yıkarıdakı child olan iki link in render olmasını sağlayan bir routet tag i dir */}
            <Outlet />
        </div>
    )
}

export default About