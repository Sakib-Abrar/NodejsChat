$(function(){
    var socket = io.connect('http://localhost:3000')
    var message = $("#message")
    var username = $("#username")
    var sendMessage = $("#sendMessage")
    var sendUsername = $("#sendUsername")
    var chatroom = $("#chatroom")

    sendMessage.click(function(){
        console.log(username.val())
        socket.emit('newMessage',{username:username.val(),message:message.val()})
    })

    socket.on("newMessage", (data) => {
        console.log(data)
        chatroom.append("<p class='message'>"+data.username+":"+data.message+"</p>")
    })
});
