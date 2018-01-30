$('#form').on('submit',
function(e) {
  var phone = $('#phone').val();
  var dob = $('#birthday').val();
  var email = $('#email').val();
  var valid = /.+@.+\..+/g;
  var validemail = valid.test(email);
 e.preventDefault();
 if(!validemail){
   console.log('Invalid email');
   $('body').replaceWith('<h1 id="invalid">Your entry for the email field is not valid</h1>');
   return false;
 } else {
   console.log('Valid email');
   $('body').replaceWith('<h1 id="success">Your submittion was successful<h1>');
 }
 if (phone==null || phone=="",dob==null || dob=="",email==null || email==""){
   alert("PLease fill-out all the fields!");
   return false;
 }
});
