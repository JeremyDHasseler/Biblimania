Template.creationCompte.events({
    
    'submit form': function(form){
        // Les champs du formulaire à envoyer au server pour l'enregistrement
        var mail = form.target['input-email'];
        var password = form.target['input-password'];
        var confirmPassword = form.target['input-confirmPassword'];
        
        //Si toutes les valeurs ont été remplies, nous pouvons enregistrer l'utilisateur.
        if(helpers.validation().errorInputs([mail, 
                                              password, 
                                              confirmPassword], 
                                              helpers.validation().htmlError)){
            var user = {
                //username: '',
                email: mail.value,
                password: confirmPassword.value
            }
            
            Meteor.call('addUser', user, function(error, result){;           
                if(!error){
                    // Si aucune erreur nous logons l'utilisateur
                    Meteor.loginWithPassword(user.email, user.password);
                }else{
                    // redirection vers la page d'erreur
                }
                
            }); 
           
        }else{
            form.preventDefault();
        }
        
    },
    'change #input-confirmPassword': function(input){
       // vous pouvez également parcourir votre dom avec JQUERY
        var $inputEmail = $("#input-email");
        var $inputPassword = $("#input-password");
        var inputConfirmation = input.target;
        
        if($inputPassword.val() === inputConfirmation.value){
            helpers.validation().errorClean([inputConfirmation]);
        }else{
            helpers.validation().errorInputs([inputConfirmation], helpers.validation().htmlErrorPassword, true);
        }
    }
});
            