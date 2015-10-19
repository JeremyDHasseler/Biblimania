Template.connection.events({
    'submit form': function(form){
        form.preventDefault();
        var inputEmail = form.target['input-email'];
        var inputPassword = form.target['input-password'];
        var user={
          email: inputEmail.value,
          password: inputPassword.value
        };
        Meteor.loginWithPassword(user.email, user.password, function(error){
            if(error){
                helpers.validation().errorInputs([inputEmail, inputPassword], 'L\'email ou le mot de passe est incorrect', true); 
            }
        });
        
    }
})