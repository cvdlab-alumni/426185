    var toIntersect = [];

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    // position and point the camera to the center of the scene
    camera.position.set(50,70,20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // add spotlight for the shadows
    /*var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(11, 18, 80);
    spotLight.intensity = 1.20;
    scene.add(spotLight);*/

    var projector = new THREE.Projector();







