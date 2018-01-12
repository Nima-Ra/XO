var lines = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];
function clicked (id) {
  var element = document.getElementById(id);
  var img = document.createElement('img');
  element.appendChild(img).setAttribute('id','user_img'+id);
  var img = document.getElementById('user_img'+id);
  img.setAttribute('style','width: 133px;height: 133px');
  img.setAttribute('src','./X.png');
  var num = id.split('_')[1];
  if (num <= 3){
    var x = 0;
  }else if (num <= 6) {
    var x = 1;
  }else {
    var x = 2;
  }
  if (num == 2 or num == 5 or num == 8){
    var y = 1;
  }else if (num == 1 or num == 4 or num == 7) {
    var y = 2;
  }else{
    var y = 3;
  }
  lines[x][y] = 'x';
}
