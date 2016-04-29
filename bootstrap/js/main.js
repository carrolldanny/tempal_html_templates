$( document ).ready(function() {
  $.toggleShowPassword({
      field: '#userPassword',
      control: '#togglePassword'
  });

  $('#selectSignupMethod').click(function(){
      $('.form-signup').hide();
      $('#user_selection').show();
      return false;
   });

   $('#userSelectionHire').click(function(){
       $('.form-signup').hide();
       $('#signup_form').show();
       $('.profileImageContainer').show();
       return false;
    });

    $('#userSelectionWork').click(function(){
        $('.form-signup').hide();
        $('#signup_form').show();
        $('.profileImageContainer').show();
        return false;
     });


});
