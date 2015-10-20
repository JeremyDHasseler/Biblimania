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

// Route administration
Router.route('/admin/CategoryMedia', {name: 'admin.CategoryMedia'});

// Route administration
//Router.route('/admin/Media', {name: 'admin.Media'});


//Si l'utilisateur n'est pas authentifié, redirection vers la page d'erreur d'access
var requireLogin = function () {
    if (Meteor.user()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
}

Router.onBeforeAction(requireLogin, { only: ['admin'] });
