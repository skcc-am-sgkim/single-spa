/* eslint-disable no-console */
import React from "react";
import Theme from "./components/theme";
import MessageModal from "./components/message-modal";
import useMessageOpenStore from "./stores/message-open";

export default function Root(props) {
  const [message, setMessage] = React.useState("message test");
  const { messageOpen, setMessageOpen } = useMessageOpenStore();

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.source === "nexacro" || event.data.event === "component") {
        setMessage(event.data.payload.component);
        setMessageOpen(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div>
        <span>gnb</span>
        <a href="/" className="px-5 underline">
          home
        </a>
      </div>
      <div className="flex justify-between items-center">
        <Theme />
        <MessageModal className={"ml-3"} open={messageOpen} message={message} />
      </div>
    </div>
  );
}
