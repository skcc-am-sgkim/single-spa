/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { getFavoriteStatus, toggleFavorite } from "@bcp/frontend-shared";
import { useGetFavoriteMenu } from "@bcp/frontend-snb";
import { navigateToUrl } from "single-spa";
import { Disclosure } from "@headlessui/react";

const RecursiveChildrenMenu = ({ data }) => {
  if (data.children)
    return (
      <>
        {data.children?.map((c) => (
          <div key={c.name}>
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="py-2">
                    {c.children ? (
                      <>
                        {c.name}
                        <span class="material-symbols-outlined">
                          {open ? "expand_less" : "expand_more"}
                        </span>
                      </>
                    ) : (
                      <CustomLink data={c} />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    {c.children && <RecursiveChildrenMenu data={c} />}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </>
    );
  return <CustomLink data={data} />;
};

const CustomLink = ({ data: { url, name } }) => {
  const { list } = useGetFavoriteMenu();
  return (
    <>
      <button onClick={() => toggleFavorite({ path: url, title: name })}>
        <span
          class={
            "material-symbols-outlined" +
            (!getFavoriteStatus(url, list) ? "" : " fill")
          }
        >
          star
        </span>
      </button>
      <a href={url} onClick={navigateToUrl}>
        {name}
      </a>
    </>
  );
};

export default RecursiveChildrenMenu;
