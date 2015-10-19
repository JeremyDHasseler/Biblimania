Meteor.methods({
    addUser: function(user){
        // Effectuons différents validations
        if(user.password.length > 5){
            // ajout de l'utilisateur
            Accounts.createUser(user); 
        }else{
            // retournons le résultat de la validation
            throw new Meteor.Error("une erreur à été detecté");
        }

    }
});