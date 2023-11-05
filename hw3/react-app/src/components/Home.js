import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>Welcome!!!</h1>
                <p className="homeContent">
                    Search Game of Thrones Characters
                </p>
            </div>
        </div>
    );
};

export default Home;
