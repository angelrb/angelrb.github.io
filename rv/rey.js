var base = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 50, 25); 
var base1 = new THREE.CylinderGeometry(0.7, 0.9, 0.4, 50, 25);
var base2 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25); 
var base3 = new THREE.CylinderGeometry(0.4, 0.7, 2, 50, 25); 
var base4 = new THREE.TorusGeometry( 0.8, 0.1, 16, 100 );
var base5 = new THREE.CylinderGeometry(0.8, 0.8, 0.15, 50, 25);
var base6 = new THREE.TorusGeometry( 0.6, 0.1, 16, 100 );
var base7 = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 50, 25);
var base8 = new THREE.TorusGeometry( 0.6, 0.1, 16, 100 );
//var cima = new THREE.SphereGeometry( 0.55, 32, 32 );
//var cima1 = new THREE.SphereGeometry( 0.1, 32, 32 );


base.translate(0, -1, 0); 
base1.translate(0, -0.7, 0); 
base2.translate(0, -0.4, 0); 
base3.translate(0, 0.65, 0);
base4.rotateX(Math.PI/2);
base4.translate(0, 1.7, 0); 
base5.translate(0, 1.7, 0);
base6.rotateX(Math.PI/2);
base6.translate(0, 1.8, 0);
base7.translate(0, 1.9, 0);
base8.rotateX(Math.PI/2);
base8.translate(0, 2.1, 0);
//cima.translate(0, 0.9, 0);
//cima1.translate(0, 1.5, 0);
 
var baseMalla = new THREE.Mesh(base); 
var base1Malla = new THREE.Mesh(base1); 
var base2Malla = new THREE.Mesh(base2); 
var base3Malla = new THREE.Mesh(base3); 
var base4Malla = new THREE.Mesh(base4); 
var base5Malla = new THREE.Mesh(base5); 
var base6Malla = new THREE.Mesh(base6); 
var base7Malla = new THREE.Mesh(base7); 
var base8Malla = new THREE.Mesh(base8); 
//var cimaMalla = new THREE.Mesh(cima); 
//var cima1Malla = new THREE.Mesh(cima1); 
 
var alfil= new THREE.Geometry(); 
 
alfil.merge(baseMalla.geometry,baseMalla.matrix); 
alfil.merge(base1Malla.geometry,base1Malla.matrix); 
alfil.merge(base2Malla.geometry,base2Malla.matrix); 
alfil.merge(base3Malla.geometry,base3Malla.matrix); 
alfil.merge(base4Malla.geometry,base4Malla.matrix); 
alfil.merge(base5Malla.geometry,base5Malla.matrix); 
alfil.merge(base6Malla.geometry,base6Malla.matrix); 
alfil.merge(base7Malla.geometry,base7Malla.matrix); 
alfil.merge(base8Malla.geometry,base8Malla.matrix); 
//alfil.merge(cimaMalla.geometry,cimaMalla.matrix); 
//alfil.merge(cima1Malla.geometry,cima1Malla.matrix);

var material = new THREE.MeshNormalMaterial(); 
var alfilMalla = new THREE.Mesh(alfil,material); 
alfil.rotateX(Math.PI/8); 
 
var escena = new THREE.Scene(); 
escena.add(alfilMalla); 
var camara = new THREE.PerspectiveCamera(); 
camara.position.z=10; 
var renderizador = new THREE.WebGLRenderer(); 
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95); 
document.body.appendChild(renderizador.domElement); 
renderizador.render(escena,camara); 
