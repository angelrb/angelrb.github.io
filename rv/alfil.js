var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25); 
var base1 = new  THREE.CylinderGeometry(0.5, 0.4, 0.2, 50, 25);
var base2 = new THREE.CylinderGeometry( 0.7, 0.7, 0.2, 50, 25); 
//var base3 = new  THREE.CylinderGeometry(0.25, 0.55, 1, 50, 25); 
//var cima = new THREE.SphereGeometry( 0.4, 32, 32 ); 


base.translate(0, 0, 0); 
base1.translate(0, 0.7, 0); 
base2.translate(0, 0.9, 0); 
 
var baseMalla = new THREE.Mesh(base); 
var base1Malla = new THREE.Mesh(base1); 
var base2Malla = new THREE.Mesh(base2); 
 
var peonForma = new THREE.Geometry(); 
 
peonForma.merge(baseMalla.geometry,baseMalla.matrix); 
peonForma.merge(base1Malla.geometry,base1Malla.matrix); 
peonForma.merge(base2Malla.geometry,base2Malla.matrix); 
 
var material = new THREE.MeshNormalMaterial(); 
var peonMalla = new THREE.Mesh(peonForma,material); 
peonMalla.rotateX(Math.PI/8); 
 
var escena = new THREE.Scene(); 
escena.add(peonMalla); 
var camara = new THREE.PerspectiveCamera(); 
camara.position.z=5; 
var renderizador = new THREE.WebGLRenderer(); 
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95); 
document.body.appendChild(renderizador.domElement); 
renderizador.render(escena,camara); 
