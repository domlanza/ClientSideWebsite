
/*  
 * This function shall return a div that contains an HTML table full of the values found 
 * in objList (pattern your code after 32_makeTable_prettier, meaning that your HTML table 
 * shall have column headings, actual images, and alignment according to data type). 
 *   
 * Your code shall add an onclick event to each head column heading (th tag) such that when 
 * the user clicks on the heading, an alert window pops up saying the original property 
 * name of the data that's in the column (not the prettyColumHeading that shows in its 
 * innerHTML) and ALSO, "forward" or "reverse". The first time you click any column heading, 
 * the alert shall say "forward", but there after, each column heading click shall toggle 
 * between forward and reverse (for that column). 
 * 
 * Here's an example of the syntax for an alert statement: 
 * 
 *     alert("hello"+x);
 * 
 */

function makeTableWithClickEvents(objList) {

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
    function addTableHead(table, list) {

        // Create a thead element, place it in table, then 
        // fill up the thead with td elements that are column headers 
        // (populated by the field names from the first object in list). 
        var tableHead = document.createElement("thead");
        table.appendChild(tableHead);

        var tableHeadRow = document.createElement("tr");
        tableHead.appendChild(tableHeadRow);

        // create one column header per property - column header will show the property name. 
        var obj = list[0];
        for (var prop in obj) {
            console.log("setting the sort onclick for column " + prop);
            var colHead = addToRow("th", tableHeadRow, prettyColumnHeading(prop), alignment(obj[prop]));

            // place the property name right into the DOM element that is the "th"
            // Because later when the "th" is clicked "prop" will be the last property
            // (cause this for loop would have already completed). 
            colHead.sortPropName = prop;
            colHead.check = false;
            colHead.onclick = function () {
                // "this" means the DOM lement clicked upon. Take the sortPropName (that
                // we stored in the "th" when the "th" was originally made) and use that
                // for sort order. 
                console.log("ready to sort by " + this.sortPropName);
                if (this.check === true) {
                    alert("Forwards " + this.sortPropName);
                    colHead = addTableBody(table, list.reverse(), this.sortPropName);
                    this.check = false;
                    console.log("Forwards " + this.sortPropName);
                } else {
                    alert("Reverse " + this.sortPropName);
                    colHead = addTableBody(table, list.reverse(), this.sortPropName);
                    console.log("Reverse " + this.sortPropName);
                    this.check = true;
                }
            };
        }
    }
    function addTableBody(table, list) {

        // remove old tbody element if there is one (else you'll get sorted rows added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }


        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        for (var i in list) {
            var tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);

            // create one table data <td> content matching the property name
            var obj = list[i];
            for (var prop in obj) {
                addToRow("td", tableRow, obj[prop], alignment(obj[prop]));
            }
        }

    } // addTableBody


    // Entry Point of MakeSortableTable

    var newTable = document.createElement("table");
    addTableHead(newTable, objList);
    addTableBody(newTable, objList);

    // this can be injected into the content area by other code

    var div = document.createElement("div");
    div.appendChild(newTable);

    return div;
}