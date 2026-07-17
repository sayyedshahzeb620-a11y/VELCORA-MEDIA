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


document.getElementById("canvas")
.appendChild(renderer.domElement);



camera.position.z = 5;



// Particle Geometry

const geometry = new THREE.BufferGeometry();

const particles = 1200;

const positions = new Float32Array(
    particles * 3
);


for(let i=0;i<particles*3;i++){

    positions[i] =
    (Math.random()-0.5)*15;

}


geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(
        positions,
        3
    )
);



const material = new THREE.PointsMaterial({

    color:0xffffff,
    size:0.015,
    transparent:true,
    opacity:0.8

});



const points = new THREE.Points(
    geometry,
    material
);


scene.add(points);




// Animation

function animate(){

    requestAnimationFrame(animate);


    points.rotation.y += 0.0008;
    points.rotation.x += 0.0004;


    renderer.render(
        scene,
        camera
    );

}


animate();




// Responsive

window.addEventListener(
'resize',
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
