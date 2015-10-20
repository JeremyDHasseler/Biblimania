Template.categoriesMedia.helpers({
   allCategoriesMedia: function(){
      
       return CategoriesM.find();
   }
});

Template.categoriesMedia.events({
    'click #a-delete': function(){
        Meteor.call('removeCategoriesMedia', this._id);
        
    }
});
