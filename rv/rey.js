var base = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 50, 25); 
var base1 = new THREE.CylinderGeometry(0.7, 0.9, 0.4, 50, 25);
var base2 = new THREE.CylinderGeometry(0.7, 0.7, 0.3, 50, 25); 
var base3 = new THREE.CylinderGeometry(0.4, 0.7, 0.7, 50, 25); 
//var base4 = new THREE.CylinderGeometry(0.3, 0.6, 0.2, 50, 25); 
//var base5 = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 50, 25); 
//var cima = new THREE.SphereGeometry( 0.55, 32, 32 );
//var cima1 = new THREE.SphereGeometry( 0.1, 32, 32 );


base.translate(0, -1, 0); 
base1.translate(0, -0.8, 0); 
base2.translate(0, -0.4, 0); 
base3.translate(0, -0.1, 0); 
//base4.translate(0, 0.5, 0); 
//base5.translate(0, 0.6, 0);
//cima.translate(0, 0.9, 0);
//cima1.translate(0, 1.5, 0);
 
var baseMalla = new THREE.Mesh(base); 
var base1Malla = new THREE.Mesh(base1); 
var base2Malla = new THREE.Mesh(base2); 
var base3Malla = new THREE.Mesh(base3); 
//var base4Malla = new THREE.Mesh(base4); 
//var base5Malla = new THREE.Mesh(base5); 
//var cimaMalla = new THREE.Mesh(cima); 
//var cima1Malla = new THREE.Mesh(cima1); 
 
var alfil= new THREE.Geometry(); 
 
alfil.merge(baseMalla.geometry,baseMalla.matrix); 
alfil.merge(base1Malla.geometry,base1Malla.matrix); 
alfil.merge(base2Malla.geometry,base2Malla.matrix); 
alfil.merge(base3Malla.geometry,base3Malla.matrix); 
//alfil.merge(base4Malla.geometry,base4Malla.matrix); 
//alfil.merge(base5Malla.geometry,base5Malla.matrix); 
//alfil.merge(cimaMalla.geometry,cimaMalla.matrix); 
//alfil.merge(cima1Malla.geometry,cima1Malla.matrix);

var material = new THREE.MeshNormalMaterial(); 
var alfilMalla = new THREE.Mesh(alfil,material); 
alfil.rotateX(Math.PI/8); 
 
var escena = new THREE.Scene(); 
escena.add(alfilMalla); 
var camara = new THREE.PerspectiveCamera(); 
camara.position.z=5; 
var renderizador = new THREE.WebGLRenderer(); 
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95); 
document.body.appendChild(renderizador.domElement); 
renderizador.render(escena,camara); 
