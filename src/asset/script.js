function validateEmail(email) {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function sendMail() {
  const email = document.getElementById('email');
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  if (!validateEmail(email.value)) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    window.open(`mailto:${email.value}?subject=${subject}&body=${message}`);
  }
}