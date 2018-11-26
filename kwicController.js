function kwicController()
{
	var lineStore = new LineStorage();
    var cs = new CircularShift();
	var alpha = new Alphabetizer();
	var noiseEliminator = new NoiseEliminator();
	
	//Action performed when line is submitted
   this.index = function(input, noise)
   {
		if(input.trim() == "")
		{
			alert("Please input a line of words to index");
		}
		else
		{
            var newLine = input.trim();
			
    		lineStore.addLine(newLine);
    	
    	
    		var line = lineStore.getLine(lineStore.getLineCount()-1);
    		cs.shiftLine(line);
			var shiftedLines = cs.getShiftedLines();
			var filteredLines = noiseEliminator.eliminateNoise(shiftedLines, noise);
    		//alpha.AlphaLines(shiftedLines);
    	
    		return filteredLines;//alpha.getAlphaLine();
		}
    	event.preventDefault();
    }
 
}


