import { useState } from "react";


const About = () => {
    const [name, setName] = useState("Martial")
    const [random, setRandom] = useState(null)
    const [loveStatus, setLoveStatus] = useState("")


    const showName = () => {
        let newName = 'Andrew'
        setName(newName)
    }

    // love calculator function
    const showRandom = () => {
        let randomNumber = Math.floor(Math.random() * 10)
        setRandom(randomNumber)

        //tenary operator (else if)
        randomNumber <= 4 ? setLoveStatus('You guys are not a match!') : randomNumber <= 7 ? setLoveStatus('You can try something out!') : setLoveStatus('You two are a good match :)')
        
    }




    return ( 
        <div>
            <button 
                className="bg-green-500 m-8 p-4" 
                onClick={showName}  
                >
                Click Me
            </button>

            <button 
                className="bg-green-500 m-8 p-4" 
                onClick={(showRandom)}  
                >
                Click Me Again
            </button>

            <p>Random name is <span className="text-pink-500 font-semibold">{ name }</span></p>
            <p>Random number is 
                <span className="text-pink-500 font-semibold"> { random } </span> so 
                <span className="text-pink-500 font-semibold"> { loveStatus } </span>
            </p>


        </div>
     );
}
 
export default About;