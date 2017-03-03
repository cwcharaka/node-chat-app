var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message){
  var formatedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formatedTime
  });
  jQuery('#messages').append(html);
});

socket.on('newLocation', function (message) {
  var formatedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template, {
    url: message.url,
    from: message.from,
    createdAt: formatedTime
  });
  jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function (e){
  e.preventDefault();
  var messageTextbox = jQuery('[name=message]')
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function(){
    messageTextbox.val('')
  });
});

var locationButton = jQuery('#send-location')
locationButton.on('click', () => {
  if(!navigator.geolocation){
    return alert('Geolocation not supported by your brower')
  }

  locationButton.attr('disabled', 'disabled').text('Sending Location..')
  navigator.geolocation.getCurrentPosition(function(position){
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  },  function () {
    locationButton.removeAttr('disabled').text('Send Location');
    alert('Unable to fetch the location')
  })
});
