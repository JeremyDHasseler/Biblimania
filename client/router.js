Router.configure({
  layoutTemplate: 'Layout' //Template de base
});
/*
 *
 *      Routes Public
 *
 */

// Route Accueil
Router.route('/', {name: "accueil"});

// Route Besoin d'aide
Router.route('/besoin-d-aide', {name: 'besoinAide'});

// Route Connection
Router.route('/connection', {name: 'connection'});

// Route Creation Compte
Router.route('/creation-compte', {name: 'creationCompte'});

// Route oublie du mot de passe
Router.route('/oublie-mot-de-passe', {name: 'oublieMotDePasse'});

/*
 *
 *      Routes Administration
 *
 */

// Route administration
Router.route('/admin', {layoutTemplate: 'LayoutAdmin', name: 'admininistration'});

// Route administration
//Router.route('/admin/user', {name: 'admin.user'});

// Route categories-media
Router.route('/admin/categories-media', {layoutTemplate: 'LayoutAdmin', name: 'categoriesMedia'});

// Route categories-media/edition
Router.route('/admin/categories-media/edition/:_id',{
    layoutTemplate: 'LayoutAdmin', 
    name: 'categorieMediaUpdate',
    data: function () { return { data: CategoriesM.findOne(this.params._id)} }
});

// Route categories-media/nouveau
Router.route('/admin/categories-media/nouveau', function(){
    this.render('categorieMediaUpdate');
}, {layoutTemplate: 'LayoutAdmin', name: 'categorieMediaNew'});

// Route media
Router.route('/admin/media', {layoutTemplate: 'LayoutAdmin', name: 'media'});

// Route media/edition
Router.route('/admin/media/edition/:_id',{
    layoutTemplate: 'LayoutAdmin', 
    name: 'mediaUpdate',
    data: function () { return { data: Media.findOne(this.params._id)} }
});

// Route media/nouveau
Router.route('/admin/media/nouveau', function(){
    this.render('mediaUpdate');
}, {layoutTemplate: 'LayoutAdmin', name: 'mediaNew'});





//Si l'utilisateur n'est pas authentifié, redirection vers la page d'erreur d'access
var requireLogin = function () {
    if (Meteor.user()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
}

Router.onBeforeAction(requireLogin, { only: ['admin'] });
