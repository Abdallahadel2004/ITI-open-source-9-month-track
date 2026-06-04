document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const resultBox = document.getElementById('result');

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) { 
        resultBox.classList.remove('hide');

        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resultBox.innerHTML = `<strong>Success:</strong> ${response.message}`;
          resultBox.className = 'result-box success';
          registerForm.reset();
        } else {
          let errorMsg = 'Registration failed. Please try again.';
          try {
            const response = JSON.parse(xhr.responseText);
            if (response.errors) {
              errorMsg = Object.values(response.errors).join('<br>');
            }
          } catch (e) {}
          resultBox.innerHTML = `<strong>Error:</strong><br>${errorMsg}`;
          resultBox.className = 'result-box error';
        }
      }
    };

    const payload = JSON.stringify({
      username: username,
      email: email,
      password: password
    });
    xhr.send(payload);
  });
});
