$(() => {

  $('button').on('click', (event) => {

  $.ajax({
      url: 'https://sv443.net/jokeapi/v2/joke/Any',
  }).then(
    (data)=> {
      const setup = $('<h2>').text(data.setup).css('color','white')
      const delivery = $('<h3>').text(data.delivery)
      $('.output').append(setup)
      $('.punchline').append(delivery)




      console.log(data)
      },
    (error)=>{
      console.log('error!!!')

      }
     )
   })
})
