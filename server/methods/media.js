Media = new Mongo.Collection("media");

Meteor.publish('allMedias', function () {
    return Media.find();
});

Meteor.publish('userMail', function(userId){
    return Meteor.users.findOne(userId);
})

Meteor.methods({
    addMedia: function(media){
        media.authorId = Meteor.userId();
        media.createdAt = new Date();
        media.updatedAt = new Date();
        
        // Retourne l'identifiant du nouveau document ajouté
        Media.insert(media);
        
    },
    updateMedia: function(_id, media){
        Media.update(_id, media);
    },
    removeMedia: function(_id){
        Media.remove(_id);
    },
    findByUserId: function(userId){
        return Meteor.users.findOne(userId);
    }
});