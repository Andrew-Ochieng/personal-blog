import Me from '../assets/me.jpeg'
import Resume from '../assets/Resume.pdf'


const About = () => {

    return ( 
        <div className='md:mx-12 mx-6 md:py-32 py-16'>
            <div className='grid sm:grid-cols-2 md:gap-16 gap-8'>
                <div className=''>
                    <img className='rounded-full' src={Me} alt="" />
                </div>
                <div>
                    <h3 className="py-3 md:text-lg text-base">Hello there 👋 My name is</h3>
                    <h1 className="py-3 font-extrabold md:text-6xl text-3xl">Andrew Ochieng</h1>
                    <h2 className="py-3 font-extrabold md:text-3xl text-xl">Software Developer | Graphics/UI/UX Designer</h2>
                    <p className="py-3 text-lg">Creating products and services for the 🕸 
                        <span>using HTML5/CSS3, JavaScript, React, Vuejs and Nuxtjs</span>
                    </p>
                    <div className='sm:flex items-center space-x-4 md:space-x-8'>
                        <a href='#contact' className="btn">
                            Hire Me
                        </a>
                        <a href={ Resume } target='_blank' rel='noreferrer' className="btn">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
     );
}
 
export default About;