



const supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_ANON_KEY
); 


async function checkNavbarAuth() {

  const { data } = await supabaseClient.auth.getSession();
  const user = data.session?.user;

  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtnMobile = document.getElementById("logoutBtnMobile");

  if (user) {
    logoutBtn?.classList.remove("hidden");
    logoutBtnMobile?.classList.remove("hidden");
  } else {
    logoutBtn?.classList.add("hidden");
    logoutBtnMobile?.classList.add("hidden");
  }
}

checkNavbarAuth();


let selectedService = null;

// Select service
window.selectService = async (service) => {
  selectedService = service;

  const { data } = await supabaseClient.auth.getSession();
  const user = data.session?.user;

  if (!user) {
    localStorage.setItem("selectedService", service);
    window.location.href = "login.html";
    return;
  }

  localStorage.setItem("selectedService", service);
  window.location.href = "dashboard.html";
};



document.querySelectorAll(".bookBtn").forEach(btn => {
  btn.addEventListener("click", async () => {

    const { data } = await supabaseClient.auth.getSession();
    const user = data.session?.user;

    if (!user) {
      window.location.href = "login.html";
    } else {
      window.location.href = "dashboard.html";
    }

  });
});


document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  alert("Logged out");
  window.location.reload();
});

document.getElementById("logoutBtnMobile")?.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  alert("Logged out");
  window.location.reload();
});
