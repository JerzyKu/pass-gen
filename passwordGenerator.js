function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
}

const dict = {
  "letters": "abcdefghkmnprstuwxyz",
  "trickyLetters": "ijol",
  "caps": "ABCDEFGHKMNPRSTUWXYZ",
  "trickyCaps": "IJOL",
  "digits": "23456789",
  "trickyDigits": "01",
  "symbols": "!@#$%^&*()-_=+?",
}

function generatePassword() {
    charBank = "";
    generetedPassword = '';

    if (document.getElementById("litery").checked){
      charBank += dict["letters"];
      if (!document.getElementById("Similar").checked){
        charBank += dict["trickyLetters"];
      }
    }
    if (document.getElementById("cyfry").checked){
      charBank += dict["digits"];
      if (!document.getElementById("Similar").checked){
        charBank += dict["trickyDigits"];
      }
    }
    if (document.getElementById("Uppercase").checked){
      charBank += dict["caps"];
      if (!document.getElementById("Similar").checked){
        charBank += dict["trickyCaps"];
      }
    }
    if (document.getElementById("Symbols").checked){
      charBank = charBank + charBank;
      charBank += dict["symbols"];
    }

    for (let i = 0; i < document.getElementById('lenght').value; i++) {
      generetedPassword += charBank[Math.floor(Math.random() * charBank.length)];
    }
    

    document.getElementById("myInput").value = generetedPassword;
}

function incrise(){
  document.getElementById('lenght').value++;
}

function decrise(){
  if (document.getElementById('lenght').value > 1){
    document.getElementById('lenght').value--;
  }
  else{
    document.getElementById('lenght').value = 1;
  }
}

function both(){
  generatePassword();
  myFunction();
}

function error(){
  
}