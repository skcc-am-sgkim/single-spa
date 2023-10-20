import { menuList } from "@bcp/frontend-shared";
import { Disclosure } from "@headlessui/react";
import RecursiveChildrenMenu from "./RecursiveChildrenMenu";

const Sitemap = () => {
  return (
    <>
      {menuList.map((m) => {
        return (
          <div key={m.name}>
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="py-2"
                    style={{ width: "100%", background: "pink" }}
                  >
                    {m.name}
                    <span class="material-symbols-outlined">
                      {open ? "expand_less" : "expand_more"}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className="text-gray-500"
                    style={{ display: "flex" }}
                  >
                    <RecursiveChildrenMenu data={m} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </>
  );
};

export default Sitemap;
