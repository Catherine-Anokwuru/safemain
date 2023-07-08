import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import sublinks, { sublinks2 } from "./data";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const currentPage2 = sublinks2.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <>
      <div className={currentPage ? "submenu show-submenu" : "submenu"} onMouseLeave={handleMouseLeave} ref={submenuContainer} key={1}>
        <h5>{currentPage?.page}</h5>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns: currentPage?.links?.length == 3 ? "1fr 1fr 1fr" : "1fr 1fr",
          }}
        >
          {currentPage?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <>
                <HashLink to={url} key={id} onClick={() => setPageId(null)}>
                  {icon}
                  {label}
                </HashLink>
              </>
            );
          })}
        </div>
      </div>
      <div className={currentPage2 ? "submenu show-submenu" : "submenu"} onMouseLeave={handleMouseLeave} ref={submenuContainer} key={2}>
        <h5>{currentPage2?.page}</h5>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns: currentPage2?.links?.length == 3 ? "1fr 1fr 1fr" : "1fr 1fr",
          }}
        >
          {currentPage2?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <>
                <Link to={url} key={id} onClick={() => setPageId(null)}>
                  {icon}
                  {label}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Submenu;
