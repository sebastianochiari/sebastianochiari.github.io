var ctx1 = document.getElementById("age");
var age = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64"],
        datasets: [{
            label: '# of Votes',
            data: [2, 34, 32, 17, 11, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 12
            }
        },
        tooltips: {
            displayColors: false
        }
    }
});

var ctx2 = document.getElementById("genre");
var genre = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["uomo", "donna"],
        datasets: [{
            label: '# of Votes',
            data: [80, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
            ],
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 12
            }
        },
        tooltips: {
            displayColors: false
        }
    }
});