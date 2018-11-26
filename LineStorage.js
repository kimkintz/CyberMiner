function LineStorage()
{
	var lines = [];
	var lineCount = lines.length;
	
	this.addLine = function(inputLine)
	{
		var newLine = new Line(inputLine, lineCount + 1, 0);
		lines.push(newLine);
		lineCount = lineCount + 1;
	}
	
	this.getLine = function(lineNum)
	{
		return lines[lineNum];
	}
	
	this.getLineCount = function()
	{
		return lineCount;
	}
	
}

function Line(line, clr, offst)
{
	var inputLine = line;
	var words = line.split(" ");
	var color = clr;
	var wordCount = words.length;
	var offset = offst;
	
	this.getInputLine = function()
	{
		return inputLine;
	}
	
	this.getWordCount = function()
	{
		return wordCount;
	}	
	
	this.getColor = function()
	{
		return color;
	}
	
	this.changeColor = function(newColor)
	{
		color = newColor;
		return color;
	}
	
	this.changeOffset = function(newOffset)
	{
		offset = newOffset;
		return offset;
	}
	
	this.getOffset = function()
	{
		return offset;
	}
	
	this.printLine = function()
	{
		var outString = "";
		for(i=offset; i<offset + wordCount; i++)
		{
			if(i == offset+wordCount - 1 && i < wordCount)
			{
				outString = outString + words[i];
			}
			else if(i == offset+wordCount - 1 && i>=wordCount)
			{
				outString = outString + words[i - wordCount];
			}
			else if(i < wordCount)
			{
				outString = outString + words[i] + " ";
			}
			else
			{
				outString = outString + words[i - wordCount] + " ";
			}
		}
		return outString;
	}
}