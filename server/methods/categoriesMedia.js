CategoriesM = new Mongo.Collection("categoriesMedia");

Meteor.publish('allCategoriesMedia', function () {
    return CategoriesM.find();
});

Meteor.methods({
    addCategoriesMedia: function(catMedia){
        catMedia.createdAt = new Date();
        catMedia.updatedAt = new Date();
        
        // Retourne l'identifiant du nouveau document ajouté
        CategoriesM.insert(catMedia);
        
    },
    updateCategoriesMedia: function(_id, catMedia){
        CategoriesM.update(_id, catMedia);
    },
    removeCategoriesMedia: function(_id){
        CategoriesM.remove(_id);
    }
});