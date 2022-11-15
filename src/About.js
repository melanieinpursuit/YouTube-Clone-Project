import MyImage from './Pursuit 9.2 - Melanie Gonzalez 119.jpg'
import MyImage2 from './D0CD96CA-567D-43BB-9B5B-CF4ED1F647A7IMG_3058.jpg'
import './About.css'

export default function About () {
    return (
       <div>
        <h1>About This Project</h1>
        <p>For this project, we were creating a clone of YouTube where the user should be able to search for specific videos by using keywords which would output the videos that match the keywords.</p>
           <h1>About The Developers</h1>
           <aside>
            <img src={MyImage} alt="Melanie's Profile"></img>
            <h2>Melanie Gonzalez</h2>
            <p>I am an upcoming Full Stack Web Developer currently training as a Pursuit Fellow. 
                My current goal is to become a developer for a video game company and help create incredible gameplay as well as create new, relatable and diverse stories for those in marginalized communities, such as the LGBTQ+ community, women, women of color, disabled people, and so many others who don't have much representation in the gaming industry. </p>
           </aside>
           <aside>
            <img src={MyImage2} alt="Yianna's Profile"></img>
            <h2>Yianna Richey</h2>
            <p>
            I am a Full Stack Software Engineer Fellow, studying at Pursuit. I am currently learning Javascript, CSS, and HTML, React, Node.js, and etc. I am pursuing Software Engineering due to it's alignment with my dream career to become a Front End Developer and Web Designer.

            My passion is for Web Development and Design as I value creative expression and user experience. I look forward to building connections with anyone in various fields as well as learning more programming languages.

            I am open to new projects and collaborations! I am interested in creating, and problem solving! I look forward to sharing my upcoming projects and journey!
            </p>
           </aside>
       </div>
    )
    
        
}