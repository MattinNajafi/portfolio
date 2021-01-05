let scene, camera, renderer, stars, starGeo;
let leftIndex = 0;
let leftIndexHello = 0;

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/3;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starGeo = new THREE.Geometry();

    for(let i=0;i<6000;i++) {
        star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.009;
        starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load( '../img/stjärna.png' );
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
    });

    stars = new THREE.Points(starGeo,starMaterial);
    scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);

    animate(); 
    setTimeout(helloLaunch,4000);
    setTimeout(typeWriter, 8000)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.y -= p.velocity;
    
    if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
    }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y +=0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}



function helloLaunch(){
    const hello = document.querySelector('.giphydiv')

    if(leftIndexHello < window.innerWidth + 450){
        leftIndexHello = leftIndexHello + 2.5
        hello.style.marginLeft = leftIndexHello + 'px'
        requestAnimationFrame(helloLaunch)
    }

    else{
        hello.parentNode.removeChild(hello)
    }
     

}
function typeWriter(){
    const texts = ['lorem', 'dipsum', 'nipsum']
}

init();