


const supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_ANON_KEY
);

/* ================= PROTECT PAGE ================= */

checkUser();

async function checkUser(){
  const { data } = await supabaseClient.auth.getSession();
  const user = data.session?.user;

  if(!user){
    window.location.href = "login.html";
  }
}

/* ================= USER DASHBOARD ================= */

// Show selected service
const service = localStorage.getItem("selectedService");

if (service && document.getElementById("serviceName")) {
  document.getElementById("serviceName").innerText = service;
}

async function placeOrder() {

  const name = document.getElementById("name")?.value;
  const phone = document.getElementById("phone")?.value;
  const address = document.getElementById("address")?.value;
  const details = document.getElementById("details")?.value;

  const { data } = await supabaseClient.auth.getSession();
  const user = data.session?.user;

  if (!user) {
    alert("Login first");
    window.location.href = "login.html";
    return;
  }

  const service = localStorage.getItem("selectedService");

  const { error } = await supabaseClient.from("orderss").insert([
    {
      user_id: user.id,
      service: service,
      name,
      phone,
      address,
      details
    }
  ]);

  if (error) {
    console.error(error);
    alert("Order failed");
    return;
  }

  alert("Order placed successfully!");
}

window.placeOrder = placeOrder;


/* ================= ADMIN DASHBOARD ================= */

async function loadAdminData(){

  const { data } = await supabaseClient.auth.getSession();
  const user = data.session?.user;

  if(!user){
    window.location.href = "login.html";
    return;
  }

  //  check role
  let { data: profile } = await supabaseClient
    .from("profiless")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if(profile?.role !== "admin"){
    alert("Access denied");
    window.location.href = "index.html";
    return;
  }

  // fetch orders
  const { data: orders, error } = await supabaseClient
    .from("orderss")
    .select("*")
    .order("created_at", { ascending: false });

  if(error){
    console.error(error);
    alert("Error loading orders");
    return;
  }

  const table = document.getElementById("ordersTable");

  if(!table) return; // avoid crash on normal dashboard

  table.innerHTML = "";

  orders.forEach(order => {

    const row = `
      <tr class="border-t">
        <td class="p-3">${order.name}</td>
        <td class="p-3">${order.phone}</td>
        <td class="p-3">${order.address}</td>
        <td class="p-3">${order.service || "-"}</td>
        <td class="p-3">${order.details || "-"}</td>
        <td class="p-3">${new Date(order.created_at).toLocaleString()}</td>
      </tr>
    `;

    table.innerHTML += row;
  });

}

/* run only on admin page */
if(window.location.pathname.includes("admin.html")){
  loadAdminData();
}


/* ================= LOGOUT ================= */

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}

window.logout = logout;
