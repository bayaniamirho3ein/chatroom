function joinRoom(roomName){

    nsSocket.emit('joinRoom', roomName);

    nsSocket.off('roomInformation');
    nsSocket.off('updateOnlineUsers');
    nsSocket.off('newMessageFromServer');
    
    nsSocket.on('roomInformation', (roomInfo)=>{
        $('.roomName').html(roomInfo.title);
        $('.chatBox').html('');
        roomInfo.history.forEach((message)=>{
            $('.chatBox').append(`
        
                <div class="messageBox">
                    <img src="${message.avatar}">
                    <p class="font-weight-bold userName">${message.username}</p>
                    <p>${message.text}</p>
                    <span class="time">${message.time}</span>
                </div>

            `)
        })

        $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);

    })
    nsSocket.on('updateOnlineUsers', (count)=>{
        $('.onlineCount').html(count);
    })
    nsSocket.on('newMessageFromServer', (message)=>{
        $('.chatBox').append(`
        
            <div class="messageBox">
                <img src="${message.avatar}">
                <p class="font-weight-bold userName">${message.username}</p>
                <p>${message.text}</p>
                <span class="time">${message.time}</span>
            </div>

        `)

        $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);

    })

}

$('.sendBtn').click(()=>{

    let newMessage = $('.messageInput').val();
    nsSocket.emit('newMessageFromClient', newMessage);
    $('.messageInput').val('');

})