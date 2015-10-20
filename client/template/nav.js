Template.nav.events({
   'click a#a-deconnection': function(){
       // Déconnection de l'utilisateur courant 
       Meteor.logout(function(){
          Router.go('accueil');
       });
   }
});

Template.nav.helpers({
    notLogged: function(){
        return !Meteor.user();
    }
});