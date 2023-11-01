import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const url = "https://thronesapi.com/api/v2/Characters";

const Search = () => {
    const [characters, setCharacters] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState("");

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
        setSearchResult(matchedCharacters);
    };

    const createCard = (data) => {
        return (
            <div className="card">
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
                    searchResult && (
                        <div className="searchResultWrapper">
                            {
                                searchResult?.map((ele, index) => {
                                    return (
                                        <div>
                                            {createCard(ele)}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Search;
