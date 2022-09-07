/*
*
* find the right element on page
* it's like/dislike nav 
* It also append button to the last element in the list
*
*/
// check if youtube is on watch page
if(window.location.href.indexOf("watch") > -1){
    
    const YtNav = "top-level-buttons-computed";
    // these are youtube default classes for button
    const NewButton = `
<div id="mp3YoutubeDonwloadButton">
<button><i class="icon-download-alt">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <polyline points="7 11 12 16 17 11" />
  <line x1="12" y1="4" x2="12" y2="16" />
</svg>
</i> Pobierz MP3</button>
</div>
<form id="mp3Wrapper" target="_blank" method="get" action="https://dominiksliwek.ddns.net/ytDownloader">
<div class="text">
    <p>Wybierz przedział czasowy jaki chcesz pobrać</p>
</div>
<div id="time-range">
    <div id="inputs">
      <input type="hidden" name="url" id="mp3_youtube_url" value=""/>
      <input name="start" id="time-min" type="number" step="1" required value="0">
      <span id="sliderDash">-</span>
      <input name="end" id="time-max" type="number" step="1" required value=""></div>
    <div id="time-slider"></div>
</div>
<div id="confirmDownload">
  <input type="submit" value="Pobierz" id="download">
</div>
<div id="serverMessage"></div>
</form>
`;


    // checks if whole page is loaded
    // basically checks if navbar is loaded
    function waitForEl(el){
        return new Promise((resolve, reject) =>{
          const intervalId = setInterval(() =>{
            if(document.querySelector(el)){
              clearInterval(intervalId);
              resolve();
            }
          }, 500);
        });
      }
      
    waitForEl(`#${YtNav}`).then(() => {
        addButton();
    });

    function addButton(){
        
        const menu = $("#flex");
        menu.append(NewButton);
        $("#mp3Wrapper").hide(0);

    }

}