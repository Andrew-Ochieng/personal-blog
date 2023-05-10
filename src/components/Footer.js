import Subscribe from "./Subscribe";

const Footer = () => {
    return ( 
        <div>
            <Subscribe />
            <footer className="bg-gray-900 ">
                <div className="md:p-16 p-6 md:flex justify-around "> 
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h1 className="md:text-xl text-lg font-semibold uppercase text-green-500">Tech Talk</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="space-x-4 text-xl">
                            <i className="hover:text-green-500 fa fa-facebook"></i>
                            <i className="hover:text-green-500 fa fa-instagram"></i>
                            <i className="hover:text-green-500 fa fa-linkedin"></i>
                            <i className="hover:text-green-500 fa fa-github"></i>
                        </div>
                    </div>
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h3 className="font-medium text-green-500 md:text-xl text-lg">About</h3>
                        <ul className="space-y-1">
                            <li>Web Dev</li>
                            <li>Mobile Dev</li>
                            <li>UI/UX Design</li>
                            <li>Graphics Design</li>
                            <li>Cyber Security</li>
                        </ul>
                    </div>
                    <div className="text-gray-100 space-y-2 md:my-0 my-6">
                        <h3 className="font-medium text-green-500 md:text-xl text-lg">Continents</h3>
                        <ul className="space-y-1">
                            <li>Africa</li>
                            <li>Asia</li>
                            <li>North America</li>
                            <li>South America</li>
                            <li>Europe</li>
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