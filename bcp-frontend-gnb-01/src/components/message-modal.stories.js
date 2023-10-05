import Message from "./message-modal";

export default {
  title: "Components/MessageModal",
  component: Message,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export const Default = {
  args: {
    message: "headlessui test",
    open: true,
  },
};
