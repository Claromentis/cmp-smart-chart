var smart_chart = smart_chart || {};

document.write('<div id="' + smart_chart.name + '"></div>');

(function($){
    var options = {
        chart: {
            renderTo: smart_chart.name,
            defaultSeriesType: smart_chart.type
        },
        title: {
            text: smart_chart.title
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: smart_chart.yAxis
            }
        },
        series: []
    };

    $.get(smart_chart.file, function(data) {
        // Split the lines
        var lines = data.split('\n');
        
        // Iterate over the lines and add categories or series
        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            
            // header line contains categories
            if (lineNo === 0) {
                $.each(items, function(itemNo, item) {
                    if (itemNo > 0) options.xAxis.categories.push(item);
                });
            }
            
            // the rest of the lines contain data with their name in the first 
            // position
            else {
                var series = {
                    data: []
                };
                $.each(items, function(itemNo, item) {
                    if (itemNo == 0) {
                        series.name = item;
                    } else {
                        series.data.push(parseFloat(item));
                    }
                });
                
                options.series.push(series);
        
            }
            
        });
        
        // Create the chart
        var chart = new Highcharts.Chart(options);
    });
})(jQuery)