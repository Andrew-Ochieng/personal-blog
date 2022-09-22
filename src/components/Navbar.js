import { Link } from 'react-router-dom'


const Navbar = () => {
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
                                    <Link to='/create'>Create</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>

     );
}
 
export default Navbar;