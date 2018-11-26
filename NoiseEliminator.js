function NoiseEliminator()
{
    var shiftedLines = [];
    //eliminates noise words and outputs array of strings
    //with noise words eliminated
    this.eliminateNoise = function(inputLines, noise)
    {
        shiftedLines = [];
        var temp = "";
        inputLines.forEach(element => {
            temp = element.printLine();
            shiftedLines.push(temp);
        });

        //loop through all noise words
        noise.forEach(function(noiseWord){
            //check if the description contains noiseWord
            if(shiftedLines[0].includes(noiseWord))
            {
                //Find the line that starts with the noise word
                shiftedLines.forEach(line => {
                    if(line.toUpperCase().startsWith(noiseWord.toUpperCase() + " "))
                    {
                        //remove the line from the array
                        shiftedLines = shiftedLines.filter(sl => sl !== line);
                    }
                });
            }
        });

        return shiftedLines;
    }
}