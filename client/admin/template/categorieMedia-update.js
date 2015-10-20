Template.categorieMediaUpdate.helpers({
    isCreate: function(){
        return this.data === undefined;
    },
    isUpdate: function(){
        return this.data !== undefined;
    }
});

Template.categorieMediaUpdate.events({
    'submit form': function(form){
        form.preventDefault();
        
        // récupération des valeurs
        var inputName = form.target['input-name'];
        var textareaDescription = form.target['textarea-description'];
        
        var categoryMedia = {
            name: inputName.value,
            description: textareaDescription.value
        }
        
        var formValide = helpers.validation().errorInputs([inputName, 
                                                 textareaDescription], 
                                                 helpers.validation().htmlError);
        if(formValide){
            // Vérifions d'une étapes de création
            if(this.data === undefined){   
                Meteor.call('addCategoriesMedia', categoryMedia);
            }else{
                Meteor.call('updateCategoriesMedia',this.data._id, categoryMedia);
            }
        }
        
        Router.go('categoriesMedia');  
    }
});