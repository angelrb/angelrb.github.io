function Agent(x=0,  y=0){
THREE.Object3D.call(this);
this.position.x = x;
this.position.y = y;
}

Agent.prototype = new THREE.Object3D();
Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function(){
for (var i = 0; i < this.children.lenght; i++){
if (this.children[i].sense !== undefined)
this.children[i].sense(this);}
}

Environment.prototype.plan = function(){
for ( var i = 0; i < this.children.length; i++){
if (this.children[i].plan !== undefined)
this.children[i].plan(this);}
}

Environment.prototype.act = function(){
for ( var i = 0; i < this.children.length; i++){
if (this.children[i].act !== undefined)
this.children[i].act(this);}
}

function Wall(size,x,y){
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial());
this.size=size;
this.position.x=x;
this.position.y=y;
wall.prototype= new THREE.Mesh();
}

Enviromento.prototype.setMap=function(Map){
var _offset=Mat.floor(map.length/2);
for (var i=0: i< map.length; i++)
for (var j=0: j< map.length; j++){
if(map[i][j] === "x")
this.add(new Wall(1, j - offset , -(1-_offset)));
else if (map[i][j] === "r")
this.add(new Robot(0.5,j - _offset, -(1-_offset)));
}
}


Function Sensor(position, direction){
THREE.RayCaster.call(this. position, direction);
this,colision= false;
}

Sensor.prototype= new THREE.Raycaster();

function Robot(size,x,y){
Agent.call(this, x, y);
this sensor = new Sensor();
this.actuator = new THREE.Mesh(new THREE.boxGeometry(size,size,size),new THREE.MeshBasicMaterial([ color: "#00000"));
this.actuator.commands = [];
ths.add(this.actuator);
}

Robot.prototype= new Agent();

Robot.prototype.sense = function(enviroment){
this.sensor.set(this.position, new THREE.Vector3(Mathosthis.rotation.z,Math.sin(this.rotation.z),0));
var obstaculo = this.sensor.intersectObjects(enviroment.children, true);
if(obstaculo.length>0 &&(obstaculo(0).distance<= 0.5));
this.sensor.collision=true;
else
this,sensor.colision=false;
};

Robot.prototype.plan=function(enviroment){
this.actuator.commands=[];
if (this.sensor.colision == tue)
this.actuator.commands.push('rotateCCW');
else
this.actuator.commands.push('goStraight');
};

Robot.prototype.act = function(enviroment){
var command = this.actuator.commands.pop();
if(command === undefined)
console.log('Undefined command');
else if (command in this operations)
this.operations[command](this);
else
console.log('Unkown command');
};

Robot.prototype.operartions={};

robot.prototype.operations.goStraight = function(robot,distance){
if(distance === undefined)
distance = .05;
robot.position.x += distance*Math.cos(robot.rotation.z);distance = .05;
robot.position.y += distance*Math.sin(robot.rotation.z);
};

Robot.prototype.operations.rotateCW = function(robot, angle){
if (angle === undefined)
angle= -Math.PI/2;
robot.rotation.z += angle;
};

Robot.prototype.operations.rotateCCW = function(robot, angle){
if (angle === undefined)
angle = Math.PI/2;
robot.rotation.z += angle;
};






function setup(){
var mapa = new Array();
mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxxx";
mapa[1}="x                       x";
mapa[2}="x                       x";
mapa[3}="x                       x";
mapa[4}="x                       x";
mapa[5}="x                       x";
mapa[6}="x                       x";
mapa[7}="xxxxxx      xxxxxxxxxxxxxx";
mapa[8}="x                       x";
mapa[9}="x                       x";
mapa[10}="x                       x";
mapa[11}="x                       x";
mapa[12}="x                       x";
mapa[13}="x                       x";
mapa[14}="x                       x";
mapa[15}="x                       x";
mapa[16}="x                       x";
mapa[17}="x                       x";
mapa[18}="x                       x";
mapa[19}="xxxxxxxxxxxxxx    xxxxxxx";
mapa[20}="x                       x";
mapa[21}="x                       x";
mapa[22}="x                       x";
mapa[23}="x                       x";
mapa[24}="xxxxxxxxxxxxxxxxxxxxxxxxx";

enviroment= new Enviroment();
enviroment.setMap(mapa);

camera = new THREE.PerspectiveCamera();
camara.position.z=30;

renderer = new THREE.WebGLRenderer();
renderer.setSize(windowinnerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
enviroment.add(camera);
}
function loop(){
requestAnimationFrame(loop);
enviroment.sense();
enviroment.plan();
enviroment.act();

renderer.render(enviroment, camara);
}
var enviroment, camara, renderer;
setup();
loop();


