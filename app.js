$(() => {
//carousel
  let currentImg = 0;
  let images = $('.dad-carousel').children().length -1;


  $('.next').on('click', () => {

  $('.dad-carousel').children().eq(currentImg).css('display','none');
  if (currentImg < images) {
    currentImg++;
  } else {
    currentImg = 0;
  }
  $('.dad-carousel').children().eq(currentImg).css('display','block');
  });

  $('.previous').on('click', ()=>{
  $('.dad-carousel').children().eq(currentImg).css('display','none');
  if(currentImg > 0) {
    currentImg--;
  } else {
    currentImg = images;
  }
  $('.dad-carousel').children().eq(currentImg).css('display','block');
  })

//api and joke delivery

  $('button').on('click', (event) => {
    //event.preventDefault();
    $('.output').empty();
    let $joke = $(event.target).attr('id');

  $.ajax({
       url : `https://sv443.net/jokeapi/v2/joke/${$joke}`

  }).then(
    (data)=> {
      const $setup = $('<h2>').text(data.setup)
      const $delivery = $('<h3>').text(data.delivery)
      $('.output').append($setup)
      setTimeout(
        ()=>{
          $('.output').append($delivery)
        },
        2000
      )
      console.log(data)
    },

    (error)=>{
      //console.log('error!!!')

      }
     )
   })
})
