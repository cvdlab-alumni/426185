function createVideo(){
  var v = new THREE.Object3D();

  //TELEVISIONE
  var videoTelevisione = creaVideoTV(1.5,1.2);
  videoTelevisione.position.set(-14.6623,1.605,-1.855);
  videoTelevisione.rotation.x = -Math.PI/18;
  v.add(videoTelevisione);

  //IPAD
  var videoIPAD = creaVideoIPAD(0.95,0.72);
  videoIPAD.position.set(-17.745,1.027,3.01);
  videoIPAD.rotation.x = -Math.PI/2;
  videoIPAD.rotation.z = Math.PI/2;
  //videoIPAD.rotation.y = -Math.PI/2;

  v.add(videoIPAD);



  return v;
}

function creaVideoTV(width, height){

  var $video1 = $('#videoTV');
  var video1 = $video1[0];
  
  var texture1 = new THREE.Texture(video1);
  texture1.minFilter = THREE.LinearFilter;
  texture1.magFilter = THREE.LinearFilter;
  texture1.format = THREE.RGBFormat;
  texture1.generateMipmaps = true;

  var cube1;
  geometry1 = new THREE.PlaneGeometry (width, height);
  material1 = new THREE.MeshBasicMaterial({map: texture1, die: THREE.DoubleSide});
  cube1 = new THREE.Mesh(geometry1, material1);

video1.pause();
      toIntersect.push(cube1);
cube1.visible = false;
cube1.interact = function () {
  if (!this.visible) {
    this.visible = true;
    video1.play();
  }
  else {
    this.visible = false;
    video1.pause();
  }
}

return cube1;
}

function creaVideoIPAD(width, height){

  var $video2 = $('#videoIPAD');
  var video2 = $video2[0];
  
  var texture2 = new THREE.Texture(video2);
  texture2.minFilter = THREE.LinearFilter;
  texture2.magFilter = THREE.LinearFilter;
  texture2.format = THREE.RGBFormat;
  texture2.generateMipmaps = true;

  var cube2;
  geometry = new THREE.PlaneGeometry (width, height);
  material = new THREE.MeshBasicMaterial({map: texture2, die: THREE.DoubleSide});
  cube2 = new THREE.Mesh(geometry, material);

video2.pause();
      toIntersect.push(cube2);
cube2.visible = false;
cube2.interact = function () {
  if (!this.visible) {
    this.visible = true;
    video2.play();
  }
  else {
    this.visible = false;
    video2.pause();
  }
}

return cube2;
}
