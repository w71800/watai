const infoTime = document.querySelector('.info_time')
console.log(infoTime);

function getTime(){
  let nowTime = new Date()
  let year = nowTime.getFullYear();
  let month = `0${nowTime.getMonth() + 1}`
  let date = `0${nowTime.getDate()}`
  let zone = nowTime.getTimezoneOffset()/(-60)
  let time = nowTime.toTimeString().substring(0, 8)
  let result = `GMT+${zone} ${year}-${month}-${date} ${time}`
  
  infoTime.textContent = result
}

setInterval(getTime, 1000)





// GMT+8 2020-05-07 10:13:44