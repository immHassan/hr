import React from 'react'

export default function Box({img,count,name}) {
    return (
        <div className="single_quick_activity d-flex">
        <div className="icon">
            <img src={img} alt=""/>
        </div>
        <div className="count_content">
            <h3><span className="counter">{count}</span> </h3>
            <p>{name}</p>
        </div>
    </div>
    )
}
