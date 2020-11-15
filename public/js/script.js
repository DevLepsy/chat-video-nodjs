const video = document.getElementById("video")
const socket = io("/")
const myPeer = new Peer(undefined, {
    host:"peerjs-server.herukuapp.com",
    secure: true,
    port: 443,
});

function startVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(
        stream => (video.srcObject = stream),
        err => console.log(err)
    )
}

startVideo()

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
});

 

socket.on('user-connected', (userId) => {
    console.log("userId", userId  );
} )
