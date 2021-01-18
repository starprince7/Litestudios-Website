// alert('e work!')

/* ======================= ASYNC REQUEST HERE ====================== */
const log = console.log;
const form = document.querySelector("form");
const email_error = document.querySelector(".error-email");
const phone_error = document.querySelector(".error-phone");
const location_error = document.querySelector(".error-location");

const success_message = document.querySelector("#success_msg_container");

const alertModal = () => {
  gsap.fromTo('#success_msg_container', {
    y: '-100%',
  },
  {
    duration: .7,
    y: '3%',
    ease: 'back'
  })
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loader.style.display = "block";

  const date_picked = form.datepicker.value;
  const firstname = form.firstname.value;
  const lastname = form.lastname.value;
  const email = form.email.value;
  const phone = form.cellphone.value;
  const location = form.location.value;
  const instagram = form.instagram.value;
  const facebook = form.facebook.value;

  email_error.textContent = "";
  phone_error.textContent = "";
  location_error.textContent = "";

  // log(date)
  // log(firstname)
  // log(lastname)
  // log(email)
  // log(phone)
  // log(location)
  // log(instagram)
  // log(facebook)

  try {
    const response = await fetch("/client-booking", {
      method: "POST",
      body: JSON.stringify({
        date_picked,
        firstname,
        lastname,
        email,
        phone,
        location,
        instagram,
        facebook,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    window.data_global = data.bookingId;
    log(data);
    if (data.msg) {
      log("Response from server", data);
      form.datepicker.value = "";
      form.firstname.value = "";
      form.lastname.value = "";
      form.email.value = "";
      form.cellphone.value = "";
      form.location.value = "";
      form.instagram.value = "";
      form.facebook.value = "";

      loader.style.display = "none";
      // alert('Successful!')
      success_message.style.display = "block";
      alertModal()
    } else if (data.refinedErrors) {
      loader.style.display = "none";
      log("from Data", data.refinedErrors);
      log(data.refinedErrors.phone);

      email_error.textContent = data.refinedErrors.email;
      phone_error.textContent = data.refinedErrors.phone;
      location_error.textContent = data.refinedErrors.location;
    }
  } catch (error) {
    log(error);
  }
});

/* ================= Ajax put request ================ */
const success_response_form = document.querySelector(".success_response_form");
const notLoadingBtn = document.querySelector(".not_loading_btn");
const loadingBtn = document.querySelector(".loading-btn");

success_response_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // alert()
  notLoadingBtn.style.display = "none";
  loadingBtn.style.display = "block";

  const stat_value = success_response_form.statistic.value;
  console.log(stat_value);

  try {
    const updatedClientDoc = await fetch("/myclients", {
      method: "PUT",
      body: JSON.stringify({ stat_value, data_global }),
      headers: { "Content-type": "application/json" },
    });

    const data_second = await updatedClientDoc.json();
    log(data_second);

    if (data_second) {
      loadingBtn.style.display = "none";
      notLoadingBtn.style.display = "block";
      success_message.style.display = "none";
    }
  } catch (error) {
    log("Error making Put request! === ", error);
  }
});

const success_close_btn = document.querySelector(".success_close_btn");

success_close_btn.addEventListener("click", () => {
  // alert()
  success_message.style.display = "none";
});
