import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to EduTech</h1>
        <p>Your gateway to quality education</p>
      </header>
      <main>
        <section className="featured-courses">
          <h2>Featured Courses</h2>
          {/* Display featured courses here */}
          <div className="course-list">
            <div className="course-card">
              <h3>Course Name 1</h3>
              <p>Description of the course</p>
              <Link to="/courses/course1">Learn More</Link>
            </div>
            <div className="course-card">
              <h3>Course Name 2</h3>
              <p>Description of the course</p>
              <Link to="/courses/course2">Learn More</Link>
            </div>
            {/* Add more course cards here */}
          </div>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>
            EduTech is committed to providing high-quality education to
            everyone. Our platform offers a wide range of courses in various
            subjects, taught by experienced professionals.
          </p>
          <Link to="/about">Learn More</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 EduTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;