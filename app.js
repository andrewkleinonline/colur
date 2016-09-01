console.log("App.js is running");

var baseUrl = 'http://www.thecolorapi.com/';


function applyBackgroundColor(array, color){
  for (var i = 0; i < array.length; i++) {
    array[i].style.backgroundColor = `#${color}`;
  }}

function applyColor(array, color){
  for (var i = 0; i < array.length; i++) {
    array[i].style.color = `#${color}`;
  }}

function getAndSetColors(colorHex) {
  $.ajax({
    url: baseUrl + 'scheme?hex=' + colorHex + '&mode=quad&count=4',
    method: 'GET',
    success: function(response, status){
      var originalName = response.seed.name.value;

      var color1Hex = response.colors[0].hex.clean;
      var color1Name = response.colors[0].name.value;

      var color2Hex = response.colors[1].hex.clean;
      var color2Name = response.colors[1].name.value;

      var color3Hex = response.colors[2].hex.clean;
      var color3Name = response.colors[2].name.value;

      applyBackgroundColor($('.color-original'), colorHex);
      applyColor($('.color-1'), color1Hex);
      applyBackgroundColor($('div.color-1'), color1Hex);
      applyColor($('.color-2'), color2Hex);
      applyColor($('.color-3'), color3Hex);

      $('#swatches')[0].style.display = 'inline-block';

      $('#div-0')[0].style.backgroundColor = `#${colorHex}`;
      $('#div-0')[0].innerHTML = originalName;

      $('#div-1')[0].style.backgroundColor = `#${color1Hex}`;
      $('#div-1')[0].innerHTML = color1Name;

      $('#div-2')[0].style.backgroundColor = `#${color2Hex}`;
      $('#div-2')[0].innerHTML = color2Name;

      $('#div-3')[0].style.backgroundColor = `#${color3Hex}`;
      $('#div-3')[0].innerHTML = color3Name;
    }
  })
}


$('#specific-button').on('click', function(){
  var colorHex = $('input#color_input').val();

  getAndSetColors(colorHex);
});

$('#random-button').on('click', function(){
  // var colorHex = $('input#color_input').val();

  var randomColorArray = []

  for (var i = 0; i < 3; i++) {
    randomColorArray.push(Math.floor(Math.random()*255))
    randomColorArray[i] = randomColorArray[i].toString(16)
  }

  var colorHex = randomColorArray.join("")

  getAndSetColors(colorHex);
});
