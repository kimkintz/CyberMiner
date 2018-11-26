results = [new Entry("http://www.facebook.com", "social networking site"),
new Entry("http://www.google.com", "search engine"),
new Entry("http://www.bing.com", "awful search engine"),
new Entry("http://www.twitter.com", "more social networks yay"),
new Entry("http://www.youtube.com", "video site"),
new Entry("http://www.amazon.com", "online store"),
new Entry("http://www.utdallas.edu", "site with a really really really really really very really long long long long description that takes up way way way more than one line so I can see where the end of this display column is")];

$(document).ready(function () {
    var itemsPerPage = 4;
    var display = new Display(results, itemsPerPage);
    display.displayPage();

    $("#pagebuttons").on('click', 'button', function () {
        display.changePage(this.id);
        display.displayPage();
    });

    $("#config").on('click', function() {
        var caseSensitive = $('input[name="case-sensitive"]').prop("checked");
        var sortType = $('input[name="sort"]:checked').val();
        var numPerPage = $('input[name="items-per-page"]').val();
        var noise = $('input[name="noise"]').val();
        var config = new Configuration(caseSensitive, sortType, numPerPage, noise);
        

        var str = " CaseSensitive: " + config.getCaseSensitive();
        str += " SortType: " + config.getSortType();
        str += " ResultsPerPage: " + config.getResultsPerPage();
        str += " Noise: " + config.getNoise();
        $("#configtest").append("<p>Configuration:" + str + "</p>");
    });
});
