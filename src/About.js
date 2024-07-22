import NavBar from "./NavBar";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
function About()
{
	const nav = useNavigate();
	useEffect(()=>{
		let un = localStorage.getItem("username");
		if(un == null)
			nav("/login")
	},[]);


return(
<>
<center>
<NavBar/>
<h1>About Page</h1>

</center>
</>
);
}
export default About;