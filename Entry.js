function Entry(urlstring, desc) {
    var url = urlstring;
    var description = desc;

    this.getURL = function() {
        return url;
    }

    this.getDescription = function() {
        return description;
    }

    this.getHTML = function() {
        var title = '<a href="' + url + '">' + url + '</a>';
        var desc = '<p>' + description + '</p>';
        return title + '<br />' + desc;
    }
}