let scene, camera, renderer, stars, starGeo;
const texts = ['It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,']
let count = 0
let typeWriterIndex = 0;
let currentText = '';
let letter = '';
let leftIndexHello = -640;

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
    setTimeout(typeWriter, 10000)
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

    if(leftIndexHello < window.innerWidth + 200){
        leftIndexHello = leftIndexHello + 8
        hello.style.marginLeft = leftIndexHello + 'px'
        requestAnimationFrame(helloLaunch)
    }

    else{
        hello.parentNode.removeChild(hello)
    }
     

}
function typeWriter(){
   let cursor = document.querySelector(`.cursor${count}`)
   cursor.style.display = 'inline'
   cursor.classList.add('typing')
   if(count === texts.length){
       count = 0
    }
    
    currentText = texts[count]
    letter = currentText.slice(0, ++typeWriterIndex)
    document.querySelector(`.text-section-${count}`).textContent = letter;
    
    if(letter.length === currentText.length){
        cursor.classList.remove('typing')
        if(count !== 2){

            let buttonDiv = document.createElement('div');
            buttonDiv.className = 'button-div'
            buttonDiv.innerHTML = '<button id="continue"> Continue </button> '
            document.querySelector(`.text-content-buttons-${count}`).appendChild(buttonDiv)
            
            document.querySelector('#continue').addEventListener('click', function(){
                if(count === 0){
                    buttonDiv.parentNode.removeChild(buttonDiv)
                    let img = document.createElement('img')
                    img.classList.add('explosion')
                    img.src = '../img/explosion.gif'
                    document.querySelector(`.text-content-buttons-${count}`).appendChild(img)
                    setTimeout(function(){
                        count++
                        typeWriterIndex = 0
                        typeWriter()
                        cursor.parentNode.removeChild(cursor)
                        img.parentNode.removeChild(img)

                    },500)
                }
                if(count === 1){
                    let img = document.createElement('img')
                    img.classList.add('explosion')
                    img.src = '../img/mario.gif'
                    document.querySelector(`.text-content-buttons-${count}`).appendChild(img)
                    buttonDiv.classList.add('mario')
                    img.style.marginTop = '-5px'
                    setTimeout(function(){
                        buttonDiv.parentNode.removeChild(buttonDiv)
                        count++
                        typeWriterIndex = 0
                        typeWriter()
                        cursor.parentNode.removeChild(cursor)
                        img.parentNode.removeChild(img)

                    },700)
                }
            })
        }
        else{
            cursor.parentNode.removeChild(cursor)
        }


    }
    else{
        setTimeout(typeWriter, 100)
    }
}

init();