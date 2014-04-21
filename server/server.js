Meteor.startup(function() {
    if (Items.find().count() == 0) {
        for (var i = 0; i < 50; i++) {
            Items.insert({
                name: Fake.word()
            })
        };
    }
});