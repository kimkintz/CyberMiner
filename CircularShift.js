/**
 * 
 */
function CircularShift()
{
	var shiftedLines = [];
	
	this.shiftLine = function(line)
	{
		shiftedLines = [];
		shiftedLines.push(line);
		var length = shiftedLines.length;
		for(j=shiftedLines.length; j<line.getWordCount() + length - 1; j++)
		{
			shiftedLines.push(new Line(line.printLine(), 0, 0));
			shiftedLines[j].changeColor(line.getColor());
			console.log(j);
			shiftedLines[j].changeOffset(j-length + 1);	
			console.log(shiftedLines[j].printLine());
		}
	}
	
	this.getShiftedLines = function()
	{
		return shiftedLines;
	}
}