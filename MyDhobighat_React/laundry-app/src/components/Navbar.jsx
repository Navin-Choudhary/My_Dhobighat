import Dhobighat_logo from '../assets/Dhobighat_logo.png'


// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-14 py-6 border-b bg-white">

//       {/* Logo */}
//       <div className="text-2xl font-bold text-blue-900">
//         <img src={Dhobighat_logo} alt="DhobiGhat Logo" className="h-12" />
//       </div>

//       {/* Menu */}
//       <ul className="flex gap-10 text-blue-900 font-semibold">
//         <li className="cursor-pointer hover:text-blue-600">
//           Home
//         </li>

//         <li className="cursor-pointer hover:text-blue-600">
//           Services
//         </li>

//         <li className="cursor-pointer hover:text-blue-600">
//           Contact
//         </li>
//       </ul>

//       {/* Button */}
//       <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
//         Book Now
//       </button>

//     </nav>
//   )
// }








// import { useState, useEffect } from "react"
// import { useNavigate } from 'react-router-dom'
// import { supabase } from "../lib/supabase";

// function Navbar() {

// const navigate = useNavigate()

// const [menuOpen,setMenuOpen] = useState(false)

// async function handleBookNow(){
// const {data:{user}} = await supabase.auth.getUser()

// if(user){
// navigate("/book")
// }
// else{
// navigate("/login")
// }
// }

// return (
// <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 md:px-12 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">

// {/* LOGO IMAGE HERE */}
// <div className="flex items-center cursor-pointer">
// <img src={Dhobighat_logo} alt="DhobiGhat Logo" className="h-12" />
// </div>


// <nav className="hidden md:flex space-x-8 items-center font-semibold text-[#1e3a8a]">
// <a href="#">Home</a>
// <a href="#">Services</a>
// <a href="#">Contact</a>
// </nav>


// <div className="flex items-center space-x-4">

// <button 
// onClick={() => {
//   handleBookNow();
//   setMenuOpen(false);
// }}
// className="bg-[#243c7c] text-white px-6 py-2.5 rounded hidden sm:block">
// Book now
// </button>


// <button
// onClick={()=>setMenuOpen(!menuOpen)}
// className="md:hidden"
// >
// ☰
// </button>

// </div>


// {menuOpen && (
// <div className="w-full flex flex-col mt-4 space-y-4 font-semibold text-[#1e3a8a] md:hidden">

// <a href="#">Home</a>
// <a href="#">Services</a>
// <a href="#">Contact</a>

// <button
// onClick={handleBookNow}
// className="w-full bg-[#243c7c] text-white py-3 rounded">
// Book now
// </button>

// <button onClick={async ()=>{
//   await supabase.auth.signOut();
//   alert("Logged out");
// }}>
// Logout
// </button>


// </div>
// )}

// </header>
// )
// }

// export default Navbar








import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { supabase } from "../lib/supabase";

function Navbar() {

const navigate = useNavigate()

const [menuOpen,setMenuOpen] = useState(false)
const [user,setUser] = useState(null)

/* track login state */
useEffect(()=>{

const { data: listener } = supabase.auth.onAuthStateChange(
(_, session)=>{
setUser(session?.user || null)
}
)

return ()=>{
listener.subscription.unsubscribe()
}

},[])

async function handleBookNow(){
const { data } = await supabase.auth.getSession()
const currentUser = data.session?.user

if(currentUser){
navigate("/book")
}
else{
navigate("/login")
}
}

return (
<header className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 md:px-12 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">

{/* LOGO */}
<div className="flex items-center cursor-pointer">
<img src={Dhobighat_logo} alt="DhobiGhat Logo" className="h-12" />
</div>




<nav className="hidden md:flex space-x-8 items-center font-semibold text-[#1e3a8a]">

<button
onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
className="hover:text-blue-600 cursor-pointer"
>
Home
</button>

<button
onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
className="hover:text-blue-600 cursor-pointer"
>
Services
</button>

<button
onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
className="hover:text-blue-600 cursor-pointer"
>
Contact
</button>

</nav>

<div className="flex items-center space-x-4">

<button 
onClick={() => {
  handleBookNow();
  setMenuOpen(false);
}}
className="bg-[#243c7c] text-white px-6 py-2.5 rounded hidden sm:block">
Book now
</button>

{/*  Show ONLY Logout when logged in */}
{user && (
<button
onClick={async ()=>{
  await supabase.auth.signOut();
  alert("Logged out");
}}
className="bg-red-500 text-white px-4 py-2 rounded hidden sm:block"
>
Logout
</button>
)}

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden"
>
☰
</button>

</div>

{menuOpen && (
<div className="w-full flex flex-col mt-4 space-y-4 font-semibold text-[#1e3a8a] md:hidden">

<button onClick={()=>{
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  setMenuOpen(false);
}}>
Home
</button>

<button onClick={()=>{
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  setMenuOpen(false);
}}>
Services
</button>

<button onClick={()=>{
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  setMenuOpen(false);
}}>
Contact
</button>

<button
onClick={handleBookNow}
className="w-full bg-[#243c7c] text-white py-3 rounded">
Book now
</button>

{/*  Mobile Logout only if logged in */}
{user && (
<button
onClick={async ()=>{
  await supabase.auth.signOut();
  alert("Logged out");
}}
className="w-full bg-red-500 text-white py-3 rounded"
>
Logout
</button>
)}

</div>
)}

</header>
)
}

export default Navbar