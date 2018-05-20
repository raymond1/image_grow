function image_grow(){
  function do_stuff_function(image_to_grow){
    function get_image_resize_function(getClearIntervalVariableFunction){
      var percentage = 0
      var inner_function = function(){
        percentage = percentage + 1
        console.log(percentage)
        if (percentage >= 100){
          clearInterval(getClearIntervalVariableFunction())
        }

        image_to_grow.height = image_to_grow.naturalHeight * (percentage / 100.0)
        image_to_grow.width = image_to_grow.naturalWidth * (percentage / 100.0)
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
    images[i].onload = do_stuff_function(images[i])
  }
}

function grow_image(image_to_grow){
  return function(){
    image_to_grow.style.display = 'block'
    image_to_grow.height +=1
    image_to_grow.width +=1
  }
}

//takes in an html element and grows it from its
function grow_putty_grow(image){
  image.height = 0
  image.width = 0
  image.style.display = 'block'

  var closure = function(){
    var inner_image = image
    var percentage = 0
    var inner_function = function(){
      console.log(percentage)
      if (percentage == 100){
        //stop growing
        clearTimeout(inner_image.growing_function)
      }
      else{
        percentage = percentage + 1
        image.height = image.naturalHeight * (percentage /100.0)
        image.width = image.naturalWidth * (percentage /100.0)
      }
    }
    return inner_function
  }()

  image.growing_function = setTimeout(
    closure, 1
  );
}
