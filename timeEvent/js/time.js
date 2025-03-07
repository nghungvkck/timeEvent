
document.querySelector(".time__input--button").onclick =()=>{
    var input = document.querySelector(".time__input--input").value;
    //chuyển giá trị input sang giá trị thời gian 
    var timeEvent = new Date(input);
    var html=""
    function time (){
      // tính thời gian hiện tại 
      var timeNow = new Date();

      // tính thời gian diễn ra sự kiện
      var time = timeEvent - timeNow;
      if ( time <0){
        html=`<div class="time__output--event">Sự kiện đã diễn ra rồi</div>`;
      }  else {
        // chuyển thời gian 
        var days = Math.floor(time / (1000*60*60*24));
        var hour = Math.floor( time % ( 1000*60*60*24) / (1000*60*60));
        var minutes = Math.floor( time % (1000* 60*60) / ( 1000*60));
        var seconds = Math.floor( time % (1000*60) / 1000);

        html=`<div class="time__output--event">${days}ngày ${hour}giờ ${minutes}phút ${seconds}giây</div>`
      }
      var hihi = document.querySelector(".time__output");
      hihi.innerHTML=html;
    }

    //lặp lại vô hạn lần 
    setInterval(time,1000);
}

