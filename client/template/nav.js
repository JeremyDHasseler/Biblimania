Template.nav.events({
   'click a#a-deconnection': function(){
       // Déconnection de l'utilisateur courant 
       Meteor.logout();
       
       // redirection vers la page d'accueil
       Router.go('/'); 
   }
});

Template.nav.helpers({
    notLogged: function(){
        return !Meteor.user();
    }
});