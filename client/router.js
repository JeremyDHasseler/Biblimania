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

// Route Besoin d'aide
Router.route('/besoin-d-aide', function(){
    this.layout('Layout');
    
    this.render('besoinDAide');
});
// Route Connection
Router.route('/connection', function () {
  this.layout('Layout');

  this.render('connection');
});
// Route Creation Compte
Router.route('/creation-compte', function(){
   this.layout('Layout');
    
    this.render('creationCompte');
});

Router.route('/oublie-mot-de-passe', function(){
    this.layout('Layout')
    
    this.render('oublieMotDePasse');
});

    
