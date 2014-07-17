function createDoors(){
  var door = new THREE.Object3D();

    //INGRESSO
    var portaIngresso = creaPortone(0.9,2.01,0.25,"portone_texture.jpg","portone_texture.jpg","portone_texture.jpg",1,"o");
    portaIngresso.rotation.x = Math.PI/2;
    portaIngresso.position.set(17.36-(1*0.45),9.75,1.4);
    door.add(portaIngresso);

    var stipiteIngresso = creaStipite(1.55,2.55, 17.36-(1*0.45),9.75,0.8);
    stipiteIngresso.position.set(17.36-0.5-(1*0.45),9.75 + 0.15,1.4-1.3);
    door.add(stipiteIngresso);

    //PORTA INGRESSO - SALONE
    var portaIngressoCucina = creaPorta(0.9,2.01,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",-1,"o");
    portaIngressoCucina.rotation.x = Math.PI/2;
    portaIngressoCucina.position.set(17.65-(-1*0.45),5.56,1.38);
    door.add(portaIngressoCucina);

    var stipiteIngressoSalone = creaStipite(1.15,2.65, 17.56-(1*0.45),9.75,0.8);
    stipiteIngressoSalone.position.set(17.65 - 0.105-(1*0.45),5.56+0.057,1.4-1.35);
    door.add(stipiteIngressoSalone);
    
    //PORTA INGRESSO - CORRIDOIO
    var portaIngressoCorridoio = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"v");
    portaIngressoCorridoio.rotation.x = Math.PI/2;
    portaIngressoCorridoio.rotation.y = Math.PI/2;
    portaIngressoCorridoio.position.set(18.466,6.6-(1*0.45),1.4);
    door.add(portaIngressoCorridoio);

    //PORTA INGRESSO - CUCINA
    var portaIngressoCucina = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"v");
    portaIngressoCucina.rotation.x = Math.PI/2;
    portaIngressoCucina.rotation.y = Math.PI/2;
    portaIngressoCucina.position.set(16.366,6.6-(1*0.45),1.4);
    door.add(portaIngressoCucina);

    //PORTA SALONE - SALONCINO
    var portaSaloneSaloncino = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"o");
    portaSaloneSaloncino.rotation.x = Math.PI/2;
    portaSaloneSaloncino.position.set(12.266-(1*0.45),-2.64,1.4);
    door.add(portaSaloneSaloncino);

    var stipiteSaloneSaloncino = creaStipite(1.15,2.65, 17.36-(1*0.45),9.75,0.8);
    stipiteSaloneSaloncino.rotation.x = Math.PI/2;
    stipiteSaloneSaloncino.position.set(12.266-0.575,-2.64-(1*0.45)+0.4959,1.4-1.35);
    door.add(stipiteSaloneSaloncino);

    //PORTA SALONCINO - CAMERA DA LETTO GRANDE
    var portaSaloncinoCameraLettoGrande = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"v");
    portaSaloncinoCameraLettoGrande.rotation.x = Math.PI/2;
    portaSaloncinoCameraLettoGrande.rotation.y = Math.PI/2;
    portaSaloncinoCameraLettoGrande.position.set(18.466,-4.25-(1*0.45),1.4);
    door.add(portaSaloncinoCameraLettoGrande);

    var stipiteSaloncinoLettoGrande = creaStipite(1.15,2.65, 17.36-(1*0.45),9.75,0.8);
    stipiteSaloncinoLettoGrande.rotation.y = Math.PI/2;
    stipiteSaloncinoLettoGrande.position.set(18.466-0.065,-4.25-(1*0.45)-0.137,1.4-1.35);
    door.add(stipiteSaloncinoLettoGrande);
    stipiteSaloncinoLettoGrande

    //PORTA CORRIDOIO - STANZINO
    var portaCorridoioStanzino = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"o");
    portaCorridoioStanzino.rotation.x = Math.PI/2;
    portaCorridoioStanzino.position.set(19.67-(1*0.45),7.65,1.4);
    door.add(portaCorridoioStanzino);

    //PORTA CORRIDOIO - CAMERA DA LETTO PICCOLA
    var portaCorridoioCameraLettoPiccola = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"v");
    portaCorridoioCameraLettoPiccola.rotation.x = Math.PI/2;
    portaCorridoioCameraLettoPiccola.rotation.y = Math.PI/2;
    portaCorridoioCameraLettoPiccola.position.set(21.56,6.6-(1*0.45),1.4);
    door.add(portaCorridoioCameraLettoPiccola);

    var stipiteCorridoioCameraPiccola = creaStipite(1.15,2.65, 17.36-(1*0.45),9.75,0.8);
    stipiteCorridoioCameraPiccola.rotation.y = Math.PI/2;
    stipiteCorridoioCameraPiccola.position.set(21.56-0.065,6.6-(1*0.45)-0.137,1.4-1.35);
    door.add(stipiteCorridoioCameraPiccola);

    //PORTA CORRIDOIO - BAGNO
    var portaCorridoioCameraLettoPiccola = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"v");
    portaCorridoioCameraLettoPiccola.rotation.x = Math.PI/2;
    portaCorridoioCameraLettoPiccola.rotation.y = Math.PI/2;
    portaCorridoioCameraLettoPiccola.position.set(21.56,3.6-(1*0.45),1.4);
    door.add(portaCorridoioCameraLettoPiccola);

    var stipiteCorridoioBagno = creaStipite(1.15,2.65, 17.36-(1*0.45),9.75,0.8);
    stipiteCorridoioBagno.rotation.y = Math.PI/2;
    stipiteCorridoioBagno.position.set(21.56-0.065,3.6-(1*0.45)-0.137,1.4-1.35);
    door.add(stipiteCorridoioBagno);

    //PORTA CORRIDODIO - STUDIO
    var portaCorriodioStudio = creaPorta(0.9,2.1,0.11,"porta_texture.jpg","porta_texture.jpg","porta_texture.jpg",1,"o");
    portaCorriodioStudio.rotation.x = Math.PI/2;
    portaCorriodioStudio.position.set(19.57-(1*0.45),1.45,1.4);
    door.add(portaCorriodioStudio);

    var stipiteCorridoioCameraPiccola = creaStipite(1.15,2.65, 17.36-(1*0.45),9.75,0.8);
    stipiteCorridoioCameraPiccola.rotation.x = Math.PI/2;
    stipiteCorridoioCameraPiccola.position.set(19.57-0.575,1.45-(1*0.45)+0.5059,1.4-1.35);
    door.add(stipiteCorridoioCameraPiccola);

    door.rotation.y = Math.PI;
    door.rotation.x = Math.PI/2;

    return door;
  }

  function creaPorta(side1, side2, side3, texture1, texture2, texture3, reverse, orientation){
    var materials = [
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture2)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture1)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   })
    ];

    var door = new THREE.Mesh(
      new THREE.BoxGeometry(side1,side2,side3),
      new THREE.MeshFaceMaterial(materials));
//add door
var objDoor = new THREE.Object3D();
door.position.set(reverse*side1/2,0,0);
objDoor.add(door);
      //objDoor.door = door;
      toIntersect.push(door);
      door.open = false;
      door.interact=function(){
        if (orientation === "o")  {
          if(!this.open){
            new TWEEN.Tween(this.parent.rotation)
            .to({y: -reverse*Math.PI/2},1000)
            .start();
            this.open=true;
          } else {
            new TWEEN.Tween(this.parent.rotation)
            .to({y: 0},1000)
            .start();
            this.open=false;
          }
        } else
        {
          if(!this.open){
            new TWEEN.Tween(this.parent.rotation)
            .to({y: 0},1000)
            .start();
            this.open=true;
          } else {
            new TWEEN.Tween(this.parent.rotation)
            .to({y: reverse*Math.PI/2},1000)
            .start();
            this.open=false;
          }

        }
      }

      return objDoor;
    }


 function creaPortone(side1, side2, side3, texture1, texture2, texture3, reverse, orientation){
    var materials = [
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture2)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture1)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   }),
    new THREE.MeshLambertMaterial({
     map: THREE.ImageUtils.loadTexture('examples/assets/textures/general/'+texture3)
   })
    ];

    var door = new THREE.Mesh(
      new THREE.BoxGeometry(side1,side2,side3),
      new THREE.MeshFaceMaterial(materials));


  var stereoM =  document.createElement('audio');
  var stereoSRC = document.createElement('source');
  stereoSRC.src = 'examples/assets/movies/portone.mp3';
  stereoM.appendChild(stereoSRC);
  stereoM.loop = false;
  stereoM.onPlay = false;
  stereoM.paused === true;

  var stereoM2 =  document.createElement('audio');
  var stereoSRC2 = document.createElement('source');
  stereoSRC2.src = 'examples/assets/movies/porta.mp3';
  stereoM2.appendChild(stereoSRC2);
  stereoM2.loop = false;
  stereoM2.onPlay = false;
  stereoM2.paused === true;

//add door
var objDoor = new THREE.Object3D();
door.position.set(reverse*side1/2,0,0);
objDoor.add(door);
      //objDoor.door = door;
      toIntersect.push(door);
      door.open = false;
      door.interact=function(){
        if (orientation === "o")  {
          if(!this.open){
            new TWEEN.Tween(this.parent.rotation)
            .to({y: -reverse*Math.PI/2},1000)
            .delay(1500)
            .start();
            stereoM.play();
                  setTimeout( function() { stereoM2.play() } , 1001);
                    this.open=true;
            door.parent.parent.parent.position.y = 23;
          } else {
            new TWEEN.Tween(this.parent.rotation)
            .to({y: 0},1000)
            .start();
            this.open=false;
              door.parent.parent.parent.position.y = 24.3;
          }
        } else
        {
          if(!this.open){
            new TWEEN.Tween(this.parent.rotation)
            .to({y: 0},1000)
            .start();
            this.open=true;
          } else {
            new TWEEN.Tween(this.parent.rotation)
            .to({y: reverse*Math.PI/2},1000)
            .start();
            this.open=false;
          }

        }
      }

      return objDoor;
    }




function creaStipite(width,heigh, positionX, positionY,positionZ){
  var stipide = new THREE.Object3D();
  //anta 
  var foro = createForo(width*2,heigh);
  stipide.add(foro);
  stipide.position.set(positionX,positionY,positionZ);

   return foro;
}

function createForo(width,heigh){
  var foro = new THREE.Object3D();
  var options = {
      amount: .11,
      bevelEnabled: false
  };
  shape = createMesh(new THREE.ExtrudeGeometry(drawShape(), options));

  function drawShape() {
    var rectShape = new THREE.Shape();
    rectShape.moveTo( 0,0 );
    rectShape.lineTo( width/2, 0 );
    rectShape.lineTo( width/2, heigh );
    rectShape.lineTo( 0,heigh );
    rectShape.lineTo( 0, 0 );

    var hole1 = new THREE.Path();
    hole1.moveTo(width/20,heigh/10);
    hole1.lineTo(9*width/20,heigh/10);
    hole1.lineTo(9*width/20,9*heigh/10);
    hole1.lineTo(width/20,9*heigh/10);
    hole1.lineTo(width/20,heigh/10);
    rectShape.holes.push(hole1);
    return rectShape;
  }

  function createMesh(geom) {
    var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    var mesh = new THREE.Mesh( geom, material );
    return mesh;
  }

  foro.add(shape);
  //vetro anta sx
  foro.rotation.x = (Math.PI/2);

  return foro ;
}
