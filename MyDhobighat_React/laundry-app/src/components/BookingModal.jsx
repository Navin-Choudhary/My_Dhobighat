import {useState} from "react";
import {supabase} from "../lib/supabase";

function BookingModal(){

const[name,setName]=useState("");
const[phone,setPhone]=useState("");
const[address,setAddress]=useState("");
const[details,setDetails]=useState("");

async function placeOrder(){

const {
data:{user}
}=await supabase.auth.getUser();

await supabase
.from("orders")
.insert([
{
user_id:user.id,
name,
phone,
address,
details
}
]);

alert("Booking placed");
}

return(

<div>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Phone"
onChange={(e)=>setPhone(e.target.value)}
/>

<input
placeholder="Address"
onChange={(e)=>setAddress(e.target.value)}
/>

<textarea
placeholder="Laundry Details"
onChange={(e)=>setDetails(e.target.value)}
/>

<button onClick={placeOrder}>
Place Order
</button>

</div>

)
}

export default BookingModal