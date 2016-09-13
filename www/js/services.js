angular.module('starter.services', [])

.factory('Chats', function() {
  // JSON Coming from AWS DynamoDB

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Grocery 1',
    lastText: 'A wonderfull grocery',
    face: 'img/1.jpg'
  }, {
    id: 1,
    name: 'Grocery 2',
    lastText: 'A wonderfull grocery',
    face: 'img/2.jpg'
  }, {
    id: 2,
    name: 'Grocery 3',
    lastText: 'A wonderfull grocery',
    face: 'img/3.jpg'
  }, {
    id: 3,
    name: 'Grocery 4',
    lastText: 'A wonderfull grocery',
    face: 'img/4.jpg'
  }, {
    id: 4,
    name: 'Grocery 5',
    lastText: 'A wonderfull grocery',
    face: 'img/5.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
