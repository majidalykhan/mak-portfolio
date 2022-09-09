import React from "react";

import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" class="resume">
      <h5>What I Have Done</h5>
      <h2>My Resume</h2>

      <div className="container resume__container">
        <div class="resume__education">
          <h3 class="resume-title">Education</h3>

          <div class="resume-item">
            <h4>Bahria University Islamabad, Pakistan</h4>
            <h5>2016-2020</h5>
            <p>
              <em>Bachelor of Science in Information Technology</em>
            </p>
            <p>Core Computer Sciences, Electives and Institutional Courses</p>
          </div>

          <div class="resume-item">
            <h4>Askaria College Rawalpindi, Pakistan</h4>
            <h5>2013-2015</h5>
            <p>
              <em>F.Sc Pre-Engineering</em>
            </p>
            <p>Mathematics, Chemisty, Physics</p>
          </div>
        </div>

        <div class="resume__experience">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Android Developer</h4>
            <h5>Aug 2020 - Present</h5>
            <p>
              <em>Fiverr</em>
            </p>
            <p>
              Worked on application development, Augmented Reality, platform and
              architecture of suite of apps. Worked as an android developer by
              integrating APIs like Google AR Core and Firebase.
            </p>
          </div>
          <div class="resume-item">
            <h4>Try-on Glasses</h4>
            <h5>2020</h5>
            <p>
              <em>Outsource</em>
            </p>
            <p>
              An android application that applies 3d models of glasses on user's
              face. User can try on different pair of glasses with realtime face
              tracking.
            </p>
          </div>

          <div class="resume-item">
            <h4>PhotoFilters</h4>
            <h5>2019-2020</h5>
            <p>
              <em>Project</em>
            </p>
            <p>
              This is an Android application called PhotoFilters which include
              two types of photo filters i.e. Augmented faces and Artistic Style
              Transfer. Augmented Reality Face Filters are developed using
              Google AR Core. I have designed about 22 custom filters which
              include Glasses, Hats, Mustache and Beard etc and integrated them
              in my application. Whereas Artistic style transfer help you create
              exciting image with style you like. It need two input images i.e.
              one representing the artistic style and one representing the
              content.
            </p>
          </div>

          <div class="resume-item">
            <h4>Waves Measuring Dataset Analysis</h4>
            <h5>2019</h5>
            <p>
              <em>Project</em>
            </p>
            <p>
              Worked on preprocessing of dataset to exclude errors or null
              values. Used Linear Regression to train and test data for
              prediction model. Python, Matplotlib, Pandas, Jupyter Notebook.
            </p>
          </div>

          <div class="resume-item">
            <h4>Continuous Learning. </h4>
            <p>
              Took online courses, read book chapters, videos and engineering
              articles, build projects to learn about web & android
              applications, augmented reality, 3d models and polyglot
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;