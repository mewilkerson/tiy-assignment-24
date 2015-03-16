var Router = Backbone.Router.extend({

  routes: {
    "tracks/:genre" : "loadGenre"
  },

  initialize: function() {
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    $(".tracks").append(this.tracksView.el);

    // this.header = new HeaderView();
    // $(".nav").append(this.header.render().el);


    // this.sidebar = new SidebarView();
    // $(".sidebar").append(this.sidebar.render().el);
    // this.listenTo(this.sidebar, "genre:select", function(data){
    //   this.loadGenre(data);
    //   this.navigate("tracks/" + data);
    // });
  },

  loadGenre: function(genre) {
    this.tracks.loadGenre(genre);
  },


});