Highcharts.setOptions({
  lang: {
    thousandsSep: '',
    numericSymbols: null,
  },
});

export const addIdfcChart = () => {
  Highcharts.chart('idfc-chart-container', {
    chart: {
      zoomType: 'xy',
      marginTop: 50,
      height: 400,
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
        softMax: 60,
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
        softMax: 250,
        visible: false,
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        softMin: 0,
        startOnTick: false,
        endOnTick: false,
        softMax: 250,
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
        data: [3.9, 13, 16.9, { y: 11.2, color: '#6b9e78' }],
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
        data: [65, 163, 200, 230],
      },
      {
        name: 'Client Gross Margin %',
        color: '#cc850a',
        marker: {
          symbol: 'circle',
        },
        data: [53.4, 52.4, 57.5, 57.0],
        tooltip: {
          valueSuffix: ' %',
        },
      },
    ],
  });
};
