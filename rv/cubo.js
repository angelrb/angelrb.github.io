var forma = new THREE.Geometry();
forma.vertices.push(new THREE.Vector3( 0, 0, 0));
forma.vertices.push(new THREE.Vector3( 1, 0, 0));
forma.vertices.push(new THREE.Vector3( 0, 0, 1));
forma.vertices.push(new THREE.Vector3( 0, 1, 0));
forma.vertices.push(new THREE.Vector3( 1, 1, 0));
forma.vertices.push(new THREE.Vector3( 0, 1, 1));
forma.vertices.push(new THREE.Vector3( 1, 1, 1));

forma.faces.push(new THREE.Face3( 0, 4, 5));
forma.faces.push(new THREE.Face3( 0, 1, 5));
forma.faces.push(new THREE.Face3( 0, 1, 2));
forma.faces.push(new THREE.Face3( 1, 3, 2));
forma.faces.push(new THREE.Face3( 5, 7, 1));
forma.faces.push(new THREE.Face3( 7, 3, 1));
forma.faces.push(new THREE.Face3( 0, 4, 6));
forma.faces.push(new THREE.Face3( 0, 6, 2));
forma.faces.push(new THREE.Face3( 2, 6, 7));
forma.faces.push(new THREE.Face3( 2, 7, 3));

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                    window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
