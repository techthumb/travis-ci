var Build = Backbone.Model.extend({
  initialize: function(attributes) {
    _.bindAll(this, 'toJSON');
    Backbone.Model.prototype.initialize.apply(this, arguments);
  },
  toJSON: function() {
    return _.extend(Backbone.Model.prototype.toJSON.apply(this), {
      eta: this.eta
    });
  }
});

var Builds = Backbone.Collection.extend({
  url: '/builds',
  model: Build,
  initialize: function() {
    _.bindAll(this, 'retrieve');
  },
  retrieve: function(id, callback) {
    var build = new Build({ id: id });
    this.add(build);
    build.fetch({ success: callback });
  }
});