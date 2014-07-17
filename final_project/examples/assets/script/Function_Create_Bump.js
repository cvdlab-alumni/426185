
function creaBump(posX, posY,posZ, width, heigh, imageFile, bump){


  var quadro = createMeshBump(new THREE.BoxGeometry(width,0.005, heigh), imageFile, bump);
  quadro.position.set(posX,posY,posZ);
  return quadro;

}


function createMeshBump(geom, imageFile, bump) {
  var texture = THREE.ImageUtils.loadTexture("examples/assets/images/" + imageFile)
  geom.computeVertexNormals();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;

  if (bump) {
    var bump = THREE.ImageUtils.loadTexture("examples/assets/images/" + bump)
    mat.bumpMap = bump;
    mat.bumpScale = 0.2;
  }

  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}


function createPaint(){
  paintings = new THREE.Object3D();

  //SALONE
  quadro_salone = creaBump(1.402,5.5,2.2,1.2,1.2,"sfondo.png","sfondoBump.png");
  quadro_salone.name = "quadro_salone";
  quadro_salone.rotation.z = Math.PI/2;
  quadro_salone.rotation.x = Math.PI/2;
  quadro_salone.position.set(-11.37,1.92,2.35);
  paintings.add(quadro_salone);

  //INGRESSO
  quadro_ingresso = creaBump(1.402,5.5,2.2,1.2,1.2,"cornice4_filled.jpg","cornice4_bumped.jpg");
  quadro_ingresso.name = "quadro_ingresso";
  quadro_ingresso.rotation.z = Math.PI/2;
  quadro_ingresso.rotation.x = Math.PI*3/2;
  quadro_ingresso.position.set(-18.351,1.92,8.15);
  paintings.add(quadro_ingresso);
  
  //CORRIDOIO
  quadro_corridoio = creaBump(1.402,5.5,2.2,1.2,1.2,"cornice1.jpg","cornice1_bumped.jpg");
  quadro_corridoio.name = "quadro_corridoio";
  quadro_corridoio.rotation.z = Math.PI/2;
  quadro_corridoio.rotation.x = Math.PI/2;
  quadro_corridoio.position.set(-18.57,1.92,4.150);
  paintings.add(quadro_corridoio);

  return paintings; 
}