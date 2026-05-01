import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function BookOrder(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [address,setAddress]=useState("");
const [details,setDetails]=useState("");
const [loading,setLoading]=useState(false);

/* 🔒 Protect page */
useEffect(()=>{
checkUser();

async function checkUser(){
const { data } = await supabase.auth.getSession();

if(!data.session){
navigate("/login");
}
}
},[]);

async function handleBooking(){

/* validation */
if(!name || !phone || !address){
alert("Please fill all required fields");
return;
}

setLoading(true);

const { data } = await supabase.auth.getSession();
const user = data.session?.user;

if(!user){
alert("Login first");
navigate("/login");
return;
}

const { error } = await supabase
.from("orderss")
.insert([
{
user_id:user.id,
name,
phone,
address,
details
}
]);

setLoading(false);

if(error){
alert(error.message);
return;
}

alert("Order placed successfully ✅");

/* reset form */
setName("");
setPhone("");
setAddress("");
setDetails("");

}

return(

<div className="min-h-screen flex justify-center items-center bg-gray-50">

<div className="w-125 bg-white shadow-xl p-8 rounded-xl">

<h1 className="text-3xl font-bold mb-6 text-center">
Book Laundry Pickup
</h1>

<input
placeholder="Name"
className="border p-3 w-full mb-4 rounded"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Phone"
className="border p-3 w-full mb-4 rounded"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input
placeholder="Address"
className="border p-3 w-full mb-4 rounded"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<textarea
placeholder="Clothes Details (optional)"
className="border p-3 w-full mb-4 rounded"
value={details}
onChange={(e)=>setDetails(e.target.value)}
/>

<button
onClick={handleBooking}
disabled={loading}
className="w-full bg-blue-900 text-white p-3 rounded font-semibold"
>
{loading ? "Placing..." : "Place Order"}
</button>

</div>

</div>

)

}

export default BookOrder;