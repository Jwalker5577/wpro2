import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I have a passion for building projects.  I am here to assist with projects big and small.  I have a good background in HTML, CSS, Javascript, and React.  I use this background in web development to assist with me working on projects related to Shopify and Wordpress.   
                </p>
                <p>
                Hi, my name is Jimmy W. I'm a full-stack web developer with experience on various projects. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started!
                </p>
                
            </div>
        </div>
    </section>
  )
}

export default About