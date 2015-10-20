helpers = {};
helpers.validation = function(){
    return {
        htmlError: 'Champs obligatoire',
        htmlErrorPassword: 'La valeur est différente',
        // function d'affichage d'une erreur sur un ou plusieurs champs
        errorInputs: function (inputs, baliseError, isError){    
                          var isValide = true;
                           _.each(inputs, function(input){
                               var $input = $(input);
                               if($input.val() === "" && !isError || isError){
                                  isValide = false;
                                  
                                  // force la suppression de toutes erreurs
                                  
                                  helpers.validation().errorClean([input]);
                                  
                                  $input.addClass('error') 
                                        .parent()
                                        .append('<small class=\'error\'>' + baliseError + '</small>')
                                        .find('label')
                                        .addClass('error');
                               }
                           });
                        return isValide;
                    },
        // function de nettoyage d'erreur
        errorClean: function (inputs){
                        _.each(inputs, function(input){
                            var $input = $(input);
                            $input.removeClass('error')
                                  .parent()
                                  .find('label')
                                  .removeClass('error')
                                  .parent()
                                  .find('small')
                                  .remove();
                                  
                                  
                        });                    
                    }
           }
}

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});

