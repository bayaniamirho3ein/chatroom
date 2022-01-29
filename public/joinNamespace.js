function joinNamespace(endpoint){
    
    if(nsSocket){
        nsSocket.close();
    }
    nsSocket = io(`http://localhost:3000${endpoint}`, {
        query : {
            username
        }
    });

    nsSocket.on('roomLoad', (roomData)=>{
        $('.roomsList').html('');
        roomData.forEach((room)=>{ 
            $('.roomsList').append(`
            
                <div class="btnJoin mt-2 joinRoom" name="${room.name}">
                    ${room.title}
                </div>
            
            `)
        })

        joinRoom(roomData[0].name);

    })

}

$(document).on('click', '.joinRoom', function(){
    joinRoom($(this).attr('name'));
})