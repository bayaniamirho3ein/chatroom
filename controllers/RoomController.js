class RoomController {

    constructor(name, title){
        this.name = name;
        this.title = title;
        this.history = [];
    }

    addMessage(message){
        this.history.push(message);
    }
    
}

module.exports = RoomController;