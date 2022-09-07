Highcharts.setOptions({
  lang: {
    thousandsSep: '',
    numericSymbols: null,
  },
});

export const addFalabellaChart = () => {
  Highcharts.chart('falabella-chart-container', {
    chart: {
      zoomType: 'xy',
      marginTop: 50,
      height: 420,
      width: 870,
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
            textOutline: '0px contrast',
          },
          borderRadius: 2,
        },
        lineWidth: 1,
        borderWidth: 0,
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
        dataLabels: { color: '#133d4e' },
        data: [5.58, 9.6, 12.1, { y: 10, color: '#cc850a', dataLabels: { color: '#cc850a' } }],
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
        data: [60, 90, 120, 100],
      },
      {
        name: 'Client Gross Margin %',
        color: '#cc850a',
        marker: {
          symbol: 'circle',
        },
        data: [40.0, 54.2, 56.7, 61.7],
        tooltip: {
          valueSuffix: ' %',
        },
      },
    ],
  });
};
