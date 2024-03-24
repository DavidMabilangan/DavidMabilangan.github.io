import CustomNavbar from "../components/CustomNavbar";
import "../css/global.css"
export default function Home() {
  return (
     <>
       <CustomNavbar />
       <div className="main">
            <div className="container" id="hero">
                <div className="box container mx-auto">
                <h1>I'm David</h1>
                <h2>Web Developer</h2>
                <p>Fresh graduate in information technology with experience in front-end web development during internship and freelancing. Now seeking an entry-level position as a front-end web developer or any IT related role.</p>
                </div>
                
            </div>
         </div>
     </>
  );
}
