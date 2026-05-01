import ServiceCard from "./ServiceCard"

import washing_Img from '../assets/washing.png'
import dry_cleaning_Img from '../assets/dry_cleaning.png'
import ironing_Img from '../assets/iron.png'


// function Services() {
//  return (
// <section className="py-24 px-14 bg-gray-50">

// <h1 className="text-5xl font-bold text-center mb-16 text-blue-950">
// Our Services
// </h1>

// <div className="grid md:grid-cols-3 gap-10">

// <ServiceCard
//  title="Washing"
//  description="Gentle and professional washing for everyday garments."
//  image={washing}
// />

// <ServiceCard
//  title="Dry Cleaning"
//  description="Premium dry cleaning for delicate fabrics and formal wear."
//  image={dry_cleaning}
// />

// <ServiceCard
//  title="Steam Ironing"
//  description="Crisp finishing and wrinkle-free professional ironing."
//  image={ironing}
// />

// </div>

// </section>
//  )
// }

// export default Services







// function Services(){
// return(

// <section className="py-20 px-6 md:px-12">

// <div className="text-center mb-16 md:mb-24">

// <h2 className="text-4xl md:text-5xl font-extrabold text-[#102052] mb-6">
// Comprehensive care
// </h2>

// <p className="text-lg text-[#475569]">
// For every fabric.
// </p>

// </div>


// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

// <ServiceCard
// title="Washing"
// description="Professional washing services for regular and delicate fabrics."
// image={washing_Img}
// />

// <ServiceCard
// title="Dry Cleaning"
// description="Specialized stain removal while preserving fabric quality."
// image={dry_cleaning_Img}
// />

// <ServiceCard
// title="Steam Ironing"
// description="Professional wrinkle free finishing."
// image={ironing_Img}
// />

// </div>

// </section>

// )
// }

// export default Services















function Services() {


    const washIcon = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        >
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
    )


    const dryIcon = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
    )


    const ironIcon = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        >
        <path d="M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
        <path d="M6 14V8a6 6 0 1 1 12 0v6"/>
        <path d="M12 10v4"/>
        </svg>
    )


return(


<section id="services" className="py-20 px-6 md:px-12 w-full relative">

{/* Background fade image */}
<div
className="absolute inset-0 -z-10 opacity-20"
// style={{
// backgroundImage:
// `linear-gradient(
// to right,
// rgba(255,255,255,1) 30%,
// rgba(255,255,255,0)
// ),
// url('/services-bg.jpg')`,
// backgroundSize:"cover",
// backgroundPosition:"center right"
// }}
/>


<div className="text-center mb-16 md:mb-24">

<h2 className="
text-4xl md:text-5xl
font-extrabold
tracking-tight
leading-tight
mb-6 text-[#102052]
">
Comprehensive care
<br className="hidden sm:block"/>
for every fabric
</h2>

<p className="text-lg sm:text-xl text-[#475569]">
Tailored laundry solutions designed
to extend wardrobe life.
</p>

</div>


<div className="
grid grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8 lg:gap-10
">

<ServiceCard
title="Washing"
description="Professional washing services for both regular and delicate fabrics."
image={washing_Img}
icon={washIcon}
/>

<ServiceCard
title="Dry Cleaning"
description="Specialized process removes stains while preserving fabric quality."
image={dry_cleaning_Img}
icon={dryIcon}
/>

<ServiceCard
title="Steam Ironing"
description="Professional wrinkle free finishing and garment care."
image={ironing_Img}
icon={ironIcon}
/>

</div>

</section>

)
}

export default Services