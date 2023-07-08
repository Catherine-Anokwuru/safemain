import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import sublinks, { sublinks2, sublinks3 } from "./data";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="navlinks">
      {sublinks.map((link) => {
        const { pageId, page, url } = link;
        return (
          <Link to={url} key={pageId} className="sublinks" onMouseEnter={() => setPageId(pageId)}>
            {page}
          </Link>
        );
      })}
      {sublinks2.map((link) => {
        const { pageId, page, url } = link;
        return (
          <Link to={url} key={pageId} className="sublinks" onMouseEnter={() => setPageId(pageId)}>
            {page}
          </Link>
        );
      })}
      {sublinks3.map((link) => {
        const { pageId, page, url } = link;
        return (
          <Link to={url} key={pageId} className="sublinks" onMouseEnter={() => setPageId(pageId)}>
            {page}
          </Link>
        );
      })}
    </div>
  );
};
export default Navlinks;
