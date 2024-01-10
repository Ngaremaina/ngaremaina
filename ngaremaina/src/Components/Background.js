import { Element } from "react-scroll";


const Background = () => {    
    return(
        <Element name="background">
            <h3 class="text-center mb-4 text-uppercase">My Background</h3>
            <ul class="nav nav-tabs mb-5 d-flex justify-content-center" id="background" role="tablist">
                <li class="nav-item" role="presentation">
                <button class="nav-link active" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="true">Education</button>
                </li>
                <li class="nav-item" role="presentation">
                <button class="nav-link" id="experience-tab" data-bs-toggle="tab" data-bs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Work Experience</button>
                </li>
                <li class="nav-item" role="presentation">
                <button class="nav-link" id="organization-tab" data-bs-toggle="tab" data-bs-target="#organizations" type="button" role="tab" aria-controls="organizations" aria-selected="false">Organizations</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="achievements-tab" data-bs-toggle="tab" data-bs-target="#achievements" type="button" role="tab" aria-controls="achievements" aria-selected="false">Achievements</button>
                </li>
                <li class="nav-item" role="presentation">
                <button class="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
                <h5>Software Engineering</h5>               
                <h6>Moringa School</h6>
                <p>02/2023 - 08/2023</p><br/>
                <p>Graduating in November</p>

                <h5>BSc in Information Technology</h5>
                <h6>Jomo Kenyatta University of Agriculture and Technology</h6>
                <p>2019 - 2023</p>
                <p>Grade: Second Class Honors (Upper Division)</p>
                
            </div>
            <div class="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                <h5>Software Developer</h5>
                <p>iTalanta</p>
               
                <h6><span class="text-uppercase">Period:</span> 27/9/2023 - Present</h6>
                <p>Tasks</p>
                <ul>
                  <li>Collaborating with a team of software developers to design, code, test, and debug web applications.</li>
                  <li>Successfully delivering the project within the established timeline and meeting the expected project objectives.</li>
                  <li> Played a key role in the project's success by contributing expertise in front-end development utilizing HTML and CSS. </li>
                  <li>Maintaining an open and effective communication within the development team and with other stakeholders by documenting project status, changes, and issues.</li>
                  <li>Employing Git to coordinate codebase management, enabling efficient code sharing and collaboration.</li>
                  <li>Successfully identifying and addressing software issues by creating well-documented pull requests, effectively contributing to the resolution complex problems within the development projects.</li>
                

                </ul>

                <br/>
                <h5>Attache</h5> 
                <p>Civil Registration Services</p>
                <p><span class="text-uppercase">Address:</span> Hass Plaza, Lower Hill Road, Nairobi</p>
                <h6><span class="text-uppercase">Period:</span> 28/12/2021 - 25/03/2022</h6>
                <p>Tasks</p>
                <ul>
                    <li>Investigation and recognition of technological issues that arise in computing environments.</li>
                    <li>Identifying and responding to end-user needs in order to manage computer systems.</li>
                    <li>Analysis and implementation of a productive network architecture for the company.</li>
                    <li>Software component identification and maintenance for various departments' use.</li>
                    <li>Using security tools and technologies to safeguard data safely within the system.</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="organizations" role="tabpanel" aria-labelledby="organization-tab">
                <p>Google Developers Student Club</p>
            </div>
            <div class="tab-pane fade" id="achievements" role="tabpanel" aria-labelledby="achievements-tab">
                <h4>Myner Gameplay</h4>
                <p>Welcome to <a href="https://www.youtube.com/@mynergameplay"><span>Myner Gameplay</span></a>, the world's top gaming YouTube channel, which showcases the most outstanding gameplays. Every player will enjoy the channel's excellent and engaging material. In our effort to provide you with top-notch content, we stop at nothing.</p>
              
            </div>
            <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
               <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Sqlalchemy</li>
               </ul>
            </div>
        </div>
        </Element>
        
    )

}

export default Background