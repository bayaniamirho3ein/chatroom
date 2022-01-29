const NameSpaceController = require('./controllers/NamespaceController');
const RoomController = require('./controllers/RoomController');

let ns1 = new NameSpaceController('عمومی', '/public');
let ns2 = new NameSpaceController('برنامه نویسی', '/programming');
let ns3 = new NameSpaceController('گرافیک', '/graphic');
let ns4 = new NameSpaceController('بازی سازی', '/gamedesign');

ns1.addRoom(new RoomController('friends', 'دوستانه'));
ns1.addRoom(new RoomController('coffeeshop', 'کافی شاپ'));

ns2.addRoom(new RoomController('nodejs', 'Node.js'));
ns2.addRoom(new RoomController('php', 'PHP'));
ns2.addRoom(new RoomController('csharp', 'c#'));
ns2.addRoom(new RoomController('python', 'Python'));
ns2.addRoom(new RoomController('go', 'Go'));

ns3.addRoom(new RoomController('photoshop', 'Photoshop'));
ns3.addRoom(new RoomController('illustrator', 'Illustrator'));
ns3.addRoom(new RoomController('paint', 'Paint'));

ns4.addRoom(new RoomController('gameplay', 'گیم پلی'))
ns4.addRoom(new RoomController('sound', 'صدا'))
ns4.addRoom(new RoomController('online', 'بازی آنلاین'));

module.exports = [ns1, ns2, ns3, ns4];