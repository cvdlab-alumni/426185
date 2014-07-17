function createFloors(){
	  var floor = new THREE.Object3D();

      //Pavimento salone 1
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/floor-wood.jpg")
      var floor_salone = new THREE.Mesh(
        new THREE.CubeGeometry(7.2, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_salone.position.x = 14.9;
      floor_salone.position.y = 3.5;
      floor_salone.position.z = 0.3;
      floor.add(floor_salone);

      //Pavimento salone 2
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/floor-wood.jpg")
      var floor_salone = new THREE.Mesh(
        new THREE.CubeGeometry(7.2, 4.05, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_salone.position.x = 14.9;
      floor_salone.position.y = -0.57;
      floor_salone.position.z = 0.3;
      floor.add(floor_salone);

      //Pavimento della saloncino
      var floor_saloncino = new THREE.Mesh(
        new THREE.CubeGeometry(7.57, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_saloncino.position.x = 14.8;
      floor_saloncino.position.y = -4.65;
      floor_saloncino.position.z = 0.3;
      floor.add(floor_saloncino);

      //Pavimento della camera da letto grande
      var floor_camera_letto_grande = new THREE.Mesh(
        new THREE.CubeGeometry(9.35, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_camera_letto_grande.position.x = 23.2;
      floor_camera_letto_grande.position.y = -4.65;
      floor_camera_letto_grande.position.z = 0.3;
      floor.add(floor_camera_letto_grande);

      //Pavimento cucina
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/mattonelle.jpg")
      var floor_cucina = new THREE.Mesh(
        new THREE.CubeGeometry(5.18, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_cucina.position.x = 13.815;
      floor_cucina.position.y = 7.6;
      floor_cucina.position.z = 0.3;
      floor.add(floor_cucina);      

      //Pavimento ingresso
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/floor-wood.jpg")
      var floor_ingresso = new THREE.Mesh(
        new THREE.CubeGeometry(2, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_ingresso.position.x = 17.4;
      floor_ingresso.position.y = 7.6;
      floor_ingresso.position.z = 0.3;
      floor.add(floor_ingresso);    

      //Pavimento stanzino
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/pavimento_grigio_sfumato.jpg")
      var floor_cucina = new THREE.Mesh(
        new THREE.CubeGeometry(3.2, 2, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_cucina.position.x = 20;
      floor_cucina.position.y = 8.6;
      floor_cucina.position.z = 0.3;
      floor.add(floor_cucina);

      //Pavimento corridoio
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/pavimento_grigio_sfumato.jpg")
      var floor_corridoio = new THREE.Mesh(
        new THREE.CubeGeometry(3.14, 6.2, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_corridoio.position.x = 20;
      floor_corridoio.position.y = 4.5;
      floor_corridoio.position.z = 0.3;
      floor.add(floor_corridoio);  

      //Pavimento studio
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/pavimento_grigio_sfumato.jpg")
      var floor_studio = new THREE.Mesh(
        new THREE.CubeGeometry(9.35, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_studio.position.x = 23.2;
      floor_studio.position.y = -0.65;
      floor_studio.position.z = 0.3;
      floor.add(floor_studio);

      //Pavimento bagno
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/pavimentobagno.jpg")
      var floor_studio = new THREE.Mesh(
        new THREE.CubeGeometry(6.3, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_studio.position.x = 24.7;
      floor_studio.position.y = 3.5;
      floor_studio.position.z = 0.3;
      floor.add(floor_studio);

      //Pavimento camera da letto piccola
      var floorTex = THREE.ImageUtils.loadTexture("examples/assets/textures/general/pavimento_grigio_sfumato.jpg")
      var floor_studio = new THREE.Mesh(
        new THREE.CubeGeometry(6.3, 4.1, 0.1, 30), 
        new THREE.MeshPhongMaterial({map: floorTex})
      );
      floor_studio.position.x = 24.7;
      floor_studio.position.y = 7.5;
      floor_studio.position.z = 0.3;
      floor.add(floor_studio);  

    return floor;
}