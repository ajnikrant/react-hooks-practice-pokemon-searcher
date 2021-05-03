import React from "react";

function Search({setSearch, search}) {


  function onChange(e){
    setSearch(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => onChange(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
