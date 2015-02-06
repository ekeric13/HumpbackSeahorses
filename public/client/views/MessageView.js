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
    this.$el.find('span.text').toggle();
    this.$el.find('span.alt-text').toggle();
  }
});



