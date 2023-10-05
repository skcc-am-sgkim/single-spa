/* eslint-disable no-console */
import React, { Fragment, useEffect } from "react";
import classnames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import useMessageOpenStore from "../stores/message-open";

function Message({ message, open, className }) {
  const { messageOpen, setMessageOpen } = useMessageOpenStore();

  useEffect(() => {
    if (open) {
      setMessageOpen(open);
    }
  }, [open, setMessageOpen]);

  function closeModal() {
    setMessageOpen(false);
  }

  function openModal() {
    setMessageOpen(true);
  }

  return (
    <>
      <div
        className={classnames("flex items-center justify-center", className)}
      >
        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button> */}

        <Transition appear show={messageOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Message
                    </Dialog.Title>
                    <div className="mt-2">
                      <pre className="text-sm text-gray-500">{message}</pre>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

Message.defaultProps = {
  message: "Default Message",
  open: false,
};

export default Message;
