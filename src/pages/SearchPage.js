import React from "react";
import "./css/searchPage.css";
import { useStateValue } from "../contextAPI/StateProvider";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useGoogleSearch from "../api/useGoogleSearch";
function SearchPage() {
  let [{ term }, dispatch] = useStateValue();

  if (!term) term = "FiveSquareCo. In";
  const { data } = useGoogleSearch(term);
  //   console.log(data);
  return (
    <div className="searchPage">
      <div className="sp_header">
        <Link to="/">
          <img
            className="sp_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt="Google logo"
          />
        </Link>
        <div className="sp_headerBody">
          <Search hideButtons placeholder={term} />
          <div className="sp_opts">
            <div className="sp_optsLeft">
              <div className="sp_opt">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="sp_opt">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="sp_opt">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="sp_opt">
                <ShoppingCartIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="sp_opt">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="sp_opt">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="sp_opt">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="sp_optsRight">
              <div className="sp_opt">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="sp_opt">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="sp_res">
          <p className="sp_resCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) seconds for {term}
          </p>
          {data?.items.map((item) => (
            <div className="sp_result">
              <a className="sp_resLink" href={item.link}>
                {item.displayLink} ▶
              </a>
              <a className="sp_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="sp_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
