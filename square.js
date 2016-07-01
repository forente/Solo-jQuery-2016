$(document).ready(function(){
  var totalRed = 0;
  var totalYellow =0;
  var totalGreen = 0;
  var totalBlue = 0;

  function updateTotal(color){

    switch (color) {
      case 'red':
      totalRed++;
      $('#red').text('Total red: '+totalRed);
        break;
      case 'yellow':
      totalYellow++;
      $('#yellow').text('Total yellow: '+totalYellow);
        break;
      case 'green':
      totalGreen++;
      $('#green').text('Total green: '+totalGreen);
        break;
      case 'blue':
      totalBlue++;
      $('#blue').text('Total blue: '+totalBlue);
        break;
      default:
    }
  }

  $('button').on('click', function(){
      updateTotal($(this).data().color);
      $('.container').append('<div class="color-cube '+ $(this).data().color+ ' "></div>');
      
  });
});
