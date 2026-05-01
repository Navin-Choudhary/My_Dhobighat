


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
