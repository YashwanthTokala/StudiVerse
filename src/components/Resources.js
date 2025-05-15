import React from 'react';
import { Link } from 'react-router-dom';

const resourceData = [
    {
        title: "Course Materials",
        image: "/books1.jpeg",
        link: "/coursemat"
    },
    {
        title: "Reference Materials",
        image: "/books.jpeg",
        link: "/referencemat"
    },
    {
        title: "Previous Papers",
        image: "/papers.jpeg",
        link: "/prevpap"
    }
];

const Resources = ({ darkmode }) => {
    // Common dark/light mode styles
    const containerClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const cardClass = darkmode ? 'bg-dark text-light' : 'bg-light text-dark';
    const buttonClass = darkmode ? 'btn-success text-light' : 'btn-success text-light';

    return (
        <div className={`${containerClass} py-5`} style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className={`row ${containerClass}`}>
                    {resourceData.map((item, index) => (
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
                                    <Link to={item.link} className={`btn btn-sm ${buttonClass}`}>open now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h3>About Resources</h3>
                <ul>
                    <li> <strong>Course Materials</strong>: Includes lecture notes, slides, and syllabus content for easy revision and understanding.</li>
                    <li><strong>Reference Materials</strong>: Covers textbooks, research papers, guides, and additional reading for deeper learning.</li>
                    <li><strong>Previous Year Papers</strong>: Helps students practice and understand exam patterns and frequently asked questions.</li>
                    <li><strong>Organized & Accessible</strong>: All resources are structured for quick access and easy navigation.</li>
                    <li><strong>Updated Content</strong>: Regularly refreshed to align with current academic needs.</li>
                    <li><strong>Supports Self-learning</strong>: Encourages independent study and preparation beyond classroom teaching.</li>
                </ul>
            </div>
        </div>
    );
};

export default Resources;