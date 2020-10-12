/*
 * Return a div that has one paragraph per property you find in obj. (You must iterate 
 * over the properties, not knowing what they might be...)
 * Each paragraph shall have this text: "The property named XXX has the value YYY".
 * Replace XXX with the property name. Replace YYY with the value of that propery.
 */


function extractPropsAndValues(obj) {
    var div = document.createElement("div");
    div.innerHTML = "Answer for extractPropsAndValues";

    //create p tag 
    var p = document.createElement("p");

    //create string display for injection
    var display = " ";
    console.log("showProps");

    // "prop" iterates through the properties that are in the object obj
    for (var prop in obj) {

        // even though "prop" is a character string (field name), you can use it 
        // value of the property. This is called "associative array notation" (when 
        // you use a property name as if it were an index value - returns the value of the property.
        display += 'The property named ' + prop + ' has the value ' + obj[prop] + '<br/>';
    }

    p.innerHTML = display;
    console.log("end of showProps");
    div.appendChild(p);

    return div;
}
