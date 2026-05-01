function Contact() {
return (

<section id="contact" className="py-20 px-6 md:px-12 bg-white">

<div className="text-center mb-16 max-w-3xl mx-auto">

<h2 className="
text-4xl md:text-5xl
font-extrabold
text-[#102052]
mb-6
">
Get in Touch
</h2>

<p className="text-lg text-[#475569]">
Have questions or ready to book our services?
We're here to help you with all your laundry needs.
</p>

</div>



<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12 lg:gap-16
max-w-7xl
mx-auto
">


{/* Contact Form */}
{/* <div className="
bg-white
rounded-2xl
border border-gray-100
shadow-sm
p-8 lg:p-10
">

<h3 className="text-2xl font-bold text-[#102052] mb-8">
Send us a message
</h3>

<form className="space-y-6">

<input
type="text"
placeholder="Your Name"
className="
w-full border border-gray-200
rounded-lg
px-4 py-4
"
/>

<input
type="email"
placeholder="Email"
className="
w-full border border-gray-200
rounded-lg
px-4 py-4
"
/>

<input
type="tel"
placeholder="Phone"
className="
w-full border border-gray-200
rounded-lg
px-4 py-4
"
/>

<select
className="
w-full border border-gray-200
rounded-lg
px-4 py-4
"
>
<option>Select Service</option>
<option>Washing</option>
<option>Dry Cleaning</option>
<option>Steam Ironing</option>
</select>

<textarea
rows="4"
placeholder="Your message"
className="
w-full border border-gray-200
rounded-lg
px-4 py-4
"
/>

<button
className="
w-full
bg-[#1e3a8a]
text-white
py-4
rounded-lg
font-semibold
"
>
Send Message
</button>

</form>

</div> */}



{/* Contact Info */}
<div>

<h3 className="text-2xl font-bold text-[#102052] mb-8">
Contact Information
</h3>


<div className="space-y-8">


<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center">
📞
</div>

<div>
<h4 className="font-semibold text-lg">
Phone
</h4>
<p className="text-[#475569]">
+91 9004543487
</p>
</div>
</div>



<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center">
✉
</div>

<div>
<h4 className="font-semibold text-lg">
Email
</h4>

<p className="text-[#475569]">
mydhobighat2026@gmail.com
</p>
</div>
</div>



<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center">
📍
</div>

<div>
<h4 className="font-semibold text-lg">
Address
</h4>

<p className="text-[#475569] leading-relaxed">
Shop No.2 A-Wing ITUS Dinanath Co-op Society  
Andheri West Mumbai-400053
</p>
</div>
</div>



<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center">
🕒
</div>

<div>
<h4 className="font-semibold text-lg">
Business Hours
</h4>

<p className="text-[#475569]">
Mon-Sat: 8AM-8PM
</p>
</div>
</div>


</div>



<div className="
mt-12
bg-linear-to-br
from-[#f8fafc]
to-[#f1f5f9]
rounded-2xl
p-8
">

<h4 className="text-xl font-bold text-[#102052] mb-3">
Quick Response
</h4>

<p className="text-[#475569]">
We typically respond to all inquiries within 2-4 hours during business hours. For urgent requests, please call us directly.
</p>

</div>


</div>

</div>

</section>

)
}

export default Contact