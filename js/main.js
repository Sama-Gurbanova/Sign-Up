document.getElementById('userForm').addEventListener('submit', function(e) {
   e.preventDefault(); 

   const mobile = document.getElementById('mobile').value;
   const email = document.getElementById('email').value;
   const idPin = document.getElementById('idPin').value;
   const idSerial = document.getElementById('idSerial').value;
   const password = document.getElementById('password').value;
   const confirmPassword = document.getElementById('confirmPassword').value;
   const errorMessage = document.getElementById('errorMessage');

 
   if (!/^\d{10}$/.test(mobile)) {
       errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
       return;
   }

   if (password !== confirmPassword) {
       errorMessage.textContent = 'Passwords do not match.';
       return;
   }

  
   errorMessage.textContent = '';
   alert('Form submitted successfully!');
   
});


