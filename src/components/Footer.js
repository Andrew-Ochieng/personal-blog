import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <Subscribe />
            <footer className="bg-gray-900 ">
                <div className="md:p-16 p-6 md:flex justify-around md:text-base text-sm"> 
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <Link to='/' className="logo font-bold md:text-2xl text-lg text-green-500">
                            TechShare
                        </Link>
                        {/* <h1 className="md:text-xl text-lg font-semibold uppercase text-green-500">Tech Talk</h1> */}
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="space-x-4 text-xl">
                            <i className="hover:text-green-500 fa fa-facebook"></i>
                            <i className="hover:text-green-500 fa fa-instagram"></i>
                            <i className="hover:text-green-500 fa fa-linkedin"></i>
                            <i className="hover:text-green-500 fa fa-github"></i>
                        </div>
                    </div>
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h3 className="font-medium text-green-500 md:text-xl text-lg">Categories</h3>
                        <ul className="space-y-1">
                            <li>Web Dev</li>
                            <li>UI/UX Design</li>
                            <li>Data Science</li>
                            <li>Graphics Design</li>
                            <li>Dev Ops</li>
                        </ul>
                    </div>
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h3 className="font-medium text-green-500 md:text-xl text-lg">Frontend Topics</h3>
                        <ul className="space-y-1">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Tailwindcss</li>
                            <li>Headless CMS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h3 className="font-medium text-green-500 md:text-xl text-lg">Support</h3>
                        <ul className="space-y-1">
                            <li>Contact</li>
                            <li>Help</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;