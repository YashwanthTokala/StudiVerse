import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({darkmode}) => {

  return (
    <div>
      <div className="container my-3">
        <h1 className='Text-center'>“Welcome to Studiverse – Your Campus Companion”</h1>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Link to='/resources'><img src="/Resources.jpg" class="d-block w-100" id="resources" alt="Resources" style={{ height: '400px', objectFit: 'cover' }} /></Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>Resources</h5>
              </div>
            </div>
            <div class="carousel-item">
              <Link to='/tech'><img src="/tech5.jpeg" class="d-block w-100" alt="Tech" style={{ height: '400px', objectFit: 'cover' }} /></Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>Tech</h5>
              </div>
            </div>
            <div class="carousel-item">
              <Link to='/fest'><img src="/fest1.jpeg" class="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} /></Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>Fests</h5>
              </div>
            </div>
            <div class="carousel-item">
              <Link to='/hackathons'><img src="/hack.png" class="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} /></Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>Hackathons</h5>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container my-5">
          <h2 className="text-center mb-4">About Studiverse</h2>
          <p className="lead text-center">
            Studiverse is your all-in-one digital campus companion designed to empower students by streamlining academic and social collaboration.
          </p>
          <ul className={`list-group list-group-flush mt-4 ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Share Study Materials:</strong> Upload and explore notes, assignments, PDFs, and reference resources for all your courses.
            </li>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Access Previous Papers:</strong> Quickly find and review past question papers for better exam preparation.
            </li>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Browse Reference Resources:</strong> Centralized access to useful academic links, external guides, and topic-based materials.
            </li>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Stay Updated on Events:</strong> Discover upcoming technical fests, hackathons, workshops, and cultural events happening across campus.
            </li>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Connect with Peers & Clubs:</strong> Join campus communities, engage with club activities, and collaborate on projects and initiatives.
            </li>
            <li className={`list-group-item ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <strong>Admin Dashboard Access:</strong> Manage resources, events, and announcements with a dedicated role-based admin interface.
            </li>
          </ul>
        </div>
      </div>
      <footer className={`py-4 mt-5 ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div className="container text-center">
          <h5>Studiverse</h5>
          <p className="mb-1">Your digital campus hub for resources, events, and community connections.</p>
          <div className="my-3">
            <a href="https://instagram.com" className="mx-2 text-decoration-none" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="mx-2 text-decoration-none" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:studiverse@campus.com" className="mx-2 text-decoration-none">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <small>&copy; {new Date().getFullYear()} Studiverse. All rights reserved.</small>
        </div>
      </footer>

    </div>

  )
}

export default Home