function SetPeriod(period){
    
    chart.updateOptions({xaxis: {categories: category(period)},});
    chart.updateSeries([{data: Sales(period)},{data:  Visitors(period)}])
}

function Visitors(period)
{
    switch (period) {
        case "monthly":
            return [25000, 40000, 25000, 10000, 15000, 35000];
            break;
        case "daily":
            return [900, 1100, 2000, 1000, 500, 300, 1500];
            break;
        case "yearly":
            return [110000, 200000, 150000, 12000, 180000, 228000];
            break;
        default:
            break;
    }
}
function Sales(period)
{
    switch (period) {
        case "monthly":
            return   [2000, 3000, 2000, 4000, 2000, 3000];
            break;
        case "daily":
            return [50, 80, 20, 10, 80, 40, 50];
            break;
        case "yearly":
            return [1100, 2000, 1000, 1200, 10200, 2200];
            break;
        default:
            break;
    }
}

function category(period){
    switch (period) {
        case "monthly":
            chart.updateOptions({
                yaxis: [  {tickAmount: 5, min: 0,  max: 10000,
                     axisBorder: { show:false,},
                    labels: { offsetY:10, offsetX:-60,     
                      style: {      
                        colors: "#1efe00"     
                      }     
                    },    
                  },
                  { tickAmount: 5, min: 0, max: 50000,
                    labels: { offsetX:0, offsetY:0,
                      style: {
                        colors: "#dab045"
                      }
                    },
                  },]
            });
            return ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'];
            break;
        case "daily":
            chart.updateOptions({
                yaxis: [  {tickAmount: 5, min: 0, max: 1000,
                   labels: { offsetY:10, offsetX:-60,     
                     style: {      
                       colors: "#1efe00"     
                     }     
                   },    
                 },
                 { tickAmount: 5, min: 0, max: 3000,
                   labels: { offsetX:-10, offsetY:0,
                     style: {
                       colors: "#dab045"
                     }
                   },
                 },]
            });
            return ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
            break;
        case "yearly":
            chart.updateOptions({
                yaxis: [  {tickAmount: 5, min: 0,  max: 100000,
                    axisBorder: { show:false,},
                   labels: { offsetY:10, offsetX:-60,     
                     style: {      
                       colors: "#1efe00"     
                     }     
                   },    
                 },
                 { tickAmount: 5, min: 0, max: 1000000,
                   labels: { offsetX:0, offsetY:0,
                     style: {
                       colors: "#dab045"
                     }
                   },
                 },]
            });
            return ['2016', '2017', '2018', '2019', '2020', '2021'];
            break;
        default:
            break;
    }
}

function Createcharts() {
    chart = new ApexCharts(document.querySelector("#chart1"), options = {
        chart: {
            height: 350,     
            type: "line",
            background: '#34495e', 
            toolbar: {show: false},zoom: {enabled: false},},
        title: {
            text: 'Site Statics',
            align: 'left',       
            margin: 10,       
            offsetX: 0,    
            offsetY: 0,     
            floating: false,    
            style: {   
              fontSize:  '14px',   
              fontWeight:  'bold',
              color:  '#ffffff'       
            },      
        },
        stroke: {
            curve: 'straight'
          },
          grid: {   
                show: true,   
               borderColor:'#e5f3f7',  
               strokeDashArray:0,
                position:'back', 
                xaxis: {
                    lines: {
                       show:true
                    }        
                },   
                padding: {
                    top: 0,
                    right: 10,
                    bottom: 0,
                    left: -40
                },  
            },
          dataLabels: {
            enabled: false
          },
        colors: ["#1efe00","#dab045"],    
        markers: {
          size: 3,
            colors:'#ff00ff'
        },
        series: [ 
            {
                name: "Sales",
                data: [2000, 3000, 2000, 4000, 2000, 3000]
            },
            {
                name: "Visitors",
                data: [25000, 40000, 25000, 10000, 15000, 35000]
            },
          ],
          stroke: {
            width: [4, 4]
          },
        xaxis: {
        categories: ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'],
        labels: {
        style: {
        colors:  '#ffffff'
        }
        }
          },
          yaxis: [ 
            {categories: [0,2000,4000,6000,8000,10000],       
              axisBorder: {       
                show:false,       
              },
              labels: {       
                offsetY:10,  
                offsetX:-60,     
                style: {      
                  colors: "#1efe00"     
                }     
              },    
            },
            {
                categories: [0,10000,20000,30000,40000,50000],
              labels: {
              offsetX:0,
              offsetY:0,
                style: {
                  colors: "#dab045"
                }
              },
            }
          ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
        
              show: false
            }
          },
          legend: {
            horizontalAlign: "left",
          labels: {
                  colors:"#dab045" ,
              },
            offsetX: 40,
            markers: {
                  width: 12,
                  height: 12,
                  radius: 0,
              },
          }
    });
    chart.render();
	
	var options = {
      chart: {
        height: 350,     
		
        type: "bar",   
         
        background: '#1b93e1', 
        toolbar: {
                    show: false,
                 },
            zoom: {
                enabled: false
            },
        },
        title: {
          text: 'Users Trend',
          align: 'left',       
          margin: 10,       
          offsetX: 0,    
          offsetY: 0,     
          floating: false,    
          style: {   
            fontSize:  '14px',   
            fontWeight:  'bold',
            color:  '#ffffff'       
          },      
      },
        colors: ["#384a5e","#21f407"],
      series: [{
      name: 'New',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Sales',
      data: [76, 85, 100, 98, 87, 100, 91, 100, 94]
    },],
     
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
       
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
     categories: ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'],
    },
    yaxis: {
      show: true,
      tickAmount: 5,
      min: 0,
      max: 100,
      
      
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    legend: {
        
      horizontalAlign: "left",
  
      offsetX: 40,
  
      markers: {
  
            width: 12,
  
            height: 12,
  
            radius: 0,
            
            
          
  
        },
  
    }
    };

    var chart1 = new ApexCharts(document.querySelector("#chart2"), options);
    chart1.render();


    var options = {
      chart: {
        //width: 300,
        height: 350,
        type: "area",
        background: '#e84c3f',
        toolbar: {
          show: false,
       },
  zoom: {
      enabled: false
  },
 
      },
      stroke: {
      curve: 'straight',
    },
    markers: {
      size: 3,
        colors:'#ff00ff'
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 2,
        bottom: -25,
        left: -10
    },
    },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "Sales",
          data: [45, 52, 38, 45, 19, 23, 2]
        }
      ],
      title: {
        text: 'Today Sale',
        align: 'left',       
        margin: 10,       
        offsetX: 0,    
        offsetY: 0,     
        floating: false,    
        style: {   
          fontSize:  '14px',   
          fontWeight:  'bold',
          color:  '#ffffff'       
        },      
    },
    colors: ['#f1c30e'],
      fill: {
        
        opacity: 1,
        type: 'solid',
      },
      plotOptions: {
        area: {
            fillTo: 'origin',
        }
    },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ]
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      }
    };
    
    var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
    
    chart3.render();
    
}
