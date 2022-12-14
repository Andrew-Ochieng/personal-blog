import Me from '../assets/me.jpeg'
import Resume from '../assets/Resume.pdf'


const About = () => {

    return ( 
        <div className='md:mx-12 mx-6 md:my-24 my-12'>
            <div className='md:flex justify-around'>
                <div>
                    <img className='w-full rounded-full' src={Me} alt="" />
                </div>
                <div>
                    <h3 className="py-3 md:text-lg text-base">Hello there 👋 My name is</h3>
                    <h1 className="py-3 font-extrabold md:text-6xl text-3xl">Andrew Ochieng</h1>
                    <h2 className="py-3 font-extrabold md:text-3xl text-xl">Frontend Software Developer/ UI Designer</h2>
                    <p className="py-3 text-lg">Creating products and services for the 🕸 
                        <span>using HTML5/CSS3, JavaScript, React, Vuejs and Nuxtjs</span>
                    </p>
                    <div className='sm:flex items-center space-x-4 md:space-x-8'>
                        <a href='#contact' className="mt-4 md:text-xl text-base font-semibold border-2 border-pink-500 hover:bg-pink-500 duration-500 px-4 py-3 rounded-lg">
                            Hire Me
                        </a>
                        <a href={ Resume } className="mt-4 md:text-xl text-base font-semibold bg-pink-600 text-white hover:text-gray-900 duration-500 px-4 py-3 rounded-lg">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default About;