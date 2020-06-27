import React from "react";
import "../Css/Search.css";

const Search = () =>{
    return(
        <div className="formContainer">
        <form>
            <div className="searchBar">
                <input className="searchInput" type="text"/>
                <input className="submit" type="submit"/>
            </div>
        </form>
        </div>
    )

}

export default Search;