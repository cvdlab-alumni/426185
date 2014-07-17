//Carico l'oggetto "casa"
function createOBJ(){

  var oggetti = new THREE.Object3D();

  var casa = new THREE.OBJLoader();
  casa.load('examples/assets/models/casa.obj', function (obj) {
    var material = new THREE.MeshLambertMaterial({color: 0xbebebe, shading: THREE.FlatShading, side: THREE.DoubleSide});
    obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    mesh = obj;
    obj.rotation.x = Math.PI/2;
    obj.rotation.y = Math.PI;
    obj.position.set(-11,0,-7)
//spotLight.target = plane;
oggetti.add(obj);
});
    var scale = new THREE.OBJLoader();
  casa.load('examples/assets/models/staircase.obj', function (obj) {
    var material = new THREE.MeshLambertMaterial({color: 0xbebebe, shading: THREE.FlatShading, side: THREE.DoubleSide});
    obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    mesh = obj;

    obj.scale.set(0.215,0.125,0.1);
    obj.position.set(-17.33,0.021,10.28)
//spotLight.target = plane;
oggetti.add(obj);
});

//STUDIO
//lampadario
var lampadario = new THREE.OBJMTLLoader();
lampadario.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.05,0.05,0.05);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-23.52,2.55,-0.650);
  mesh = obj;

  oggetti.add(mesh);
});
lampadario.load(
  'examples/assets/models/lampade/lamp_luster/lamp_luster.obj', 
  'examples/assets/models/lampade/lamp_luster/lamp_luster.mtl', 
  {side: THREE.DoubleSide}
  );


var lightStudio = lightLamp(-23.52,2.55,-0.650);
oggetti.add(lightStudio);

//Computer
var mac_obj = new THREE.OBJMTLLoader();
mac_obj.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(1.5,1.5,1.5);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-25.52,1.55,-1.150);
  mesh = obj;

  oggetti.add(mesh);
});
mac_obj.load(
  'examples/assets/models/mac/imac/imac.obj', 
  'examples/assets/models/mac/imac/imac.mtl', 
  {side: THREE.DoubleSide}
  );


//iPhone
var iphone = new THREE.OBJMTLLoader();
iphone.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.003,0.003,0.003);   
  obj.position.set(-26.77,1.25, -2.2);
  mesh = obj;

  oggetti.add(mesh);
});
iphone.load(
  'examples/assets/models/iphone/iphone.obj', 

  {side: THREE.DoubleSide}
  );

//Letto
var letto = new THREE.OBJMTLLoader();
letto.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.0015,0.0015,0.0015);
  obj.rotation.y = Math.PI/2;
  obj.position.set(-19,0.45,-0.97);
  mesh = obj;

  oggetti.add(mesh);
});
letto.load(
  'examples/assets/models/letto/letto.obj', 
  'examples/assets/models/scrivania_completa/letto.mtl', 
  {side: THREE.DoubleSide}
  );

//Scrivania
var desk = new THREE.OBJMTLLoader();
desk.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.025,0.025,0.025);
  obj.position.set(-26,0.45,-2.1);
  mesh = obj;

  oggetti.add(mesh);
});
desk.load(
  'examples/assets/models/modernDeskOBJ.obj', 
  'examples/assets/models/modernDeskOBJ.mtl', 
  {side: THREE.DoubleSide}
  );

//Armadio
var armadio2 = new THREE.OBJMTLLoader();
armadio2.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.055,0.025,0.025);
  obj.rotation.y = Math.PI;
  obj.position.set(-23,0.45,1.38);
  mesh = obj;

  oggetti.add(mesh);
});
armadio2.load(
  'examples/assets/models/armadio2/armadio.obj', 
  'examples/assets/models/armadio2/armadio.mtl', 
  {side: THREE.DoubleSide}
  );

//Poltrona
var poltrona_obj = new THREE.OBJMTLLoader();
poltrona_obj.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.55,0.55,0.55);
  obj.rotation.y = Math.PI/2;  
  obj.position.set(-26.3,0.45,-1.30);
  mesh = obj;

  oggetti.add(mesh);
});
poltrona_obj.load(
  'examples/assets/models/office_chair/office_chair.obj', 
  'examples/assets/models/office_chair/office_chair.mtl', 
  {side: THREE.DoubleSide}
  );

//STANZINO

//Faretti
var faretti = new THREE.OBJMTLLoader();
faretti.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.09,0.09,0.09);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-20.9,2.40,8.550);
  mesh = obj;

  oggetti.add(mesh);
});
faretti.load(
  'examples/assets/models/lampade/faretti/lamp_first.obj', 
  {side: THREE.DoubleSide}
  );
var lightStanzino = lightFaretti(-20.9,2.40,8.550,1);
oggetti.add(lightStanzino);

//Scaffali
var scaffali = new THREE.OBJMTLLoader();
scaffali.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.x = Math.PI/2;
  obj.rotation.y = Math.PI;
  obj.position.set(-10,2.41,3.87);
  mesh = obj;

  oggetti.add(mesh);
});
scaffali.load(
  'examples/assets/models/scaffali/scaffali.obj', 
  'examples/assets/models/scaffali/scaffali.mtl', 
  {side: THREE.DoubleSide}
  );

//SALONCINO
//Lampadario
var lampadario = new THREE.OBJMTLLoader();
lampadario.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.009,0.005,0.009);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-15,2.40,-4.350);
  mesh = obj;

  oggetti.add(mesh);
});
lampadario.load(
  'examples/assets/models/lampade/lamp_light/lamp_light.obj', 
  'examples/assets/models/lampade/lamp_light/lamp_light.mtl', 
  {side: THREE.DoubleSide}
  );

var lightSaloncino = lightLamp(-15,2.40,-4.350);
oggetti.add(lightSaloncino);

//Tavolo
var tavoloSedie2 = new THREE.OBJMTLLoader();
tavoloSedie2.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.85,0.85,0.85);
  obj.rotation.y = Math.PI/2;
  obj.position.set(-14.6,1.2,-5.65);
  mesh = obj;

  oggetti.add(mesh);
});
tavoloSedie2.load(
  'examples/assets/models/tavoloSedie/tavoloSedie.obj', 
  'examples/assets/models/tavoloSedie/tavoloSedie.mtl', 
  {side: THREE.DoubleSide}
  ); 


//SALONE

//Lampadario
var lampadarioSalone = new THREE.OBJMTLLoader();
lampadarioSalone.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.009,0.005,0.009);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-15,2.40,2.350);
  mesh = obj;

  oggetti.add(mesh);
});
lampadarioSalone.load(
  'examples/assets/models/lampade/lamp_light/lamp_light.obj', 
  'examples/assets/models/lampade/lamp_light/lamp_light.mtl', 
  {side: THREE.DoubleSide}
  );

var lightSalone = lightLamp(-15,2.40,2.350);
oggetti.add(lightSalone);


//Divano
var sofa = new THREE.OBJMTLLoader();
sofa.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI*3/2;  
  obj.scale.set(0.012,0.012,0.012);        
  obj.position.set(-14.7,0.45,3.850);
  mesh = obj;

  oggetti.add(mesh);
});
sofa.load(
  'examples/assets/models/sofa/sofa.obj', 
  'examples/assets/models/sofa/sofa.mtl', 
  {side: THREE.DoubleSide}
  );
 

//Tavolino TV
var tavolinoTV = new THREE.OBJMTLLoader();
tavolinoTV.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.013,0.008,0.013);        
  obj.position.set(-14.67,0.45,-1.850);
  mesh = obj;

  oggetti.add(mesh);
});
tavolinoTV.load(
  'examples/assets/models/tvStand/tvStand.obj', 
  'examples/assets/models/tvStand/tvStand.mtl', 
  {side: THREE.DoubleSide}
  );

//Pianta
var pianta = new THREE.OBJMTLLoader();
pianta.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.001,0.001,0.001);
  obj.position.set(-16.5,0.45,-1.850);
  mesh = obj;

  oggetti.add(mesh);
});
pianta.load(
  'examples/assets/models/plant/plant.obj', 
  'examples/assets/models/plant/plant.mtl', 
  {side: THREE.DoubleSide}
  );

//Tavolo di vetro
var glassDesk = new THREE.OBJMTLLoader();
glassDesk.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.01,0.01,0.01);
  obj.position.set(-15.5,0.45,2.250);
  mesh = obj;

  oggetti.add(mesh);
});
glassDesk.load(
  'examples/assets/models/StylishDesk1/StylishDesk.obj', 
  'examples/assets/models/StylishDesk1/StylishDesk.mtl', 
  {side: THREE.DoubleSide}
  );

//TV
var tv = new THREE.OBJMTLLoader();
tv.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.x = Math.PI/2;
  obj.scale.set(0.004,0.004,0.004);        
  obj.position.set(-14.65,0.46,-2.050);
  mesh = obj;

  oggetti.add(mesh);
});
tv.load(
  'examples/assets/models/tv/tv.obj', 
  'examples/assets/models/tv/tv.mtl', 
  {side: THREE.DoubleSide}
  );

//Libreria
var libreria = new THREE.OBJMTLLoader();
libreria.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.02,0.01,0.015);   
  obj.rotation.y = Math.PI;
  obj.position.set(-18.5,0.46,3.5);
  mesh = obj;

  oggetti.add(mesh);
});
libreria.load(
  'examples/assets/models/libreria/libreria.obj', 
  'examples/assets/models/libreria/libreria.mtl', 
  {side: THREE.DoubleSide}
  );

//Libri
var libri = new THREE.OBJMTLLoader();
libri.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.006,0.006,0.006);   

  obj.position.set(-17.97,0.70, 1.0);
  mesh = obj;

  oggetti.add(mesh);
});
libri.load(
  'examples/assets/models/libri/obj/book.obj', 
  'examples/assets/models/libri/obj/book.mtl', 
  {side: THREE.DoubleSide}
  );

//Tablet
var tablet = new THREE.OBJMTLLoader();
tablet.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.005,0.005,0.005);   
  obj.rotation.x = Math.PI*3/2;
  obj.position.set(-17.77,.990, 3.0);
  mesh = obj;

  oggetti.add(mesh);
});
tablet.load(
  'examples/assets/models/tablet.obj', 

  {side: THREE.DoubleSide}
  );

//Lampada
var lampada_terra = new THREE.OBJMTLLoader();
lampada_terra.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.035,0.035,0.035);   

  obj.position.set(-11.97,2.40, 5.0);
  mesh = obj;

  oggetti.add(mesh);
});
lampada_terra.load(
  'examples/assets/models/lampada_terra/lampada_terra.obj', 
  'examples/assets/models/lampada_terra/lampada_terra.mtl', 
  {side: THREE.DoubleSide}
  );
var lightLampadaSalone = lightLamp(-11.97,2.70, 5.0);
oggetti.add(lightLampadaSalone);

//BAGNO

//Faretti
var faretti = new THREE.OBJMTLLoader();
faretti.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.09,0.09,0.09);

  obj.position.set(-24,2.40,4.930);
  mesh = obj;

  oggetti.add(mesh);
});
faretti.load(
  'examples/assets/models/lampade/faretti/lamp_first.obj', 
  {side: THREE.DoubleSide}
  );

var lightBagno = lightFarettiReverse(-24,2.40,4.930,-1);
oggetti.add(lightBagno);


//Portaasciugamani
var portaasciugamani = new THREE.OBJMTLLoader();
portaasciugamani.addEventListener('load', function (event) {
  var obj = event.content;
  obj.scale.set(1.6,1.4,1.8);
  obj.rotation.y = Math.PI/3;
  obj.position.set(-23,0.35,3.1240);
  mesh = obj;

  oggetti.add(mesh);
});
portaasciugamani.load(
  'examples/assets/models/appendiabiti/appendiabiti.obj', 
  'examples/assets/models/appendiabiti/appendiabiti.mtl', 
  {side: THREE.DoubleSide}
  );

//Doccia
var glassDesk = new THREE.OBJMTLLoader();
glassDesk.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(1,1,1);
  obj.position.set(-27.55,0.45,1.60);
  mesh = obj;

  oggetti.add(mesh);
});
glassDesk.load(
  'examples/assets/models/Shower/Shower.obj', 
  'examples/assets/models/Shower/Shower.mtl', 
  {side: THREE.DoubleSide}
  );

//WC
var toilet = new THREE.OBJMTLLoader();
toilet.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.27,0.27,0.27);
  obj.rotation.y = Math.PI;
  obj.position.set(-26.55,1.4,4.60);
  mesh = obj;

  oggetti.add(mesh);
});
toilet.load(
  'examples/assets/models/toilet/toilet.obj', 
  'examples/assets/models/toilet/toilet.mtl', 
  {side: THREE.DoubleSide}
  );

//Bidet
var bidet = new THREE.OBJMTLLoader();
bidet.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.016,0.016,0.016);
  obj.rotation.y = Math.PI;
  obj.position.set(-25.75,0.4,4.60);
  mesh = obj;

  oggetti.add(mesh);
});
bidet.load(
  'examples/assets/models/bidet/bidet.obj', 
  'examples/assets/models/bidet/bidet.mtl', 
  {side: THREE.DoubleSide}
  );

//Lavandino
var washbowl = new THREE.OBJMTLLoader();
washbowl.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.011,0.011,0.011);
  obj.rotation.x = Math.PI*3/2;
  obj.position.set(-24.45,0.4,1.90);
  mesh = obj;

  oggetti.add(mesh);
});
washbowl.load(
  'examples/assets/models/washbowl/washbowl.obj', 
  {side: THREE.DoubleSide}
  );

//INGRESSO

//Faretti
var faretti = new THREE.OBJMTLLoader();
faretti.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.09,0.09,0.09);
  obj.rotation.y = Math.PI/2;  
  obj.position.set(-17,2.40,7.850);
  mesh = obj;

  oggetti.add(mesh);
});
faretti.load(
  'examples/assets/models/lampade/faretti/lamp_first.obj', 
  {side: THREE.DoubleSide}
  );

var lightIngresso = lightFaretti(-17,2.40,8.350,-1);
oggetti.add(lightIngresso);


/*var videocitofono = new THREE.OBJMTLLoader();
videocitofono.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.03,0.03,0.03);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-16.45,2.40,8.760);
  mesh = obj;

  oggetti.add(mesh);
});
videocitofono.load(
  'examples/assets/models/intercom_with_screen/intercom_with_screen.obj',
    'examples/assets/models/intercom_with_screen/intercom_with_screen.mtl',
  {side: THREE.DoubleSide}
  );*/
    


//CUCINA

//Lampadario
var lampadario = new THREE.OBJMTLLoader();
lampadario.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.0015,0.0005,0.0015);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-14,2.10,7.650);
  mesh = obj;

  oggetti.add(mesh);
});
lampadario.load(
  'examples/assets/models/lampade/lamp_suspend_light/lamp_suspend_light.obj', 
  'examples/assets/models/lampade/lamp_suspend_light/lamp_suspend_light.mtl', 
  {side: THREE.DoubleSide}
  );

var lightLampadaCucina = lightLamp(-14,2.10,7.650);
oggetti.add(lightLampadaCucina);

//Tavolo
var tavoloSedie = new THREE.OBJMTLLoader();
tavoloSedie.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.014,0.014,0.014);
  obj.rotation.y = Math.PI/2;
  obj.position.set(-13.2,0.45,6.95);
  mesh = obj;

  oggetti.add(mesh);
});
tavoloSedie.load(
  'examples/assets/models/MinimalistDiningTable/table.obj', 
  'examples/assets/models/MinimalistDiningTable/table.mtl', 
  {side: THREE.DoubleSide}
  ); 

//Frutta
var frutta = new THREE.OBJMTLLoader();
frutta.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.0025,0.0025,0.0025);
  obj.rotation.y = Math.PI/2;
  obj.position.set(-13.2,1.52,6.95);
  mesh = obj;

  oggetti.add(mesh);
});
frutta.load(
  'examples/assets/models/fruits/fruits.obj', 
  'examples/assets/models/fruits/fruits.mtl', 
  {side: THREE.DoubleSide}
  ); 


//cucina
var cucina = new THREE.OBJMTLLoader();
cucina.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI;
  obj.scale.set(0.015,0.015,0.014);
  obj.position.set(-13.65,0.41,8.70);
  mesh = obj;

  oggetti.add(mesh);
});
cucina.load(
  'examples/assets/models/cucina/cucina.obj', 
  'examples/assets/models/cucina/cucina.mtl', 
  {side: THREE.DoubleSide}
  );

//cucina
var cucina1 = new THREE.OBJMTLLoader();
cucina1.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI;
  obj.scale.set(0.015,0.015,0.014);
  obj.position.set(-10.55,0.41,8.70);
  mesh = obj;

  oggetti.add(mesh);
});
cucina1.load(
  'examples/assets/models/pianoCucinaSingolo/singolo.obj',
  'examples/assets/models/pianoCucinaSingolo/singolo.mtl',  
  {side: THREE.DoubleSide}
  );

//cucina
var cucina2 = new THREE.OBJMTLLoader();
cucina2.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI;
  obj.scale.set(0.015,0.015,0.014);
  obj.position.set(-11.1,0.41,6.74);
  mesh = obj;

  oggetti.add(mesh);
});
cucina2.load(
  'examples/assets/models/pianoCucinaDoppio/doppio.obj',
  'examples/assets/models/pianoCucinaDoppio/doppio.mtl',  
  {side: THREE.DoubleSide}
  );

//frigorifero
var frigorifero = new THREE.OBJMTLLoader();
frigorifero.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI*3/2;
  obj.scale.set(0.03,0.03,0.03);
  obj.position.set(-15.6,0.41,9.31);
  mesh = obj;

  oggetti.add(mesh);
});
frigorifero .load(
  'examples/assets/models/frigorifero.obj', 
  {side: THREE.DoubleSide}
  );

//CAMERA DA LETTO PICCOLA

//lampadario
var lampadario = new THREE.OBJMTLLoader();
lampadario.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.05,0.05,0.05);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-24.52,2.55,7.250);
  mesh = obj;

  oggetti.add(mesh);
});
lampadario.load(
  'examples/assets/models/lampade/lamp_luster/lamp_luster.obj', 
  'examples/assets/models/lampade/lamp_luster/lamp_luster.mtl', 
  {side: THREE.DoubleSide}
  );

var lightLampadaLettoPiccola = lightLamp(-24.52,2.55,7.25);
oggetti.add(lightLampadaLettoPiccola);

//Scrivania Completa
var scrivania_completa = new THREE.OBJMTLLoader();
scrivania_completa.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.043,0.043,0.043);
  obj.rotation.y = Math.PI/2;
  obj.position.set(-26.1,0.45,19.240);
  mesh = obj;

  oggetti.add(mesh);
});
scrivania_completa.load(
  'examples/assets/models/scrivania_completa/scrivania_completa.obj', 
  'examples/assets/models/scrivania_completa/scrivania_completa.mtl', 
  {side: THREE.DoubleSide}
  );



//Poltrona stanzetta
var poltrona_obj = new THREE.OBJMTLLoader();
poltrona_obj.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.55,0.55,0.55);
  obj.rotation.y = Math.PI*7/4;  
  obj.position.set(-26,0.45,7.80);
  mesh = obj;

  oggetti.add(mesh);
});
poltrona_obj.load(
  'examples/assets/models/office_chair/office_chair.obj', 
  'examples/assets/models/office_chair/office_chair.mtl', 
  {side: THREE.DoubleSide}
  );

//CORRIDOIO

//Faretti
var faretti = new THREE.OBJMTLLoader();
faretti.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.09,0.09,0.09);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-20.9,2.40,5.250);
  mesh = obj;

  oggetti.add(mesh);
});
faretti.load(
  'examples/assets/models/lampade/faretti/lamp_first.obj', 
  {side: THREE.DoubleSide}
  );

var lightCorridoio = lightFaretti(-20.9,2.40,5.250,1);
oggetti.add(lightCorridoio);



//Pianta
var letto_matrimoniale = new THREE.OBJMTLLoader();
letto_matrimoniale.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.0025,0.0025,0.0025);
  obj.rotation.y = Math.PI;  
  obj.position.set(-20.7,0.4,2.20);
  mesh = obj;

  oggetti.add(mesh);
});
letto_matrimoniale.load(
  'examples/assets/models/plant2/plant.obj', 
  'examples/assets/models/plant2/plant.mtl', 
  {side: THREE.DoubleSide}
  );

//CAMERA DA LETTO GRANDE

//lampadario
var lampadario = new THREE.OBJMTLLoader();
lampadario.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.05,0.05,0.05);
  obj.rotation.y = Math.PI*3/2;  
  obj.position.set(-23.52,2.55,-4.650);
  mesh = obj;

  oggetti.add(mesh);
});
lampadario.load(
  'examples/assets/models/lampade/lamp_luster/lamp_luster.obj', 
  'examples/assets/models/lampade/lamp_luster/lamp_luster.mtl', 
  {side: THREE.DoubleSide}
  );

var lightLampadaLettoGrande = lightLamp(-23.52,2.55,-4.650);
oggetti.add(lightLampadaLettoGrande);

//Letto matrimoniale
var letto_matrimoniale = new THREE.OBJMTLLoader();
letto_matrimoniale.addEventListener('load', function (event) {

  var obj = event.content;
  obj.rotation.y = Math.PI;  
  obj.position.set(-4.9,0.4,-12.50);
  mesh = obj;

  oggetti.add(mesh);
});
letto_matrimoniale.load(
  'examples/assets/models/letto_matrimoniale/letto_matrimoniale.obj', 
  'examples/assets/models/letto_matrimoniale/letto_matrimoniale.mtl', 
  {side: THREE.DoubleSide}
  );


//Cassettiera
var cassettiera_camera = new THREE.OBJMTLLoader();
cassettiera_camera.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.035,0.015,0.015);
  obj.position.set(-26.0,0.4,-6.0);
  mesh = obj;

  oggetti.add(mesh);
});
cassettiera_camera.load(
  'examples/assets/models/cassettiera_camera/cassettiera_camera.obj', 
  'examples/assets/models/cassettiera_camera/cassettiera_camera.mtl', 
  {side: THREE.DoubleSide}
  );


//Armadio
var armadio = new THREE.OBJMTLLoader();
armadio.addEventListener('load', function (event) {

  var obj = event.content;
  obj.scale.set(0.02,0.009,0.009);
  obj.position.set(-20.7,0.4,-5.90);
  mesh = obj;

  oggetti.add(mesh);
});
armadio.load(
  'examples/assets/models/armadio/armadio.obj', 
  'examples/assets/models/armadio/armadio.mtl', 
  {side: THREE.DoubleSide}
  );


return oggetti;
}

function lightLamp (x,y,z){
  var sphereBulbGeometry = new THREE.SphereGeometry(0.6,32,32);
  var sphereBulbMaterial = new THREE.MeshPhongMaterial({transparent: true, opacity: 0});
  var sphereBulb = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb.position.set(x, y, z);
  sphereBulb.castShadow = true;
  var hook = new THREE.Object3D();
  hook.position.set(x, y-3, z);
  sphereBulb.add(hook);
  sphereBulb.hook = hook;

  light = new THREE.PointLight( 0xffffff,0,100);
  light.castShadow = true;
  light.target = hook;
  light.position.set(0,-1,0);

  sphereBulb.add(light);
  sphereBulb.light = light;

  sphereBulb.target = hook;
  sphereBulb.on=false;       
  toIntersect.push(sphereBulb);

  sphereBulb.interact=function(){
    if(!sphereBulb.on){
      this.light.intensity=1;

      this.on=true;
    } else {
      this.light.intensity=0;
      this.on=false;
    }

  }

  return sphereBulb;            
}

function lightFarettiReverse (x,y,z,direzione){
  var joint = new THREE.Object3D();
  var sphereBulbGeometry = new THREE.SphereGeometry(0.1,32,32);
  var sphereBulbMaterial = new THREE.MeshPhongMaterial({transparent: true, opacity: 0});

  var sphereBulb1 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb1.position.set(x-0.3, y, z-0.23*(direzione));
  sphereBulb1.castShadow = true;
  joint.add(sphereBulb1);

  var sphereBulb2 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb2.position.set(x, y, z-0.23*(direzione));
  sphereBulb2.castShadow = true;
  joint.add(sphereBulb2);

  var sphereBulb3 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb3.position.set(x+0.3, y, z-0.23*(direzione));
  sphereBulb3.castShadow = true;
  joint.add(sphereBulb3);

  var hook1 = new THREE.Object3D();
  hook1.position.set(x-0.1, y, z+(direzione*3));
  sphereBulb1.add(hook1);
  sphereBulb1.hook1 = hook1;

  var hook2 = new THREE.Object3D();
  hook2.position.set(x, y, z+(direzione*3));
  sphereBulb2.add(hook2);
  sphereBulb2.hook = hook2;

  var hook3 = new THREE.Object3D();
  hook3.position.set(x+0.1, y, z+(direzione*3));
  sphereBulb3.add(hook3);
  sphereBulb3.hook = hook3;

  light1 = new THREE.PointLight( 0xffffff,0,100);
  light1.castShadow = true;
  light1.target = hook1;

  light2 = new THREE.PointLight( 0xffffff,0,100);
  light2.castShadow = true;
  light2.target = hook2;

  light3 = new THREE.PointLight( 0xffffff,0,100);
  light3.castShadow = true;
  light3.target = hook3;

  sphereBulb1.add(light1);
  sphereBulb1.light1 = light1;
  sphereBulb1.target = hook1;

  sphereBulb2.add(light2);
  sphereBulb2.light2 = light2;
  sphereBulb2.target = hook2;

  sphereBulb3.add(light3);
  sphereBulb3.light3 = light3;
  sphereBulb3.target = hook3;

  joint.sphereBulb1 = sphereBulb1;
  joint.sphereBulb2 = sphereBulb2;
  joint.sphereBulb3 = sphereBulb3;
  joint.hook1 = hook1;
  joint.hook2 = hook2;
  joint.hook3 = hook3;
  joint.light1 = light1;
  joint.light2 = light2;
  joint.light3 = light3;

  sphereBulb1.on=false;       
  sphereBulb2.on=false;
  sphereBulb2.on=false;

  toIntersect.push(sphereBulb1);
  toIntersect.push(sphereBulb2);
  toIntersect.push(sphereBulb3);


  sphereBulb1.interact=function(){
    if(!sphereBulb1.on){
      this.light1.intensity=0.3;

      this.on=true;
    } else {
      this.light1.intensity=0;
      this.on=false;
    }

  }            

  sphereBulb2.interact=function(){
    if(!sphereBulb2.on){
      this.light2.intensity=0.3;

      this.on=true;
    } else {
      this.light2.intensity=0;
      this.on=false;
    }

  } 

  sphereBulb3.interact=function(){
    if(!sphereBulb3.on){
      this.light3.intensity=0.3;

      this.on=true;
    } else {
      this.light3.intensity=0;
      this.on=false;
    }

  } 
  return joint;            
}

function lightFaretti (x,y,z,direzione){
  var joint = new THREE.Object3D();
  var sphereBulbGeometry = new THREE.SphereGeometry(0.15,32,32);
  var sphereBulbMaterial = new THREE.MeshPhongMaterial({transparent: true, opacity: 0});

  var sphereBulb1 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb1.position.set(x-0.23*(direzione), y, z-0.3);
  sphereBulb1.castShadow = true;
  joint.add(sphereBulb1);

  var sphereBulb2 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb2.position.set(x-0.23*(direzione), y, z);
  sphereBulb2.castShadow = true;
  joint.add(sphereBulb2);

  var sphereBulb3 = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
  sphereBulb3.position.set(x-0.23*(direzione), y, z+0.3);
  sphereBulb3.castShadow = true;
  joint.add(sphereBulb3);

  var hook1 = new THREE.Object3D();
  hook1.position.set(x+(direzione*3), y, z-0.1);
  sphereBulb1.add(hook1);
  sphereBulb1.hook1 = hook1;

  var hook2 = new THREE.Object3D();
  hook2.position.set(x+(direzione*3), y, z);
  sphereBulb2.add(hook2);
  sphereBulb2.hook = hook2;

  var hook3 = new THREE.Object3D();
  hook3.position.set(x+(direzione*3), y, z-0.1);
  sphereBulb3.add(hook3);
  sphereBulb3.hook = hook3;

  light1 = new THREE.PointLight( 0xffffff,0,100);
  light1.castShadow = true;
  light1.target = hook1;

  light2 = new THREE.PointLight( 0xffffff,0,100);
  light2.castShadow = true;
  light2.target = hook2;

  light3 = new THREE.PointLight( 0xffffff,0,100);
  light3.castShadow = true;
  light3.target = hook3;

  sphereBulb1.add(light1);
  sphereBulb1.light1 = light1;
  sphereBulb1.target = hook1;

  sphereBulb2.add(light2);
  sphereBulb2.light2 = light2;
  sphereBulb2.target = hook2;

  sphereBulb3.add(light3);
  sphereBulb3.light3 = light3;
  sphereBulb3.target = hook3;

  joint.sphereBulb1 = sphereBulb1;
  joint.sphereBulb2 = sphereBulb2;
  joint.sphereBulb3 = sphereBulb3;
  joint.hook1 = hook1;
  joint.hook2 = hook2;
  joint.hook3 = hook3;
  joint.light1 = light1;
  joint.light2 = light2;
  joint.light3 = light3;

  sphereBulb1.on=false;       
  sphereBulb2.on=false;
  sphereBulb2.on=false;

  toIntersect.push(sphereBulb1);
  toIntersect.push(sphereBulb2);
  toIntersect.push(sphereBulb3);


  sphereBulb1.interact=function(){
    if(!sphereBulb1.on){
      this.light1.intensity=0.3;

      this.on=true;
    } else {
      this.light1.intensity=0;
      this.on=false;
    }

  }            

  sphereBulb2.interact=function(){
    if(!sphereBulb2.on){
      this.light2.intensity=0.3;

      this.on=true;
    } else {
      this.light2.intensity=0;
      this.on=false;
    }

  } 

  sphereBulb3.interact=function(){
    if(!sphereBulb3.on){
      this.light3.intensity=0.3;

      this.on=true;
    } else {
      this.light3.intensity=0;
      this.on=false;
    }

  } 
  return joint;            
}
