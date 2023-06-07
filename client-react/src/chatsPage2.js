import {
    MultiChatSocket,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
import { MultiChatWindow } from 'react-chat-engine-advanced/dist/react-chat-engine-advanced.cjs.production.min';
  

const ChatsPage2 = (props) => {
    const chatProps = useMultiChatLogic(
        process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
        props.user.username,
        props.user.secret
      );
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};

export default ChatsPage2;
