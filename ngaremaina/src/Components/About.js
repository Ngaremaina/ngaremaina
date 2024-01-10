import { Element } from "react-scroll";

const About = () => {
    return(
        <Element name="about">
             <div class="container mb-5 mt-5">
          <h3 class="text-center mb-4 text-uppercase">About Me</h3>
            <div class="row">
            <div class="col-3 ">
                <img src="https://raw.githubusercontent.com/Ngaremaina/Ngaremaina/main/media/DSC_2751 10X15MNT copy.jpg" class="rounded float-start img-fluid img-thumbnail" alt="Ngare"/>
            </div>
            <div class="col-9">
                <p>I specialize in software development, with a track record of successfully managing both software development teams and projects. My expertise lies in aligning technology solutions with corporate goals, complemented by a deep understanding of software development methodologies. Leading cross-functional teams, I excel in delivering high-quality software within specified timelines and budgets. I am adept at fostering innovation, promoting teamwork, and ensuring the successful execution of projects.</p>    
            </div>
            </div>
        </div>

        </Element>
        
    )

}

export default About