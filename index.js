//ID Password Validation

//Using the switch function

function userValidate2(id1, password1) {
  if (id1 === 'Junely') {
    switch (
      password1 //this swtch chks for the passwrd
    ) {
      case '10405':
      case 'NAZ':
        console.log(`Welcome to my Website MUHUHUHAAA!`);
        break;
      case '':
        console.log('You have not entered a password');
        break;
      default:
        console.log('Your Password is incorrect');
    }
  }
  if (id1 !== 'Junely') {
    console.log('incorrect ID');
  }
  if (id1 === '') {
    console.log('You have not entered an ID');
  }
}

userValidate2('Junely', 'NAZ');
