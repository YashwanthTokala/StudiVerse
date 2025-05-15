import React from 'react'

const paperData = [
    {
        title: "Mid Semester - 1",
        image: "/books1.jpeg",
        link: "/Physics.pdf"
    },
    {
        title: "Mid Semester - 2",
        image: "/books.jpeg",
        link: "/Physics.pdf"
    },
    {
        title: "Semester",
        image: "/papers.jpeg",
        link: "/Physics.pdf"
    }
];

const PrevPap = ({ darkmode }) => {
    const containerClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const cardClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const buttonClass = darkmode ? 'btn-success text-light' : 'btn-success text-light';
    return (
        <>
            <h1 className='text-center'>Reference Materials</h1>
            <div className={`${containerClass} py-5`} style={{ minHeight: '100vh' }}>
                <div className="container">
                    <div className={`row ${containerClass}`}>
                        {paperData.map((item, index) => (
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
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${buttonClass}`}>open now</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrevPap