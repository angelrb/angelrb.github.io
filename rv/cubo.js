var forma=new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(-1,1,1),
                    new THREE.Vector3(-1,1,-1),
                    new THREE.Vector3(1,1,-1),
                    new THREE.Vector3(1,1,1),
                    new THREE.Vector3(-1,-1,1),
                    new THREE.Vector3(-1,-1,-1),
                    new THREE.Vector3(1,-1,-1),
                    new THREE.Vector3(1,-1,1));

forma.faces.push(new THREE.Face3(0,1,2),
                new THREE.Face3(0,2,3),
                new THREE.Face3(0,3,4),
                new THREE.Face3(7,4,3),
                new THREE.Face3(7,4,5),
                new THREE.Face3(6,7,5),
                new THREE.Face3(2,5,6),
                new THREE.Face3(2,1,5),
                new THREE.Face3(1,0,5),
                new THREE.Face3(4,5,0),
                new THREE.Face3(6,2,7),
                new THREE.Face3(3,7,2));

forma.computeBoundingSphere(); //¿¿¿Para qué funciona ésta esfera???

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh(forma,material);
malla.rotateX(-Math.PI/2);
malla.rotateY(Math.PI/4);
malla.rotateZ(-Math.PI/3);


var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
