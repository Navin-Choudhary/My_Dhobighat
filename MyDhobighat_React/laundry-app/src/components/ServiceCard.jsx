// function ServiceCard({title, description, image}) {
//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

//       {/* Service Image */}
//       <img
//         src={image}
//         alt={title}
//         className="h-52 w-full object-cover rounded-xl mb-6"
//       />

//       <h2 className="text-2xl font-bold mb-4 text-blue-950">
//         {title}
//       </h2>

//       <p className="text-gray-600">
//         {description}
//       </p>

//     </div>
//   )
// }

// export default ServiceCard















// function ServiceCard({title,description,image}) {
// return (

// <div className="
// flex flex-col bg-white rounded-xl
// overflow-hidden shadow-sm
// hover:shadow-md
// border border-gray-50
// ">

// <img
// src={image}
// alt={title}
// className="w-full h-64 object-cover"
// />


// <div className="p-8 pt-12">

// <h3 className="text-2xl font-bold text-[#102052] mb-4">
// {title}
// </h3>

// <p className="text-[#475569] leading-relaxed">
// {description}
// </p>

// </div>

// </div>

// )
// }

// export default ServiceCard















function ServiceCard({title,description,image,icon}) {
return (

<div className="
flex flex-col
bg-white
rounded-xl
overflow-hidden
shadow-sm
hover:shadow-md
transition-shadow
border border-gray-50
">

<div className="relative w-full">

<img
src={image}
alt={title}
className="w-full h-auto block"
/>


{/* floating icon */}
<div className="
absolute -bottom-6 left-6
bg-white p-3.5
rounded-xl
shadow-lg
border border-gray-100
flex items-center justify-center
text-[#1e3a8a]
">
{icon}
</div>

</div>


<div className="p-8 pt-12 flex flex-col grow">

<h3 className="text-2xl font-bold text-[#102052] mb-4">
{title}
</h3>

<p className="text-[#475569] leading-relaxed grow">
{description}
</p>

</div>

</div>

)
}

export default ServiceCard