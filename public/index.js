const username = prompt('What is your name ?');
const socket = io('http://localhost:3000', {
    query : {
        username
    }
});
var nsSocket = null;

socket.on('connect', ()=>{
    
    socket.on('namespaceLoad', (nsData)=>{
        $('.namespacesList').html('');
        nsData.forEach(namespace => {
            $('.namespacesList').append(`
            
                <div class="btnJoin mt-2 joinNameSpace" ns="${namespace.endpoint}">
                    ${namespace.title}
                </div>

            `)
        });

        joinNamespace(nsData[0].endpoint);

    })

})

$(document).on('click', '.joinNameSpace', function(){
    joinNamespace($(this).attr('ns'));
})