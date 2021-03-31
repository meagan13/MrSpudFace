window.addEventListener("DOMContentLoaded", (event) => {
  const title = document.getElementById("title");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const eyeColor = document.getElementById("eye-color");
  const height = document.getElementById("height");
  const licenseNum = document.getElementById("license-num");
  const organDonor = document.getElementById("donor-status");
  const titleID = document.getElementById("card-title");
  const fnID = document.getElementById("card-first-name");
  const lsID = document.getElementById("card-last-name");
  const eyeID = document.getElementById("card-eye-color");
  const heightID = document.getElementById("card-height");
  const licNumID = document.getElementById("card-license-num");
  const organID = document.getElementById("card-donor-status");

  title.addEventListener("input", event => {
    titleID.innerHTML = title.value;
  });

  firstName.addEventListener("input", event => {
    fnID.innerHTML = firstName.value;
  });

  lastName.addEventListener("input", event => {
    lsID.innerHTML = lastName.value;
  });

  eyeColor.addEventListener("input", event => {
    eyeID.innerHTML = eyeColor.value;
  });

  height.addEventListener("input", event => {
    heightID.innerHTML = height.value;
  });

  licenseNum.addEventListener("input", event => {
    licNumID.innerHTML = licenseNum.value;
  });

  organDonor.addEventListener("click", event => {
    if (event.target.type === "checkbox") {
      let checkbox = event.target;

      if (checkbox.checked) {
        organID.innerHTML = "Yes";
      } else {
        organID.innerHTML = "No";
      }
    }

  });

  // ** Phase 1B: Update license with event delegation and event.target **


  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
