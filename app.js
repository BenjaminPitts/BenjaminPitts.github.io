$(() => {
//carousel
  let currentImg = 0;
  let images = $('.dad-carousel').children().length -1;

  $('.next').on('click', () => {
    $('.output2').empty();

  $('.dad-carousel').children().eq(currentImg).css('display','none');
  if (currentImg < images) {
    currentImg++;
  }
  else {
    currentImg = 0;
  }
  $('.dad-carousel').children().eq(currentImg).css('display','block');
  });

  $('.previous').on('click', ()=>{
  $('.dad-carousel').children().eq(currentImg).css('display','none');
  if(currentImg > 0) {
    currentImg--;
  }
  else {
    currentImg = images;
  }
  $('.dad-carousel').children().eq(currentImg).css('display','block');
  })

//tooltip
$(document).on('hover', () => {
  $('[data-toggle=tooltip]').tooltip();
});

//api and joke delivery
  $('.buttons').on('click', (event) => {
    //event.preventDefault();
    $('.output').empty();
    $('.output2').empty();

    let $joke = $(event.target).attr('id');

  $.ajax({
       url : `https://sv443.net/jokeapi/v2/joke/${$joke}`

  }).then(
    (data)=> {
      const $setup = $('<h3>').text(data.setup)
      const $delivery = $('<h3>').text(data.delivery).css('color', 'gold')
      $('.output').append($setup)
      setTimeout(
        ()=>{
          $('.output').append($delivery)
        },
        4000
      )
      //console.log(data)
    },

    (error)=>{
      //console.log('error!!!')

      }
     )
   })
//weather app
$('form').on('submit', (event)=> {
  event.preventDefault();
  $('.output').empty();
  $('.output2').empty();

  let $city = $('input[type="text"]').val();

  $.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${$city}&units=imperial&APPID=86484c24a5840c46aad058f021925a56`
  }).then(
    (data)=> {
      const $temp = $('<h4>').text(`Temperature: ${data.main.temp} F`);
      const $description = $('<h4>').text(`Conditions: ${data.weather[0].description}`)
      const $wind = $('<h4>').text(`Wind: ${data.wind.speed} MPH`)
      const $humidity = $('<h4>').text(`Humidity: ${data.main.humidity} %`)
      $('.output2').append($city).append($temp).append($description).append($wind).append($humidity)
      $('.form').trigger('reset');
      console.log(data)

      //phrases
      const phrases = ['Dad says: dont touch that thermostat, put on a sweater!','Dad says: great day for some yardwork!','Dad says: its not the heat that gets you, its the humidity!']

      if (data.main.temp <= 50) {
        $('.output3').text(phrases[0]).css('color','gold')
      } else if (data.main.temp <= 75){
        $('.output3').text(phrases[1]).css('color','gold')
      } else {
        $('.output3').text(phrases[2]).css('color','gold')
      }

    },
    ()=>{
      //console.log('error')
    }
  )

})

}) //ending token
