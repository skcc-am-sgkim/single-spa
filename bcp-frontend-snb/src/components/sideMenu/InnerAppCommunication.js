const InnerAppCommunication = () => {
  return (
    <>
      <p className="font-semibold text-lg mt-10">Inter-app communication</p>
      <ul>
        <li>
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("REACT", { detail: "react" })
              );
            }}
          >
            To React
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("VUE", { detail: "vue" }));
            }}
          >
            To Vue
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("NEXACRO", { detail: "nexacro" })
              );
            }}
          >
            To Nexacro
          </button>
        </li>
      </ul>
    </>
  );
};
export default InnerAppCommunication;
