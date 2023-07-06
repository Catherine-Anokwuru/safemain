import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import sublinks from "./data";
import { Link } from "react-router-dom";

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
            const { page, pageId, links } = sublink;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, url, icon } = link;
                    return (
                      // <a key={id} href={url}>
                        <Link to={url} key={id} onClick={closeSidebar}>
                          {icon}
                          {label}
                        </Link>
                      // </a>
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
