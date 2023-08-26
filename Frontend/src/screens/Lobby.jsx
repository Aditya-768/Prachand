import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import '../styles/videoconferencingStyles.css';
const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    // <div className="container">
      
    // </div>
    <div className="lobby-container">
      <h1 className="color">LOBBY</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          // placeholder="123@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
       
        <br />
        <div>
           <label htmlFor="room">Room Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        </div>
       
        <br />
        <button className="button">Join Room</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
