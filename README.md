# Smart Object using HighCharts
Displays CSV data using HighCharts

## Usage

	<script type="text/javascript">
	<!--
	var smart_chart = {
		name: "test_obj",
		type: 'column', // bar|column|line|scatter|area
		title : "Fruit Consumption",
		yAxis : "Units",
		file : "/intranet/component/highchart/test.csv"
	}
	//-->
	</script>
	<unique_section name="/lib/highcharts/highcharts.js"><script type="text/javascript" src="/lib/highcharts/highcharts.js"></script></unique_section>
	<script type="text/javascript" src="/intranet/component/highchart/js/show_chart.js"></script>