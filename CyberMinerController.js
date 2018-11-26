$(document).ready(function(){
    //initialize objects
    //var display = new Display();
    var defaultNoiseWords = ["a", "of", "the", "at"];
    var configuration = new Configuration(false, 0, 10, defaultNoiseWords);
    //var databaseControl = new DatabaseControl();
    var kwicCtrl = new kwicController();

    
    

    //submit search query
    $("#search").submit(function(){
        //get search value
        var search = $("#textIn").val();
        //query database
        var results = databaseControl.search(search);
        //get number of results per page
        var numPerPage = configuration.getResultsPerPage();
        //display results
        display.displayResults(results, numPerPage);

        
    });

    //submit change to configuration
    $("#config").click(function(){
        //Get data from form
        var caseSensitive = $('input[name="case-sensitive"]').prop("checked");
        var sortType = $('input[name="sort"]:checked').val();
        var numPerPage = $('input[name="items-per-page"]').val();
        var noise = $('input[name="noise"]').val();

        //set sort type based on string value
        if(sortType == "alpha")
        {
            configuration.setSortType(0);
        }
        else
        {
            configuration.setSortType(1);
        }
        //set other configuration settings
        configuration.setCaseSensitive(caseSensitive);
        configuration.setResultsPerPage(numPerPage);
        configuration.setNoise(noise.split(" "));
    });
    
    //submit KWIC indexing
    $("#KWICform").submit(function(){
        alert("submitted");
        var url = $("#url").val();
        var desc = $("#description").val();
        var noiseWords = configuration.getNoise();
        
        var shiftedLines = kwicCtrl.index(desc, noiseWords);

        databaseControl.add(url, desc, shiftedLines);
        
    });

    /*
    //Delete url from database
    $().click(function(){
        var url = "";

        databaseControl.delete(url);
    });
    */
});