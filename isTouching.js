function isTouching(surface1, ball){

    if(surface1.y - ball.y < surface1.height/2 + ball.height/2){
       return true;
     }

     else{
          return false;
    }

}
