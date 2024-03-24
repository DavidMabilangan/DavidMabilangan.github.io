import "../css/navbar.css";

export default function navbar(){
    return(
        <>
         <header>
            <div className="container mx-auto">
                <h5><a href="#"><img src="../../public/images/Logo.png" alt="Logo" /></a></h5>
                <ul>
                    <li className="active">Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <img src="/public/images/Logo.png" alt="Logo" height={100} width={100}/>
            </div>
         </header>
        </>
    );  
}