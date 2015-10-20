Template.media.helpers({
   allMedias: function(){
       return Media.find();
       
   }
});

Template.media.events({
    'click #a-delete': function(){
        Meteor.call('removeMedia', this._id);
        
    }
});

Template.registerHelper('author', function(userId) {
      Meteor.subscribe('userMail', userId);
      return Meteor.users.findOne(userId).emails[0].address; 
});

Template.registerHelper('categoryMedia', function(categoryMediaId) {
  return CategoriesM.findOne(categoryMediaId).name;
});