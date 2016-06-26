var point2D = { 
  name: "Home",
  x: 3,
  y: 5,
  calculate: function(){
    var output =  " x:" + this.x + " y:" + this.y
    return output;
  }
}

var point3D = {
  name: "Earth",
  x: 2,
  y: 6,
  z: 7,
  calculate: function(){
    var output = " x:" + this.x + " y:" + this.y + " z:" + this.z;
    return output;
  }
}

var me = {
  name: "Mike Barlow",
  x: 11,
  y: 15,
  occupation: "Developer",
  birthDate: new Date ("2000/1/1"),
  calculate: function(){
    var output = " x:" + this.x + " y:" + this.y;
    return output;
  }
}

function displayPoint(point){
  var name = point.name;
  var result = point.calculate();
  var output = name + "; " + result;
  
  var dom = document.getElementById("domOutput")
  dom.innerHTML = dom.innerHTML + "<br>" +  output
}

displayPoint(point2D);
displayPoint(point3D);
displayPoint(me);