//returns rendered template
var MessageView = Backbone.View.extend({
  className: 'message-display',

  template : _.template(
    '<span>'+
      '<span class="badge lang-badge pull-right"><span class="pull-left fa fa-globe fa-2"></span></span>'+
      '<img src="client/images/avatars/<%- avatar %>.png">'+
      '<strong><%- username %></strong>@<%- room %> - <span class="text"><%- text %> <div style="display: none;" class="alt-text"><i>Original text:</i><br> <%- translations[lang] %></div> </span>'+
    '</span>'
    ),

  events: {
    'click span.badge': 'toggleLanguage',
    'mouseenter span.text': 'toggleLanguage',
    'mouseout span.text': 'untoggleLanguage'
  },

  render:function(){
    this.$el.html(this.template(this.model.attributes));
    var imSnd = new Audio('client/sounds/im.wav');
    imSnd.play();
    return this.$el;
  },

  toggleLanguage: function(e) {
    e && e.preventDefault();
    console.log("toggled");
    // var translationMessageView = new TranslationMessageView(model: this.model);
    // ("#originalText").append(translationMessageView )
    // this.$el.find('span.text').toggle();
    var _this = this;
    this.toggle = window.setTimeout(function(){
      console.log(_this, _this.$el);
       _this.$el.find('div.alt-text').toggle();
    }, 600);

    // this.$el.find('span.alt-text').delay(500).toggle().animate({ opacity: 1 }, 1000, 'swing', function() {this.$el.find('span.alt-text').toggle() } );

  },

  untoggleLanguage: function(e) {
    e && e.preventDefault;
    window.clearTimeout(this.toggle);
    this.$el.find('div.alt-text').css("display", "none");
  }
});



