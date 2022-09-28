import { Link } from 'react-router-dom'


const Navbar = () => {
    // const navlinks = ['Home', 'About', 'Create']
    
    
    return ( 
            <div className="navbar-container">
                <nav className='bg-pink-500 py-4'>
                    <div className="navbar flex justify-around items-center ">
                        <div>
                            <h1 className='md:text-3xl text-2xl uppercase font-semibold '>The Wreat</h1>

                            
                        </div>

                        <div>
                            <ul className='flex items-center'>
                                <li className='md:mx-8 '>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='md:mx-8 '>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li className='md:mx-8 '>
                                    <Link to='/create'>Create</Link>
                                </li>
                                {/* {
                                    navlinks.map((navlink) => (
                                        <div>
                                            <li key={navlink} className='md:mx-8 '>
                                                <Link to='/'>{navlink}</Link>
                                            </li>
                                        </div>
                                    ))
                                } */}
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>

     );
}
 
export default Navbar;