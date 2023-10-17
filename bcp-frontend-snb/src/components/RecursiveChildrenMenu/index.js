import { SubMenu } from "../sideMenu/SubMenu";
import CustomMenuItem from "./CustomMenuItem";

const RecursiveChildrenMenu = ({ data: { children, name, url } }) => {
  if (children)
    return (
      <>
        {children?.map((c) =>
          c.children ? (
            <SubMenu key={c.name} label={c.name} openTrigger="clickOnly">
              {c.children && <RecursiveChildrenMenu data={c} key={c.name} />}
            </SubMenu>
          ) : (
            <CustomMenuItem title={c.name} path={c.url} key={c.name} />
          )
        )}
      </>
    );
  return <CustomMenuItem title={name} path={url} key={name} />;
};

export default RecursiveChildrenMenu;
