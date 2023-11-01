const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';


// create a mapping of name corrections
const nameCorrections = {
  "Lanister": "House Lannister",
  "Targaryan": "House Targaryen",
  "Unkown": "Unknown",
  "House Lanister": "House Lannister",
  "None": "Unknown",
  "": "Unknown"
};

//fetch api
const fetchApiData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const familyHouses = data.map((character) => character.family);

    familyHouses.forEach((house, index) => {
      if (nameCorrections[house]) {
        familyHouses[index] = nameCorrections[house];
      }
    });

    const houseCounts = familyHouses.reduce((acc, house) => {
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

    let counts = Object.values(houseCounts);
    let labels = Object.keys(houseCounts);

    return { labels, counts };
  } catch (error) {
    console.log("Error: ", error);
  }
};

fetchApiData(url).then(({ labels, counts }) =>
  renderChart(labels, counts)
);
const renderChart = (labels, count) => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Count:',
          data: count,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
