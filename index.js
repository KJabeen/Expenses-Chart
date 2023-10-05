
// fetch Data from json file. It is alwasys good a approach to fetch data from file.
getData();
  
        async function getData() {
            const response = await fetch('./data.json');
            console.log(response);
            const data = await response.json();
            console.log(data);
            length = data.length;
            console.log(length);
  
            labels = [];
            values = [];
            for (i = 0; i < length; i++) {
                labels.push(data[i].day);
                values.push(data[i].amount);
            }
// After fetching data, generate Chart 

            function generateChart() {
                const info = {
                  labels: data.map((chart) => chart.day),
                  datasets: [
                    {
                      data: data.map((chart) => chart.amount),
                      // backgroundColor: "hsl(10, 79%, 65%)",
                      
                      backgroundColor: color => {
                        console.log(color)
                      let colors= color.index === 2 ? ' rgb(118, 181, 188,1)': 'hsl(10, 79%, 65%,1)' ;
                      return colors;
                      },
                      
                      borderRadius: 5,
                      borderSkipped: false,
                      
                      hoverBackgroundColor: color => {
                        console.log(color)
                      let colors= color.index === 2 ? 'hsl(186, 34%, 60%,0.6)': 'hsl(10, 79%, 65%,0.6)' ;
                      return colors;
                      },
                    },
                  
                  ],
                };
                const titleTooltip = (e) => `$${e[0].formattedValue}`;
                const labelTooltip = (e) => "";
                
                const options = {
                  scales: {
                    y: {
                      ticks: {
                        display: false,
                      },
                     
                      grid: {
                        display: false,
                        drawTicks: false,
                        drawBorder: false,
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                    },
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                        yAlign: "bottom",
                        xAlign: "center",
                        titleAlign: 'center',
                        caretSize: 0,
                        cornerRadius: 3,
                        
                        displayColors: false,
                        backgroundColor: 'hsl(25, 47%, 15%)',
                      callbacks: {
                        
                        title: titleTooltip,
                        label: labelTooltip,
                      },
                    },
                  },
                };
                const config = {
                  type: "bar",
                  data: info,
                  options,
                };
                new Chart(document.getElementById("bar-chart"), config);
              }
              generateChart();
  
        }
