import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import sublinks, { sublinks2, sublinks3 } from "./data";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink) => {
            const { page, pageId, links, url } = sublink;
            return (
              <article key={pageId}>
                <Link to={url} onClick={closeSidebar}>
                  <h4>{page}</h4>
                </Link>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, url, icon } = link;
                    return (
                      <HashLink to={url} key={id} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </HashLink>
                    );
                  })}
                </div>
              </article>
            );
          })}
          {sublinks2.map((sublink) => {
            const { page, pageId, links, url } = sublink;
            return (
              <article key={pageId}>
                {/* <Link to={url} onClick={closeSidebar}> */}
                <h4>{page}</h4>
                {/* </Link> */}
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, url, icon } = link;
                    return (
                      <Link to={url} key={id} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
          {sublinks3.map((sublink) => {
            const { page, pageId, links, url } = sublink;
            return (
              <article key={pageId}>
                {/* <Link to={url} onClick={closeSidebar} key={pageId} > */}
                <h4>{page}</h4>
                {/* </Link> */}
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, url, icon } = link;
                    return (
                      <Link to={url} key={id} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
