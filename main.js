// Declarations for our song values
let painting;
let painting_explanation;


// Function to get painting information and picture of painting 
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets painting from AIC using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from AIC
 * which will .... send me to the AIC website???
 */

 async function clickedEvent(img_index, item_index, title, artist_display, date_display, style_title){
     // Get painting name
    let artist = document.getElementsByTagName('img')[img_index].attributes[2].value;
    console.log(artist)

    console.log(title)

     let headers = new Headers([
         ['Content-Type', 'application/json'],
         
     ]);

     let request = new Request(`https://api.artic.edu/api/v1/artworks/${artist}`,{
         method: 'GET',
         headers: headers
     });

     let result = await fetch(request);

     let response = await result.json();

     console.log(response)
     console.log(response.data.title)
     console.log(response.data.artist_display)
     console.log(response.data.date_display)
     console.log(response.data.style_title)
     
     document.getElementById(title).innerHTML = JSON.stringify(response.data.title);
     document.getElementById(artist_display).innerHTML = JSON.stringify(response.data.artist_display);
     document.getElementById(date_display).innerHTML = JSON.stringify(response.data.date_display);
     document.getElementById(style_title).innerHTML = JSON.stringify(response.data.style_title);

    //  let my_example = document.getElementById('p1')


    }
     // TODO: Add songSnippet function to play the selected song



 /**
  * @param id
  * @param event
  * 
  * id = image if for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces songs from the clickedEvent based 
  * on index of image.
  */

  function getPic(id,event, title, artist_display, date_display, style_title){
      switch(id){
          case 'fig1': {
              event.stopPropagation();
              clickedEvent(1,2, title, artist_display, date_display, style_title) // The first number is the image number on the html document, including background pictures
              break;            // The second parameter is the index to pull the 'data' and specific data they hava available
          }                     // as it is specified on line 36 - 39. (refer to console in 'inspect'--> 'data' dropdown for the image)
          case 'fig2': {
              event.stopPropagation();
              clickedEvent(2,2, title, artist_display, date_display, style_title)
              break;
          }
          case 'fig3': {
              event.stopPropagation();
              clickedEvent(3,2, title, artist_display, date_display, style_title)
              break;
          }
          case 'fig4': {
              event.stopPropagation();
              clickedEvent(4,2, title, artist_display, date_display, style_title)
              break;
          }
          case 'fig5': {
              event.stopPropagation();
              clickedEvent(5,2, title, artist_display, date_display, style_title)
              break;
          }
          case 'fig6': {
              event.stopPropagation();
              clickedEvent(6,2, title, artist_display, date_display, style_title)
              break;
          }
      }
  }

  
  
  