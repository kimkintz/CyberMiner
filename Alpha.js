function Alphabetizer()
{
	var alphaLines = [];
	
	this.AlphaLines = function(lines)
	{
		alphaLines = lines.map(a => ({...a}));
		alphaLines.sort(function(a, b)
		{
		    var x = a.printLine().toLowerCase();
		    var y = b.printLine().toLowerCase();
		    if (x < y) {return -1;}
		    if (x > y) {return 1;}
		    return 0;
		});
		return alphaLines;
	}

	this.getAlphaLines = function()
	{
		return alphaLines;
	}
}