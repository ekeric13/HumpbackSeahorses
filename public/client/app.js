//initialize
var socket = io();

$(function(){
  var messages = new Messages();
g  new SubmitView({el: $('.submitView'), collection: messages});
  new MessagesView({el: $('#messagesView'), collection: messages});
});
