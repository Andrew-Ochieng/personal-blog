import Me from '../assets/me.jpeg'

const About = () => {
    

    return ( 
        <div className='md:m-16 m-8'>
            <div className='md:flex justify-around'>
                <div>
                    <img className='w-full rounded-full' src={Me} alt="" />
                </div>
                <div>
                    <h3 class="py-3 md:text-lg text-base">Hello there 👋 My name is</h3>
                    <h1 class="py-3 font-extrabold md:text-6xl text-3xl">Andrew Ochieng</h1>
                    <h2 class="py-3 font-extrabold md:text-3xl text-xl">Frontend Software Developer/ UI Designer</h2>
                    <p class="py-3 text-lg">Creating products and services for the 🕸 
                        <span>using HTML5/CSS3, JavaScript, React, Vuejs and Nuxtjs</span>
                    </p>
                    <button class="mt-4 md:text-xl text-base font-semibold bg-pink-700 hover:text-[#1a2238] duration-500 px-4 py-3 rounded-lg flex items-center justify-between">
                        Hire Me
                        <i class="fa fa-chevron-right ml-4"></i>
                    </button>
                </div>
            </div>
            
        </div>
     );
}
 
export default About;