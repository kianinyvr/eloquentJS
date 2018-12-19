var SCRIPTS = require("./data.js");
  
  // This makes sure the data is exported in node.js —
  // `require('./path/to/scripts.js')` will get you the array.
  if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
    module.exports = SCRIPTS;
  if (typeof global != "undefined" && !global.SCRIPTS)
    global.SCRIPTS = SCRIPTS;




  
  let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

  let map1 = rtlScripts.map(s => s.name);

  console.log(map1, map1.length);
  
  console.log("//////////////////////////////////////////////////////////");

  function customMap(array, transform) {
      let mapped = [];
      for ( let element of array ) {
          mapped.push(transform(element));
      }
      return mapped;
  }

  //check the length of an array

  function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}


  // we want to filter elements to show Scripts with direction of rtl
  // and then use our custom map to print out a new array with just the
  // name of the scripts, not the entire object.

let map2 = customMap(rtlScripts, s => s.name );

console.log(map2, map2.length);

console.log(arraysEqual(map1, map2));