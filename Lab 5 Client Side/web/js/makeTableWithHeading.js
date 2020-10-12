
/*
 * This function expects to find two properties in params (see how it's called from index.html):
 *   - objList (an arbitrary array of objects)
 *   - heading (a string that will be used as a heading).
 *   
 This function shall return a div that contains a header (e.g., "h2" tag) with the text 
 passed in (params.heading) and an HTML table full of the values found in params.objList
 (pattern your code after 32_makeTable_prettier - your HTML table should have
 column headings, actual images, and alignment according to data type. 
 *   
 * Normally, you would add some code to check the params object, to be sure it had what you expected 
 * and possibly set some default values, but for this activity, you can assume that the params object 
 * has the properties you expect... 
 * 
 */

function makeTableWithHeading(params) {
    
    var div = document.createElement("div");
    var list = params.objList;
    var heading = document.createElement("h2");
    heading.innerHTML = params.heading;
    div.appendChild(heading);
 
    // Add data as th or td (based on eleType) to row of HTML table.
    function addToRow(eleType, row, data, align) {
        var ele = document.createElement(eleType);
        ele.innerHTML = data;
        ele.style.textAlign = align;
        row.appendChild(ele);
        return ele;  // future code may need a reference to this dom object
    }

    function alignment(val) {

        // check if date
        var parsedDate = Date.parse(val);
        if (isNaN(val) && (!isNaN(parsedDate))) {
            return "center";
        }

        // check if image
        if (val.includes(".png") || val.includes(".jpg")) {
            console.log('is center');
            return "center";
        }

        // check if numeric (remove $ and , and then check if numeric)
        var possibleNum = val.replace("$", "");
        possibleNum = possibleNum.replace(",", "");
        if (isNaN(possibleNum)) {
            console.log("not a num - left");
            return "left";
        }

        return "right"; // it's a number

    } // alignment

    function prettyColumnHeading(propName) {

        if (propName.length === 0) {
            return "";
        }

        // studentId --> Student Id
        // capitalize first letter
        var newHdg = propName.charAt(0).toUpperCase();
        // iterate through all characters, inserting space before any capital letters.
        for (var i = 1; i < propName.length; i++) {
            if (propName.charAt(i) < "a") {
                newHdg += " ";
            }
            newHdg += propName.charAt(i);
        }

        return newHdg;
    } // prettyColumnHeading


    // Main Program.

    // Create a new HTML table (DOM object) and append 
    // that into the page. 
    var newTable = document.createElement("table");

    // Create a header for table and put a row in the header
    var tableHead = document.createElement("thead");
    newTable.appendChild(tableHead);
    var tableHeadRow = document.createElement("tr");
    tableHead.appendChild(tableHeadRow);

    // create one column header per property with column header content
    // matching the property name
    var obj = list[0];
    for (var prop in obj) {
        addToRow("th", tableHeadRow, prettyColumnHeading(prop), alignment(obj[prop]));
    }

    // Add one row (to HTML table) per element in the array.
    // Each array element has a list of properties that will become 
    // td elements (Table Data, a cell) in the HTML table. 
    var tableBody = document.createElement("tbody");
    newTable.appendChild(tableBody);
    for (var i in list) {
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);

        // create one table data <td> content matching the property name
        var obj = list[i];
        for (var prop in obj) {
            addToRow("td", tableRow, obj[prop], alignment(obj[prop]));
        }
    }

    div.appendChild(newTable);
    return div;
}