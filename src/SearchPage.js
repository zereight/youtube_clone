import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="배고픈개발자"
        verified
        subs="1k"
        noOfVideo={30}
        description="좋은 개발자가 될수있어 너도"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/rJjaqSTzOxI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBcR79T-7HGacLXfkkU2WG41Xn2rw"
        channel="배고픈개발자"
        views="1k"
        subs={30}
        description="좋은 개발자가 될수있어 너도"
        timestamp="1 day ago"
        title="가즈아"
      />
    </div>
  );
}

export default SearchPage;
