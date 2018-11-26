function Display(searchResults, numItemsPerPage) {
    var currentPage = 1;
    var numPerPage = numItemsPerPage;
    var results = searchResults;
    var maxPageNum = Math.floor((results.length - 1) / numPerPage) + 1;

    // right now this puts HTML for the results in a div called searchresults
    // but it might be better to just have it return the HTML to Control
    this.displayPage = function() {
        $("#searchresults").empty();
        if(results.length == 0) {
            var noresults = '<p>Sorry, there are no results</p>';
            $("#searchresults").append(noresults);
        } else {
            var minIndex = (currentPage - 1) * numPerPage;
            var maxIndex = currentPage * numPerPage;
            for (var i = minIndex; (i < results.length && i < maxIndex); i++) {
                $("#searchresults").append(results[i].getHTML());
            }
            $("#page" + currentPage).addClass("active");
        }
    }

    this.changePage = function(btnID) {
        var oldPage = "page" + currentPage;
        $("#"+oldPage).removeClass("active");
        var newPage;
        if (btnID == "firstpage") {
            newPage = 1;
        } else if (btnID == "lastpage") {
            newPage = maxPageNum;
        } else {
            newPage = Number(btnID.substring(4));
        }
        currentPage = newPage;
        if(currentPage == 1)
            $("#firstpage").addClass("disabled");
        else
            $("#firstpage").removeClass("disabled");
        if(currentPage == maxPageNum)
            $("#lastpage").addClass("disabled");
        else
            $("#lastpage").removeClass("disabled");
    }

    this.pageButtonsHTML = function() {
        var numResults = results.length;
        var firstBtn = '<button id="firstpage" class="btn btn-light">First</button>';
        var lastBtn = '<button id="lastpage" class="btn btn-light">Last</button>';
        var btnHTML = firstBtn;
        var max = maxPageNum;
        for (var i = 1; i <= max; i++) {
            btn = '<button id="page' + i + '" class="btn btn-light">' + i + '</button>';
            btnHTML += btn;
        }
        btnHTML += lastBtn;
        btnHTML = '<div class="btn-group">'+btnHTML+'</div>';
        return btnHTML;
    }

    $("#pagebuttons").append(this.pageButtonsHTML());
    this.changePage("page1");
}