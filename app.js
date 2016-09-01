console.log("App.js is running");

$('button').on('click', function(){
  // we want to fire our XHR request
  var baseUrl = 'http://www.thecolorapi.com/';
  var colorHex = $('input#color_input').val();
//scheme?hex=0E70D1&mode=analogic&count=5
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

      var color4Hex = response.colors[3].hex.clean;
      var color4Name = response.colors[3].name.value;
      //debugger;
      $('#div-0')[0].style.backgroundColor = `#${colorHex}`;
      $('#div-0')[0].innerHTML = originalName;

      $('#div-1')[0].style.backgroundColor = `#${color1Hex}`;
      $('#div-1')[0].innerHTML = color1Name;

      $('#div-2')[0].style.backgroundColor = `#${color2Hex}`;
      $('#div-2')[0].innerHTML = color2Name;

      $('#div-3')[0].style.backgroundColor = `#${color3Hex}`;
      $('#div-3')[0].innerHTML = color3Name;

      // $('#div-4')[0].style.backgroundColor = `#${color4Hex}`;
      // $('#div-4')[0].innerHTML = color4Name;

    }
  })
  // $.ajax({
  //   url: baseUrl + pokemonName,
  //   method: 'GET',
  //   success: function(response, status){
  //     debugger;
  //     var imageSrc = response.sprites.front_default;
  //     var name = response.name;
  //     var type = response.types[0].type.name;
  //     $('img#pokemonFrontDefault').attr('src', imageSrc);
  //     $('#pokemonName').text(name);
  //     // add the type of pokemon
  //     $('#pokemonType').text(type);
  //     // clear out search bar
  //   }
  // });
});
