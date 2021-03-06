import React from 'react'

function Banner({ children, title, subtitle }) {
    return (
        <div className="banner">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
