import * as THREE from 'https://cdn.skypack.dev/three';
import {GLTFLoader} from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';

// import './cv.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x715FDB );

const camera = new THREE.PerspectiveCamera( 75, (window.innerWidth/2)/window.innerHeight, 0.1, 1000 );

const canvas = document.querySelector('#cv');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth/2, window.innerHeight );

const loader = new GLTFLoader;
loader.load('../src/3D/Room.gltf', function (gltf) {
	const root = gltf.scene;
    scene.add(root);
	console.log('linked with glb')
	root.rotation.x = 0.3;
	root.rotation.y = -0.8;
	const animate = function(){
		root.rotation.y += 0.001;
		requestAnimationFrame( animate );
	}
	animate();
});

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

{
	const light = new THREE.AmbientLight( 0xFFFFFF, 0.4 );
	scene.add(light);
}
{
	const light = new THREE.DirectionalLight( 0xFFFFFF, 0.7);
	light.position.set(10, 1, 4);
	scene.add(light);
}

camera.position.z = 25;

const animate = function () {
	// cube.rotation.x += 0.002;
	// cube.rotation.y += 0.01;
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
};
animate();