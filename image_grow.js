function image_grow(){
  function do_stuff_function(image_to_grow){
    function get_image_resize_function(getClearIntervalVariableFunction){
      var percentage = 0
      var inner_function = function(){
        percentage = percentage + 1
        if (percentage >= 100){
          clearInterval(getClearIntervalVariableFunction())
        }
        image_to_grow.style.height = image_to_grow.naturalHeight * (percentage / 100.0)
        image_to_grow.style.width = image_to_grow.naturalWidth * (percentage / 100.0)
      }

      return inner_function
    }

    var clearIntervalVariable
    var inner_function = function (){
      //grow the image and start the timer
      function getClearIntervalVariable(){
        return clearIntervalVariable
      }
      clearIntervalVariable = setInterval(get_image_resize_function(getClearIntervalVariable), 1)
    }



    return inner_function()
  }

  var images=document.getElementsByTagName('img')
  for(var i = 0; i < images.length; i++){
    images[i].style.width = 0
    images[i].style.height = 0
  }

  for(var i = 0; i < images.length; i++){
    images[i].onload = do_stuff_function(images[i])
  }
}


