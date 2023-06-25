import React from 'react'
import './About.css'

const About = () => {
  
  const Education = [
    {
      Institution : "Techno International",
      Place: "NewTown",
      Course : "B.Tech in Electrical Engineering",
      Year: "June 2023",
      Score: "Average CGPA: 8.95"
    },
    {
      Institution : "St. Stephen's School",
      Place: "Dum Dum",
      Course : "ISC Class 12",
      Year: "2019",
      Score: "Percentage Obtained - 80%"
    },
    {
      Institution : "St. Stephen's School",
      Place: "Dum Dum",
      Course : "ISCE Class 10",
      Year: "2017",
      Score: "Percentage Obtained - 82.3%"
    }
  ]

  const EducationList = Education.map((item, index) => {
    return (
      <div className="educationList" key={index}>
        <div className="institution-place">{item.Institution}, {item.Place}</div>
        <div className="course-year">{item.Course}, {item.Year}</div>
        <div className="score">{item.Score}</div>
      </div>
    )
  })

  // const Links = [
    
  // ]

  // const LinksList = Links.map((item, index) => {

  // })


  return (
    <div className='container content'>
      <div className="heading">About Me</div>
      <div className="paragraph">
        <span>“Welcome to my world of code and creativity! I am an aspiring Software Developer and Full Stack Developer, passionate about crafting innovative solutions and pushing the boundaries of technology. With a keen eye for aesthetics and a love for clean and functional design, I strive to create remarkable user experiences that leave a lasting impression.</span><br />
        <span>My tech stack is a powerful arsenal that includes React, JavaScript, Express, Node.js and MongoDB. Leveraging the MERN stack. I built robust and scalable web applications that seamlessly integrate the front-end and back end. Driven by my passion for both functionality and aesthetics, I also delve into the world of UI/UX design. Using tools like Figma, I create visually stunning and intuitive interfaces that captivate users and enhance their overall experiences.</span><br />
        <span>I'm also well-versed in programming languages like C, C++ and Java, harnessing their versatility to solve problems and optimizing performance. With a solid foundation in Data Structure and Algorithms, I tackle challenges head-on and develop efficient solutions that stand the test of time.</span><br />
        <span>My journey as a developer has been an exhilarating one, filled with continuous learning, collaborating. Whether I'm working on a personal project or collaborating on a team, I bring a meticulous approach to every endeavour. I enjoy immersing myself in the latest industry trends, constantly seeking opportunities to expand my skill set and stay at the forefront of technological advancements.</span><br />
        <span>If you're searching for a dedicated and innovative Software Developer with a flair for Full Stack Developer, I would love to connect. Let's transform ideas into reality and shape the future together.</span><br />
        <span>Thank you for visiting my portfolio website.”</span>
      </div>
      <div className="grid-container content">
        <div className="small small-1">
          <div className="heading">Education</div>
          <div className="education">
            {EducationList}
          </div>
        </div>
        <div className="small small-2">
          <div className="heading">Skills</div>
          <div className="description">

          </div>
        </div>
        <div className="large">
          <div className="heading">Links</div>
          <div className="description">

          </div>
        </div>
      </div>
      <button className="button-container">
        {/* <a href="">Download Resume</a> */}
      </button>
    </div>
  )
}

export default About