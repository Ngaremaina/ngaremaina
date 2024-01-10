import { Element } from 'react-scroll'

const Home = () => {
    return (
        <Element name="home">
            <div className="container mb-5">
                <div className="row">
                <div className="col-8 align-items-center d-flex justify-content-center my-auto">
                    <h3><span>Hi,</span> I'm Owen Maina <p>Software Developer</p> </h3>
                </div>
                <div className="col-4">
                    <img src="https://raw.githubusercontent.com/Ngaremaina/Ngaremaina/main/media/DSC_2753 SC copy.jpg" class="rounded float-start img-fluid img-thumbnail" alt="Ngare"/>
                </div>
            </div>
        </div> 
        </Element>
    )

}

export default Home