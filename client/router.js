Router.configure({
  layoutTemplate: 'Layout' //Template de base
});
// Route Accueil
Router.route('/', function () {
  // Ajout à la route le template de base
  this.layout('Layout');

  // Affiche le template accueil
  this.render('accueil');
},{name: "accueil"});


    
