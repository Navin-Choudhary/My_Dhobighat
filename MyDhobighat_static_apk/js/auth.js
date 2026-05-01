// const supabaseClient = window.supabase.createClient(
//   "https://nffbecsrmbtfqqypzuxi.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmJlY3NybWJ0ZnFxeXB6dXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMDkxNjAsImV4cCI6MjA5MDY4NTE2MH0.gfBFIwg5UgIDA4rnmI6amOay31RfurZFuOCa_hvsO1Y"
// );

// async function signup() {
//   console.log("Signup clicked");

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const { data, error } = await supabaseClient.auth.signUp({
//     email,
//     password
//   });

//   console.log(data, error);

//   // ❌ Stop if signup failed
//   if (error || !data.user) {
//     alert(error?.message || "Signup failed");
//     return;
//   }

//   // ✅ Insert into profiles
//   const { error: profileError } = await supabaseClient
//     .from("profiles")
//     .insert([
//       {
//         id: data.user.id,
//         email: email,
//         role: "customer"
//       }
//     ]);

//   // ❌ Check insert error
//   if (profileError) {
//     console.error(profileError);
//     alert("Profile insert failed");
//     return;
//   }

//   alert("Signup successful!");
// }



// async function login() {
//   console.log("Login clicked");

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const { data, error } = await supabaseClient.auth.signInWithPassword({
//     email,
//     password
//   });

//   console.log(data, error);

//   if (error || !data.user) {
//     alert(error?.message || "Login failed");
//     return;
//   }

//   const user = data.user;

//   console.log("User ID:", user.id);

//   // 🔥 Fetch role from profiles
//   const { data: profile, error: profileError } = await supabaseClient
//     .from("profiles")
//     .select("role")
//     .eq("id", user.id)
//     .single();

//   if (profileError) {
//     console.error(profileError);
//     alert("Error fetching profile");
//     return;
//   }

//   console.log("User role:", profile.role);

//   // 🚀 Redirect based on role
//   const savedService = localStorage.getItem("selectedService");

// if (profile.role === "admin") {
//   window.location.href = "admin.html";
// } else {
//   if (savedService) {
//     window.location.href = "dashboard.html";
//   } else {
//     window.location.href = "index.html";
//   }
// }
// }












const supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_ANON_KEY
);

async function signup() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error || !data.user) {
    alert(error?.message || "Signup failed");
    return;
  }

  //  UPSERT (important)
  await supabaseClient
    .from("profiless")
    .upsert([
      {
        id: data.user.id,
        email: email,
        role: "user"
      }
    ]);

  alert("Signup successful!");
}



async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error || !data.user) {
    alert(error?.message || "Login failed");
    return;
  }

  const user = data.user;

  //  safer fetch
  let { data: profile } = await supabaseClient
    .from("profiless")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  //  auto-create if missing
  if (!profile) {
    await supabaseClient
      .from("profiless")
      .upsert([
        {
          id: user.id,
          email: user.email,
          role: "user"
        }
      ]);

    profile = { role: "user" };
  }

  const savedService = localStorage.getItem("selectedService");

  if (profile.role === "admin") {
    window.location.href = "admin.html";
  } else {
    // if (savedService) {
    //   window.location.href = "dashboard.html";
    // } else {
    //   window.location.href = "index.html";
    // }

    localStorage.removeItem("selectedService"); //  important
    window.location.href = "index.html";
  }
}