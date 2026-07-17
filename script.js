const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);


const renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});


renderer.setSize(
window.innerWidth,
window.innerHeight
);


document
.getElementById("canvas")
.appendChild(renderer.domElement);



camera.position.z = 5;



// 3D Particles

const geometry = new THREE.BufferGeometry();

const count = 900;

const positions = new Float32Array(count * 3);


for(let i=0;i<count*3;i++){

    positions[i] =
    (Math.random()-0.5) * 12;

}


geometry.setAttribute(
"position",
new THREE.BufferAttribute(
positions,
3
)
);



const material = new THREE.PointsMaterial({

color:0x8b5cf6,

size:0.025,

transparent:true,

opacity:0.8

});



const particles = new THREE.Points(
geometry,
material
);


scene.add(particles);




// Floating 3D Circle

const circleGeometry =
new THREE.TorusGeometry(
1.2,
0.02,
16,
100
);


const circleMaterial =
new THREE.MeshBasicMaterial({

color:0x2563eb,

transparent:true,

opacity:0.4

});


const circle =
new THREE.Mesh(
circleGeometry,
circleMaterial
);


circle.position.z=-1;

scene.add(circle);





// Mouse Movement

let mouseX = 0;
let mouseY = 0;


document.addEventListener(
"mousemove",
(event)=>{

mouseX =
(event.clientX /
window.innerWidth -0.5);


mouseY =
(event.clientY /
window.innerHeight -0.5);


});





// Animation

function animate(){

requestAnimationFrame(animate);



particles.rotation.y +=0.0008;

particles.rotation.x +=0.0003;



circle.rotation.x +=0.002;

circle.rotation.y +=0.003;



camera.position.x +=
(mouseX*0.5 - camera.position.x)*0.02;


camera.position.y +=
(-mouseY*0.5 - camera.position.y)*0.02;



renderer.render(
scene,
camera
);


}


animate();





// Responsive

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
