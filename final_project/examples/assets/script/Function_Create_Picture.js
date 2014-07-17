  function createMesh(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/general"+bump);
      mat.bumpMap = bump;
      mat.bumpScale = 0.2;
    }

    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }

  function creaQuadro 
  geom = new THREE.BoxGeometry(1,0.005,0.6);

  //var quadroIngresso = new createMesh(geom, )