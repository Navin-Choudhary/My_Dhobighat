// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-between px-14 bg-gray-50">

//       {/* Left Content */}
//       <div className="max-w-xl">

//         <span className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-medium mb-6">
//           From Messy To Classy
//         </span>

//         <h1 className="text-7xl font-bold text-blue-950 leading-tight mb-6">
//           Premium laundry care
//           for your wardrobe
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Experience professional care for your clothes
//           with washing, dry cleaning and ironing services.
//         </p>

//         <div className="flex gap-5">
//           <button className="bg-blue-900 text-white px-8 py-4 rounded-lg">
//             Book Now
//           </button>

//           <button className="border px-8 py-4 rounded-lg">
//             Explore Services
//           </button>
//         </div>

//       </div>

//       {/* Right Image */}
//       <div>
//         <img
//           src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c"
//           alt="Laundry"
//           className="w-175 rounded-3xl shadow-lg"
//         />
//       </div>

//     </section>
//   )
// }

// export default Hero






import backgroundImage from '../assets/background_img.png'
import { useNavigate } from 'react-router-dom'





function Hero(){

const navigate = useNavigate()

return(

<main id="home"
className="
grow flex flex-col justify-center
px-6 md:px-12 py-12 md:py-32
w-full min-h-screen
"

style={{
backgroundImage:
`linear-gradient(to right,
rgba(255,255,255,1) 40%,
rgba(250,250,255,.7)),
url(${backgroundImage})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
}}
>


{/* later we'll add background image fade exactly */}
<div className="max-w-4xl">

<div className="
inline-flex items-center space-x-2
bg-[#f0f4ff]
text-[#1e3a8a]
px-4 py-2
rounded-full
text-sm font-semibold
mb-8
border border-blue-100
">

{/* ICON HERE */}
<span>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v18M3 12h18M15 9l-6 6M9 9l6 6"></path>
        </svg>
</span>

<span>
From Messy To Classy
</span>

</div>


<h1 className="
text-5xl
sm:text-6xl
md:text-7xl
font-extrabold
tracking-tight
leading-tight
mb-6
text-[#102052]
">
Premium laundry care
<br className="hidden md:block"/>
for your wardrobe
</h1>


<p className="
text-lg sm:text-xl
text-[#475569]
mb-10
max-w-2xl
leading-relaxed
font-medium
">
Experience professional care for your clothes
with our expert washing, dry cleaning and ironing services. Quality you can trust, delivered with care.
</p>


<div className="
flex flex-col
sm:flex-row
space-y-4
sm:space-y-0
sm:space-x-4
">

<button
onClick={() => navigate("/login")} 
className="
bg-[#243c7c]
text-white
px-8 py-3.5
rounded
font-semibold
">
Book Now
</button>


<button className="
bg-white
border
border-gray-200
px-8 py-3.5
rounded
font-semibold
text-[#243c7c]
">
Explore Services
</button>

</div>

</div>

</main>

)
}

export default Hero