
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "./lib/supabase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import BookOrder from "./pages/BookOrder";



function App() {

useEffect(() => {

checkUser();

async function checkUser(){

const { data } = await supabase.auth.getSession();
const user = data.session?.user;

if(user){

/* 🔥 IMPORTANT: don't overwrite role */
await supabase
.from("profiless")
.upsert([
{
id:user.id,
email:user.email
}
]);

}

}

},[]);

return (
<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/admin" element={<AdminDashboard />} />

<Route path="/book" element={<BookOrder />} />

</Routes>

</BrowserRouter>
)

}

export default App;