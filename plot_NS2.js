//sources: 
//
//calls of csv files: get csv data: https://plot.ly/javascript/ajax-call/
// handling various csv s https://community.plot.ly/t/how-to-merge-two-plotly-graphs-plotted-by-using-rest-url-for-csv-data/2122
//
// Range slider and time selectors: https://plot.ly/javascript/range-slider/
//
//Resonsive layout: 
//https://plot.ly/javascript/responsive-fluid-layout/
//https://codepen.io/etpinard/pen/NrrOrY?editors=1010 (responsive resize)
//
//https://plot.ly/javascript/plotlyjs-function-reference/
//
// layout axis: https://plot.ly/javascript/multiple-axes/
//
// add traces function: https://plot.ly/javascript/plotlyjs-function-reference/


// Place urls for cvs files to Github
var url = 'https://github.com/knarisara/Test_Run/Resources_cleaned/phyto_data.csv';
var x1SeriesName = 'taxon_name';
var y1SeriesName = 'taxon_per_m3';
var y1NameToBeDisplayed = 'PP_Taxon_name';
var y1Mode = 'lines';
console.log(url)

// var url2 = 'https://github.com/knarisara/Test_Run/2014_apple_stock.csv';
// var x2SeriesName = 'AAPL_x';
// var y2SeriesName = 'AAPL_y';
// var y2NameToBeDisplayed = 'Apple stock price';
// var y2Mode = 'lines';


//var url3 = 'XXXX';
//var url4 = 'XXXX';
//var url5 = 'XXXX';


// Section with buttons for year selection
var yearOptions = {
  buttons: [{
    step: 'year'== 2020,
    stepmode: 'backward',
    count: 1,
    label: '2020'
  }, {
    step: 'year'== 2019,
    stepmode: 'backward',
    count: 1,
    label: '2019'
  }, {
    step: 'year'== 2018,
    stepmode: 'backward',
    count: 1,
    label: '2018'
  }, {
    step: 'year'== 2017,
    stepmode: 'backward',
    count: 1,
    label: '2017'
  }, {
    step: 'all',
  }],
};

// Create layout variable
// var layout = {
//   xaxis: {
//     rangeselector: selectorOptions,
//     rangeslider: {}
//   },
//   yaxis: {
//     fixedrange: true,
//     side: 'right'
//   },
//   showlegend: false
// };

// Create view options
var options ={
  showLink: false,
  displayModeBar: false
};

// // Next piece of code deals with responsiveness
// var d3 = Plotly.d3;
// var WIDTH_IN_PERCENT_OF_PARENT = 100,
//   HEIGHT_IN_PERCENT_OF_PARENT = 97;

// var gd3 = d3.select("div[id='myDiv']")
//   .style({
//     width: WIDTH_IN_PERCENT_OF_PARENT + '%',
//     'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
//     height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
//     'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
//   });

// var my_Div = gd3.node();

// // main code, reads cvs files and creates traces and combine them in data

// function makeplot() {
//   Plotly.d3.csv(url2, function(data){ processData(data,x2SeriesName,y2SeriesName,y2NameToBeDisplayed) } );
// };

// function processData(allRows,xLabel,yLabel,yTraceName) {

//   console.log(allRows.length);
//   var x = [], y = [];

//   for (var i=0; i<allRows.length; i++) {
//     row = allRows[i];
 
//     x.push(row[xLabel]);
//     y.push(row[yLabel]);
//     if(i === 0) {
//       console.log(i);
//       console.log(row);
//     }
//   }
//   makePlotly( x, y,  yTraceName);
// }

// function makePlotly( x, y, yTraceName){
//   var traces = [{
//     x: x,
//     y: y,
//     name: yTraceName
//   }];

//   Plotly.newPlot(myDiv, traces,layout,options);
// };

// makeplot();

// //instruction resizes plot
// window.onresize = function() {
//   Plotly.Plots.resize(my_Div);
// };