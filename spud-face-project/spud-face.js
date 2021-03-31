window.addEventListener('DOMContentLoaded', (event) => {
  // const title = document.getElementById('title');
  // const firstName = document.getElementById('first-name');
  // const lastName = document.getElementById('last-name');
  // const eyeColor = document.getElementById('eye-color');
  // const height = document.getElementById('height');
  // const licenseNum = document.getElementById('license-num');
  // const organDonor = document.getElementById('donor-status');
  // const titleID = document.getElementById('card-title');
  // const fnID = document.getElementById('card-first-name');
  // const lsID = document.getElementById('card-last-name');
  // const eyeID = document.getElementById('card-eye-color');
  // const heightID = document.getElementById('card-height');
  // const licNumID = document.getElementById('card-license-num');
  // const organID = document.getElementById('card-donor-status');

  // title.addEventListener('input', (event) => {
  //   titleID.innerHTML = title.value;
  // });

  // firstName.addEventListener('input', (event) => {
  //   fnID.innerHTML = firstName.value;
  // });

  // lastName.addEventListener('input', (event) => {
  //   lsID.innerHTML = lastName.value;
  // });

  // eyeColor.addEventListener('input', (event) => {
  //   eyeID.innerHTML = eyeColor.value;
  // });

  // height.addEventListener('input', (event) => {
  //   heightID.innerHTML = height.value;
  // });

  // licenseNum.addEventListener('input', (event) => {
  //   licNumID.innerHTML = licenseNum.value;
  // });

  // organDonor.addEventListener('click', (event) => {
  //   if (event.target.type === 'checkbox') {
  //     let checkbox = event.target;

  //     if (checkbox.checked) {
  //       organID.innerHTML = 'Yes';
  //     } else {
  //       organID.innerHTML = 'No';
  //     }
  //   }
  // });

  // ** Phase 1B: Update license with event delegation and event.target **

  /////////////////////////////////////////////////////////////////////////////

  const licenseForm = document.getElementById('drivers-license-form');
  const licenseCardFields = document.querySelectorAll('.license__info');
  const submitButton = document.querySelector('.form__submit');

  licenseForm.addEventListener('input', (event) => {
    // iterate over the license card fields and
    // match their ids to event.target.id
    licenseCardFields.forEach((field) => {
      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value;
      }
    });
  });

  const checkbox = document.querySelector('#donor-status');
  const organID = document.querySelector('#card-donor-status');

  checkbox.addEventListener('change', (event) => {
    if (checkbox.checked) {
      organID.innerHTML = 'Yes';
    } else {
      organID.innerHTML = 'No';
    }
  });

  // ** Phase 2: Add focus and blur events to form inputs **

  let inputs = document.querySelectorAll('.form__input');

  inputs.forEach((input) => {
    input.addEventListener('focus', (event) => {
      input.style.backgroundColor = 'lightgreen';
    });

    input.addEventListener('blur', (event) => {
      input.style.backgroundColor = 'unset';
    });
  });

  /////////////////////////////////////////////////////////////////////////////////

  // const form1 = document.querySelector('#drivers-license-form');
  // console.log(form1);

  // form1.addEventListener(
  //   'focus',
  //   (event) => {
  //     event.target.style.backgroundColor = 'lightgreen';
  //   },
  //   true
  // );

  // form1.addEventListener(
  //   'blur',
  //   (event) => {
  //     event.target.style.backgroundColor = 'unset';
  //   },
  //   true
  // );

  // ** Phase 3: Check that license numbers match **

  let licenseNum = document.getElementById('license-num');
  let licenseNumConfirm = document.getElementById('license-num-confirm');
  let form = document.getElementById('drivers-license-form');

  console.log(licenseNum);
  console.log(licenseNumConfirm);

  const checkLicenseNumber = () => {
    if (licenseNum.value !== licenseNumConfirm.value) {
      licenseNum.style.backgroundColor = 'lightcoral';
      licenseNumConfirm.style.backgroundColor = 'lightcoral';
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkLicenseNumber();
  });

  // ** Phase 4: Update submit button click count **

  let button = document.querySelector('.form__submit');
  let count = 0;

  button.addEventListener('click', (event) => {
    count++;
    console.log(count);
  });
});
