var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new THREE.BoxGeometry(0.7,1.5,0.5);
var base4 = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 50, 25, false,5.5,5);
var base5 = new THREE.ConeGeometry( 0.1, 0.4, 32 );
var base6 = new THREE.ConeGeometry( 0.1, 0.4, 32 );

//

base2.rotateX(Math.PI/2);
base4.rotateX(Math.PI/2);
base4.rotateZ(Math.PI/2);

base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0,-0.4,0);
base4.translate(0.15,0.3,0);
base5.translate(0,0.8,0.15);
base6.translate(0,0.8,-0.15);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var base4Malla = new THREE.Mesh(base4);
var base5Malla = new THREE.Mesh(base5);
var base6Malla = new THREE.Mesh(base6);
//var base7Malla = new THREE.Mesh(base7);
//var base8Malla = new THREE.Mesh(base8);
//var base9Malla = new THREE.Mesh(base9);
//var base10Malla = new THREE.Mesh(base10);



var torreForma = new THREE.Geometry();

torreForma.merge(baseMalla.geometry,baseMalla.matrix);
torreForma.merge(base2Malla.geometry,base2Malla.matrix);
torreForma.merge(base3Malla.geometry,base3Malla.matrix);
torreForma.merge(base4Malla.geometry,base4Malla.matrix);
torreForma.merge(base5Malla.geometry,base5Malla.matrix);
torreForma.merge(base6Malla.geometry,base6Malla.matrix);
//torreForma.merge(base7Malla.geometry,base7Malla.matrix);
//torreForma.merge(base8Malla.geometry,base8Malla.matrix);
//torreForma.merge(base9Malla.geometry,base9Malla.matrix);
//torreForma.merge(base10Malla.geometry,base10Malla.matrix);






var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma,material);
torreMalla.rotateX(Math.PI/8);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=10;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*2,window.innerHeight*2);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
