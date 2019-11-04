// var recycle = ['bottle water', 'grocery bag', 'straw']
// var compost = ['banana', 'egg shells', 'leafs']
// var landfill = ['clothes', 'batteries', 'furniture']



$(":input").change(function(){
    $(this).parents(".questionContainer").addClass("hideMe");
    $(this).parents(".questionContainer ").next(".questionContainer ").removeClass("hideMe");
});








//function displayWord(){

// for (i = 0; i < recycle.length; i++){
//     document.write(
//         "  " + i + "  " +
//         recycle[i] + "<br/>"
//     )
// }
// const messageEl = document.querySelector('h2');


// function addElement () { 
//     // create a new div element 
//     var newDiv = document.createElement("div"); 
//     // and give it some content 
//     var newContent = recycle.textContent = recycle.length; 
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);  
  
//     // add the newly created element and its content into the DOM 
//     var currentDiv = document.getElementById("div1"); 
//     document.body.insertBefore(newDiv, currentDiv); 
//   }






//for (i = 0; i < Colors.length; i++)
//   <script language="JavaScript">
//     // Create the array and fill it with data.
//     var Colors = ["Blue", "Green", "Purple"];
//     // Define a loop to access each array element
//     // and display it onscreen.
//     for (i = 0; i < Colors.length; i++)
//     {
//       document.write(
//         "Colors " + i + " = " +
//         Colors[i] + "<br />");
//     }
//   </script>