// Plot Current ratio chart

var currentRatio = echarts.init(document.getElementById('currentRatioChart'));
var currentRatiooption = {
    series: [
        {
            type: 'gauge',
            min: 0,     
            max: 3,
            detail: { formatter: '{value}' },
            data: [{ value: 1.86, name: '1.86%' }],
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.62, '#040C7D'],  // Customize the color for the range [0.8, 1.0]
                        [1, 'grey'],       // Set the color to blue for the value 1.86
                   
                    ],
                },
            },
            pointer: { width: 4 },
        },
    ],
};
currentRatio.setOption(currentRatiooption);


// Plot Days Sales Inventory chart

var daysSalesChart = echarts.init(document.getElementById('daysSalesChart'));
var daysSalesChartoption = {
    series: [
        {
            type: 'gauge',
            min: 0,     
            max: 31,
            detail: { formatter: '{value}' },
            data: [{ value: 10, name: '10 Days' }],
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.34, '#E5A704'],  // Customize the color for the range [0.8, 1.0]
                        [1, 'grey'],       // Set the color to blue for the value 1.86
                   
                    ],
                },
            },
            pointer: { width: 4 },
        },
    ],
};
daysSalesChart.setOption(daysSalesChartoption);




// Plot Days Sales Outstanding chart

var daysSalesOutstandingChart = echarts.init(document.getElementById('daysSalesOutstanding'));
var daysSalesOutstandingoption = {
    series: [
        {
            type: 'gauge',
            min: 0,     
            max: 31,
            detail: { formatter: '{value}' },
            data: [{ value: 7, name: '7 Days' }],
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.24, 'maroon'],  // Customize the color for the range [0.8, 1.0]
                        [1, 'grey'],       // Set the color to blue for the value 1.86
                   
                    ],
                },
            },
            pointer: { width: 4 },
        },
    ],
};
daysSalesOutstandingChart.setOption(daysSalesOutstandingoption);


// Plot Days Pay Outstanding chart

var daysPayOutstandingChart = echarts.init(document.getElementById('daysPayOutstanding'));
var daysPayOutstandingoption = {
    series: [
        {
            type: 'gauge',
            min: 0,     
            max: 31,
            detail: { formatter: '{value}' },
            data: [{ value: 28, name: '28 Days' }],
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.9, 'green'], 
                        [1, 'grey'],       
                   
                    ],
                },
            },
            pointer: { width: 4 },
        },
    ],
};
daysPayOutstandingChart.setOption(daysPayOutstandingoption);


// total accounts receivable and payable aging bar graph

var chartDom1 = document.getElementById('bar-chart');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', 'Current', '1-30', '31-60','61-90','91+'],
      ['Current', 2.49, 1.34],
      ['1-30', 2.03, 81.16],
      ['31-60', 1.86, 0.86],
      ['61-90', 1.72, 0.79],
      ['91+', 1.72, 0.53],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {
        data: ['0', '500k', '1m', '1.50m', '2m', '2.50m', '3m']
      
  },
  series: [{ type: 'bar' }, { type: 'bar' }]
};

option1 && myChart1.setOption(option1);

// net working capital vs gross working capital
var chartDom = document.getElementById('stacked-column-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mosn', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Direct',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        
    ]
};

option && myChart.setOption(option);



// Profit and Loss Summary
var data = [
    {
        name: 'Player 1',
        type: 'line',
        stack: 'score',
        data: [80, 85, 90, 95, 92, 88],
    },
    {
        name: 'Player 2',
        type: 'line',
        stack: 'score',
        data: [70, 75, 78, 82, 79, 85],
    },
    {
        name: 'Player 3',
        type: 'line',
        stack: 'score',
        data: [90, 92, 88, 86, 91, 89],
    },
];
var myChart = echarts.init(document.getElementById('chart'));
var option = {
    title: {
        text: '',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['Player 1', 'Player 2', 'Player 3'],
    },
    xAxis: {
        type: 'category',
        data: ['Games 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5', 'Game 6'],
    },
    yAxis: {
        type: 'value',
        name: 'Score',
    },
    series: data,
};
myChart.setOption(option);


