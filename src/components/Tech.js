import React, { useState } from 'react'

const Tech = ({ darkmode }) => {
    const containerClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const cardClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const buttonClass = darkmode ? 'btn-success text-light' : 'btn-success text-light';
    const EventData = [
        {
            title: "Event-1",
            image: "/tech1.jpeg",
            date: "23-04-2025",
            venue: "AB-1",
            time: "11:00 am"
        },
        {
            title: "Event-2",
            image: "/tech2.jpeg",
            date: "13-05-2025",
            venue: "AB-2",
            time: "5:00 pm"
        },
        {
            title: "Event-3",
            image: "/tech3.jpeg",
            date: "26-05-2025",
            venue: "AB-1",
            time: "2:00 pm"
        }
    ];
    const CodeData = [
        {
            title: "CodeCrash",
            image: "/tech1.jpeg",
            date: "26-05-2025",
            venue: "CB",
            time: "3:00 pm"
        },
        {
            title: "Engineering Expo",
            image: "/tech2.jpeg",
            date: "26-05-2025",
            venue: "AB-2",
            time: "6:00 pm"
        },
        {
            title: "GeekForGeek",
            image: "/tech3.jpeg",
            date: "26-05-2025",
            venue: "CB",
            time: "10:00 am"
        }
    ];
    const [showForm, setShowForm] = useState(false)
    const handleImageClick = () => {
        setShowForm(true)
    }
    const handleClose = () => {
        setShowForm(false)
    }
    const registerForm = () => {
        return (
            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Event Registration</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Registration number</label>
                                    <input type="text" className="form-control" id="text" />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container my-3">
                <h2>Upcoming Tech Events</h2>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/tech5.jpeg" className="d-block w-100" alt="event-1" style={{ height: '400px', objectFit: 'cover' }} onClick={handleImageClick} />
                        </div>
                        <div className="carousel-item">
                            <img src="/fest1.jpeg" className="d-block w-100" alt="event-2" style={{ height: '400px', objectFit: 'cover' }} onClick={handleImageClick} />
                        </div>
                        <div className="carousel-item">
                            <img src="/tech2.jpeg" className="d-block w-100" alt="event-3" style={{ height: '400px', objectFit: 'cover' }} onClick={handleImageClick} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {showForm && registerForm()}
                <h2 className='my-2'>Events</h2>
                <div className="container">
                    <div className={`row ${containerClass}`}>
                        {EventData.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className={`card my-3 shadow-sm ${cardClass}`} style={{ width: '18rem' }}>
                                    <div className="d-flex justify-content-center mt-2">
                                        <img
                                            src={item.image}
                                            className="card-img-top"
                                            alt={item.title}
                                            style={{ width: '225px', height: '200px' }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>Date: {item.date} Time: {item.time}</p>
                                        <p>Venue: {item.venue}</p>
                                        <button onClick={handleImageClick} className={`btn btn-success btn-sm ${buttonClass}`}>Register now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className='my-2'>Coding Competitions & Project Expo</h2>
                <div className="container">
                    <div className={`row ${containerClass}`}>
                        {CodeData.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className={`card my-3 shadow-sm ${cardClass}`} style={{ width: '18rem' }}>
                                    <div className="d-flex justify-content-center mt-2">
                                        <img
                                            src={item.image}
                                            className="card-img-top"
                                            alt={item.title}
                                            style={{ width: '225px', height: '200px' }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>Date: {item.date} Time: {item.time}</p>
                                        <p>Venue: {item.venue}</p>
                                        <button onClick={handleImageClick} className={`btn btn-success btn-sm ${buttonClass}`}>Register now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tech