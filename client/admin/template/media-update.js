Template.mediaUpdate.helpers({
    isCreate: function(){
        return this.data === undefined;
    },
    isUpdate: function(){
        return this.data !== undefined;
    },
    allCategoriesMedia: function(){
        return CategoriesM.find();
    }
});

Template.mediaUpdate.events({
    'submit form': function(form){
        form.preventDefault();
        
        // récupération des valeurs
        var inputTitle = form.target['input-title'];
        var selectCategory = form.target['select-category'];
        var inputUrl = form.target['input-url'];
        
        var media = {
            title: inputTitle.value,
            categoryId: selectCategory.value,
            url: inputUrl.value
        }
        
        var formValide = helpers.validation().errorInputs([inputTitle, 
                                                 inputUrl], 
                                                 helpers.validation().htmlError);
        if(formValide){
            // Vérifions d'une étapes de création
            if(this.data === undefined){   
                Meteor.call('addMedia', media);
            }else{
                Meteor.call('updateMedia',this.data._id, media);
            }
        }
        
        Router.go('media');  
    }
});