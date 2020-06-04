var container;
var camera, scene, renderer, group, particle;
var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
    container = document.getElementById('canvasContainer')
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    var PI2 = Math.PI * 2;
    var program = function ( context ) {
        context.beginPath();
        context.arc( 0, 0, 0.5, 0, PI2, true );
        context.fill();

    };

    group = new THREE.Group();
    scene.add( group );


    var colors = [0xFFFFFF];
    let numStars = 1200;
    for ( var i = 0; i < numStars; i++ ) {
        var material = new THREE.SpriteCanvasMaterial( {
            color: colors[Math.floor(Math.random() * colors.length)],
            program: program
        } );
        particle = new THREE.Sprite( material );
        particle.position.x = Math.random() * 5000 - 2500;
        particle.position.y = Math.random() * 3000 - 1500;
        particle.position.z = Math.random() * 2000 - 2000;
        particle.scale.x = particle.scale.y = Math.random() * 5 + 2;
        group.add( particle );
    }

    renderer = new THREE.CanvasRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }

}

function onDocumentTouchMove( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }

}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    camera.position.x += ( mouseX - camera.position.x ) * 0.002;
    if (camera.position.x > 100) camera.position.x = 100;
    if (camera.position.x < -100) camera.position.x = -100;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.002;
    if (camera.position.y > 100) camera.position.y = 100;
    if (camera.position.y < -100) camera.position.y = -100;
    camera.lookAt( scene.position );
    // group.rotation.x += 0.0001;
    // group.rotation.y += 0.0002;
    renderer.render( scene, camera );
}