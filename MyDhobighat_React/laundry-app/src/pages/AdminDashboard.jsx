import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function AdminDashboard(){

const navigate = useNavigate();

const [orders,setOrders]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{
checkAdmin();
},[]);

async function checkAdmin(){

const { data } = await supabase.auth.getSession();
const user = data.session?.user;

if(!user){
navigate("/login");
return;
}

/* check role */
const { data: profile } = await supabase
.from("profiless")
.select("role")
.eq("id", user.id)
.maybeSingle();

if(profile?.role !== "admin"){
alert("Access denied");
navigate("/");
return;
}

/* if admin → fetch orders */
fetchOrders();

}

async function fetchOrders(){

const { data, error } = await supabase
.from("orderss")
.select("*")
.order("created_at",{ascending:false});

if(error){
alert(error.message);
return;
}

setOrders(data || []);
setLoading(false);

}

if(loading){
return <p className="text-center mt-10">Loading...</p>
}

return(

<div className="p-10">

<h1 className="text-4xl font-bold mb-8">
All Bookings
</h1>

{
orders.map(order=>(
<div
key={order.id}
className="border p-6 mb-4 rounded shadow-sm"
>

<h2 className="font-bold text-lg">{order.name}</h2>

<p><b>Phone:</b> {order.phone}</p>

<p><b>Address:</b> {order.address}</p>

<p><b>Details:</b> {order.details}</p>

<p className="text-sm text-gray-500 mt-2">
{new Date(order.created_at).toLocaleString()}
</p>

</div>
))
}

</div>

)
}

export default AdminDashboard;