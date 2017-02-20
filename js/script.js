$(document).ready(function() {

    var icecreams = ["vanilla", "chilli", "crumbulee", "banana", "strawberry"]
    icecreams.forEach(function(icecream){
        alert('I love' + ' ' + icecream + '!');


    });

    function makeUL(array) {
        // Create the list element:
        var list = document.createElement('ul');

        for(var i = 0; i < array.length; i++) {
            // Create the list item:
            var item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));

            // Add it to the list:
            list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
    }

    // Add the contents of options[] to #foo:
    document.getElementById('foo').appendChild(makeUL(icecreams));

});
