// on click append box with movie downloader
// show download wrapper button
$(document).on('click', "#mp3YoutubeDonwloadButton", function(){
    $("#mp3Wrapper").css({
        'position': 'absolute',
        'left': $(this).offset().left,
        'top': $(this).offset().top + $(this).height() + 15
   }).toggle(150);

   callSlider();
})

// on submiting form update current url video param
$(document).on('submit', "#mp3Wrapper", function(){
    $("#mp3_youtube_url").val(window.location.href);
    
    return true;
})

function callSlider(){

    var tMin = $('#time-min'),
        tMax = $('#time-max'),
        slider = $('#time-slider'),
        movieStart = 0,
        movieEnd = document.getElementsByTagName('video')[0].duration;

    // initialize slider object
    slider.slider({
        range: true,
        step: 1,
        min: movieStart,
        max: movieEnd,
        values: [ movieStart, movieEnd ],
        slide: function(event, ui){
            tMin.val( ui.values[0] );
            tMax.val( ui.values[1] );
            // set slide inputs with new values
        }
    });

    tMin.val( slider.slider("values", 0) );
    tMax.val( slider.slider("values", 1) );

    // upon change of slider update values
    tMin.change( function(){
        slider.slider("values", 0, $(this).val() );
    } );
    tMax.change( function(){
        slider.slider("values", 1, $(this).val() );
    } );

    function timeInMinutes(time){
        minutes = Math.floor(time / 60),
        seconds = Math.floor(time - minutes * 60);
        return `${minutes}.${seconds}`;
    }

    function timeInSeconds(time){
        let seconds = time.toString().split(".")[1],
        minutes = time.toString().split(".")[0];
        return +minutes*60 + +seconds;
    }

};
