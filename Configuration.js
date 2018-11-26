function Configuration(caseS, sort, numResults, symbols) {
    var caseSensitive = caseS;
    var sortType = sort;
    var resultsPerPage = numResults;
    var noise = symbols;

    this.getCaseSensitive = function() {
        return caseSensitive;
    }

    this.setCaseSensitive = function(newCase) {
        caseS = newCase;
    }

    this.getSortType = function() {
        return sortType;
    }

    this.setSortType = function(sort) {
        sortType = sort;
    }

    this.getResultsPerPage = function() {
        return resultsPerPage;
    }

    this.setResultsPerPage = function(numResults) {
        resultsPerPage = numResults;
    }

    this.getNoise = function() {
        return noise;
    }

    this.setNoise = function(symbols) {
        noise = symbols;
    }
}

