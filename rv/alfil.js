var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25); 
2 var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 ); 
3 var base3 = new  THREE.CylinderGeometry(0.25, 0.55, 1, 50, 25); 
4 var cima = new THREE.SphereGeometry( 0.4, 32, 32 ); 
5 
 
6 base2.rotateX(Math.PI/2); 
7 base.translate(0, -1, 0); 
8 base2.translate(0, -0.9, 0); 
9 base3.translate(0, -0.2, 0); 
10 cima.translate(0, 0.5, 0); 
11 
 
12 var baseMalla = new THREE.Mesh(base); 
13 var base2Malla = new THREE.Mesh(base2); 
14 var base3Malla = new THREE.Mesh(base3); 
15 var cimaMalla = new THREE.Mesh(cima); 
16 
 
17 var peonForma = new THREE.Geometry(); 
18 
 
19 peonForma.merge(baseMalla.geometry,baseMalla.matrix); 
20 peonForma.merge(base2Malla.geometry,base2Malla.matrix); 
21 peonForma.merge(base3Malla.geometry,base3Malla.matrix); 
22 peonForma.merge(cimaMalla.geometry,cimaMalla.matrix); 
23 
 
24 var material = new THREE.MeshNormalMaterial(); 
25 var peonMalla = new THREE.Mesh(peonForma,material); 
26 peonMalla.rotateX(Math.PI/8); 
27 
 
28 var escena = new THREE.Scene(); 
29 escena.add(peonMalla); 
30 var camara = new THREE.PerspectiveCamera(); 
31 camara.position.z=5; 
32 var renderizador = new THREE.WebGLRenderer(); 
33 renderizador.setSize(window.innerHeight*1.2,window.innerHeight*1.5); 
34 document.body.appendChild(renderizador.domElement); 
35 renderizador.render(escena,camara); 
