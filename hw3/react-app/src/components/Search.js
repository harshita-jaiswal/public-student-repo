import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const url = "https://thronesapi.com/api/v2/Characters";

const Search = () => {
    const [characters, setCharacters] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState("");
    const [noResult, setNoResult] = useState("")

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await axios.get(url);
                setCharacters(response.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchApiData();
    }, []);

    const handleSearch = () => {
        const matchedCharacters = characters.filter((character) =>
            character.fullName.toLowerCase().includes(searchCharacter.toLowerCase())
        );
        if (matchedCharacters.length === 0) {
            setNoResult("No Data Found!!! Try Again.")
            setSearchResult([])
        } else {
            setNoResult("")
            setSearchResult(matchedCharacters)
        }
    };

    const createCard = (data, index) => {
        return (
            <div key={index} className="card">
                <img src={data.imageUrl} alt={data.fullName} height={250} width={225} />
                <h2>{data.fullName}</h2>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="search">
                <h1 className="searchTitle">Search for Characters</h1>
                <div className="searchBarWrapper">
                    <input
                        className="searchBar"
                        type="text"
                        placeholder="Search Character"
                        value={searchCharacter}
                        onChange={(e) => setSearchCharacter(e.target.value)}
                    />
                    <button className="searchBtn" onClick={handleSearch}>Search</button>
                </div>
                {
                    searchResult.length ? (
                        <div className="searchResultWrapper">
                            {
                                searchResult?.map((ele, index) => {
                                    return createCard(ele, index)
                                })
                            }
                        </div>
                    ) : <div className="noResult">{noResult}</div>
                }
            </div>
        </>
    );
};

export default Search;