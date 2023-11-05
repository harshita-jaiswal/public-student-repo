import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Navbar from "./Navbar";

Chart.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(199, 199, 199, 0.8)",
    "rgba(83, 102, 255, 0.8)",
    "rgba(40, 159, 64, 0.8)",
    "rgba(210, 199, 199, 0.8)",
    "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(159, 159, 159, 1)",
    "rgba(83, 102, 255, 1)",
    "rgba(40, 159, 64, 1)",
    "rgba(210, 199, 199, 1)",
    "rgba(78, 52, 199, 1)",
];

const url = "https://thronesapi.com/api/v2/Characters";

const HouseChart = () => {
    const [houseCounts, setHouseCounts] = useState([]);
    const nameCorrections = {
        "Lanister": "House Lannister",
        "Targaryan": "House Targaryen",
        "Unkown": "Unknown",
        "House Lanister": "House Lannister",
        "None": "Unknown",
        "": "Unknown"
    };

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;

                const familyHouses = data.map((character) => character.family);
                familyHouses.forEach((house, index) => {
                    if (nameCorrections[house]) {
                        familyHouses[index] = nameCorrections[house];
                    }
                });

                const counts = familyHouses.reduce((acc, house) => {
                    let existingHouse = false;
                    for (let key in acc) {
                        if (key.includes(house)) {
                            acc[key] += 1;
                            existingHouse = true;
                            break;
                        }
                    }
                    if (!existingHouse) {
                        acc[house] = 1;
                    }
                    return acc;
                }, {});
                setHouseCounts(counts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApiData();
    }, []);

    const chartData = {
        labels: Object.keys(houseCounts),
        datasets: [
            {
                label: "Count: ",
                data: Object.values(houseCounts),
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Navbar />
            <h1 className="chartTitle">House of Characters Chart</h1>
            <div>
                <Doughnut data={chartData} options={{
                    responsive: true,
                    maintainAspectRatio: true,
                }} />
            </div>
        </div>
    );
};

export default HouseChart;
