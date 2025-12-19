import axios from "axios";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const getRoomId = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/chat/get-room-id"
        );
        console.log(response.data.id);
      } catch (error) {}
    };
    getRoomId();
  }, []);
  return <></>;
};

export default Chat;
