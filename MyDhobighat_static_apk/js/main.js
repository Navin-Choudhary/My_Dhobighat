// const supabaseClient = window.supabase.createClient(
//   "https://nffbecsrmbtfqqypzuxi.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmJlY3NybWJ0ZnFxeXB6dXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMDkxNjAsImV4cCI6MjA5MDY4NTE2MH0.gfBFIwg5UgIDA4rnmI6amOay31RfurZFuOCa_hvsO1Y"
// );



// let selectedService = null;

// // Select service
// window.selectService = async (service) => {
//   selectedService = service;

//   const { data } = await supabaseClient.auth.getUser();

//   if (!data.user) {
//     // Not logged in → go login
//     localStorage.setItem("selectedService", service);
//     window.location.href = "login.html";
//     return;
//   }

//   // Logged in → go dashboard
//   localStorage.setItem("selectedService", service);
//   window.location.href = "dashboard.html";
// };

// // Book button
// document.getElementById("bookBtn")?.addEventListener("click", async () => {
//   const { data } = await supabaseClient.auth.getUser();

//   if (!data.user) {
//     window.location.href = "login.html";
//   } else {
//     window.location.href = "dashboard.html";
//   }
// });












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

// Book button
// document.getElementById("bookBtn")?.addEventListener("click", async () => {

//   const { data } = await supabaseClient.auth.getSession();
//   const user = data.session?.user;

//   if (!user) {
//     window.location.href = "login.html";
//   } else {
//     window.location.href = "dashboard.html";
//   }
// });


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