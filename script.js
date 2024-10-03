const uname = document.getElementById("uname");
const acno = document.getElementById("acno");
const pswd = document.getElementById("pswd");
const amount1 = document.getElementById("amount");
function reg() {
  bank = {
    USERNAME: uname.value,
    ACCNO: acno.value,
    PASSWD: pswd.value,
    BAL: 0,
  };
  localStorage.setItem(bank.ACCNO, JSON.stringify(bank));
  alert("registration successfull");
  uname.value = "";
  acno.value = "";
  pswd.value = "";
  window.location = "./login.html";
}

function login() {
  // console.log(localStorage.getItem().toString("bank"));
 
  let accountNumber =acno.value;
  let password = pswd.value;


  // Check if account number exists in localStorage
  let storedData = localStorage.getItem(accountNumber);

  if (storedData === null) {
      // If account number is not found in localStorage, show an alert
      alert('Account number does not exist.');
  } else {
      // Parse the stored JSON data
      let userData = JSON.parse(storedData);

      // Check if the password matches
      if (userData.PASSWD === password) {
          // If account number and password match, redirect to home.html
          window.location.href = 'home.html';
      } else {
          // If password is incorrect, show an alert
          alert('Incorrect password.');
      }
  }
}

function deposit() {
  const amount1 = document.getElementById("amount");
  const accno1 = document.getElementById("accno");
  const balance = document.getElementById("balance");

  const amount =Number(amount1.value);
  const accno = accno1.value;
  let user = JSON.parse(localStorage.getItem(accno));
  user.BAL += amount;
  console.log(user);

  localStorage.setItem(accno, JSON.stringify(user));
  alert('Your amount is added successfully')
  amount1.value=''
  accno1.value=''
  balance.innerHTML=`Your Current Balance is ${user.BAL}`
}


function withdraw() {
  const amount1 = document.getElementById("amount1");
  const accno1 = document.getElementById("accno1");
  const balance = document.getElementById("balance2");

  const amount =Number(amount1.value);
  const accno = accno1.value;
  console.log(accno);
  
  let user = JSON.parse(localStorage.getItem(accno));
  user.BAL -= amount;
  console.log(user);

  alert(`Bank Balance before withdrawal:${user.BAL}`)
  localStorage.setItem(accno, JSON.stringify(user));
  alert(`Withdrawel Amount:${amount1.value}`)
  alert('Your amount is  successfully withdrawn')
  alert(`After withdrawal balance : ${user.BAL}`)
  amount1.value=''
  accno1.value=''
  balance.innerHTML=`Your Current Balance is ${user.BAL}`
}
