$(document).ready(function() {

  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  var numberList = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
  var numberList2 = shuffle(numberList);

  // Add a new div with number from shuffled array to all
  // divs with .back class.
  $('.back').each(function (index) {
    $(this).html('<div class="back-image">' + numberList2[index]+ '</div>');
  });
  
  //Enable jQuery flip plugin
  $(".game-square").flip();

});
