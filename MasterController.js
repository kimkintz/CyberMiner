$( document ).ready(function() 
{
	var lineStore = new LineStorage();
    var cs = new CircularShift();
	var alpha = new Alphabetizer();
	var input = new Input();
	var out = new Output();
	
	//Action performed when line is submitted
    $( "#KWICForm" ).submit(function( event ) {
		if($("#textIn").val().trim() == "")
		{
			alert("Please input a line of words to index");
		}
		else
		{
			//Read input and store new line
    		input.readInput(lineStore);
    	
    	
    		var line = lineStore.getLine(lineStore.getLineCount()-1);
    		cs.shiftLine(line);
    		var shiftedLines = cs.getShiftedLines();
    		alpha.AlphaLines(shiftedLines);
    	
    		out.writeOutput(shiftedLines, alpha);
		}
    	event.preventDefault();
   	 
   });
});


