Highcharts.setOptions({
  lang: {
    thousandsSep: '',
    numericSymbols: null,
  },
});

export const addAxisChart = () => {
  Highcharts.chart('axis-chart-container', {
    chart: {
      zoomType: 'xy',
      marginTop: 50,
      height: 380,
      width: 950,
      backgroundColor: 'white',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '10px',
            fontWeight: 'bold',
          },
          borderRadius: 2,
        },
        lineWidth: 1,
        animation: {
          duration: 2000,
        },
      },
    },
    xAxis: [
      {
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        categories: ['2019', '2020', '2021', '2022(YTD)'],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        softMin: 0,
        softMax: 100,
        gridLineColor: '#BABABA',
        startOnTick: false,
        endOnTick: false,
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        title: {
          text: '',
        },
        opposite: true,
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        softMin: 0,
        softMax: 125,
        visible: false,
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        softMin: 0,
        startOnTick: false,
        endOnTick: false,
        softMax: 125,
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        title: {
          text: '',
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      floating: true,
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '10px',
        fontWeight: 'normal',
      },
      x: 0,
      y: 0,
      backgroundColor: 'white',
    },
    series: [
      {
        name: 'Revenue',
        type: 'column',
        yAxis: 1,
        color: '#003d50',
        data: [5.96, 8.65, 13.28, { y: 10.68, color: '#6b9e78' }],
        tooltip: {
          valueSuffix: ' Mn',
        },
      },
      {
        name: 'Average Headcount',
        yAxis: 2,
        color: '#f2617a',
        marker: {
          symbol: 'circle',
        },
        data: [74, 107, 161, 222],
      },
      {
        name: 'Client Gross Margin %',
        color: '#cc850a',
        marker: {
          symbol: 'circle',
        },
        data: [62.0, 66.1, 65.3, 61.3],
        tooltip: {
          valueSuffix: ' %',
        },
      },
    ],
  });
};
