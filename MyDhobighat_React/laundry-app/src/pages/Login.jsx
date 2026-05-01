import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Login() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [isSignup,setIsSignup] = useState(false);


async function handleAuth(){

/* SIGNUP */
if (isSignup) {

const { data, error } = await supabase.auth.signUp({
  email,
  password
});

if (error) {
  alert(error.message);
  return;
}

if (!data?.user) {
  alert("User not created");
  return;
}

await supabase
.from("profiless")
.upsert([
{
 id: data.user.id,
 email: email,
 role: "user"
}
]);

console.log("PROFILE INSERT:", profileData, profileError);

if(profileError){
 alert(profileError.message);
 return;
}

alert("Signup success");
setIsSignup(false);
return;
}



/* LOGIN */
const {data,error}=
await supabase.auth.signInWithPassword({
email,
password
});

if(error){
alert(error.message);
return;
}


const user=data.user;

let { data: profile } = await supabase
.from("profiless")
.select("role")
.eq("id", user.id)
.maybeSingle();

/* if profile missing → create it */
if(!profile){

await supabase
.from("profiless")
.upsert([
{
id:user.id,
email:user.email,
role:"user"
}
]);

profile = { role: "user" };
}


/* Role Based Redirect */
if(profile.role==="admin"){
navigate("/admin");
}
else{
navigate("/");
}

}






return(

<div className="min-h-screen flex items-center justify-center bg-gray-50">

<div className="w-96 bg-white p-8 shadow-xl rounded-xl">

<h1 className="text-3xl font-bold mb-6 text-center">
{isSignup ? "Sign Up" : "Login"}
</h1>


<input
className="border p-3 w-full mb-4 rounded"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
className="border p-3 w-full mb-4 rounded"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button
onClick={handleAuth}
className="w-full bg-blue-900 text-white p-3 rounded font-semibold"
>
{isSignup ? "Create Account" : "Login"}
</button>




<p
onClick={()=>setIsSignup(!isSignup)}
className="
text-center
mt-5
text-blue-700
cursor-pointer
"
>
{
isSignup
? "Already have an account? Login"
: "New user? Sign Up"
}
</p>

</div>

</div>

)

}

export default Login