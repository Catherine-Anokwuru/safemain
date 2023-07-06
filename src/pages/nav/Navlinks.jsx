import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="navlinks">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button key={pageId} className="sublinks" onMouseEnter={() => setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
