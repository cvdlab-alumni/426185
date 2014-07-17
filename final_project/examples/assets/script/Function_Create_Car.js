function createCar(){
	var car = new THREE.Object3D();
	car.name = "toaster";
	var carOBJ = new THREE.OBJMTLLoader();
	carOBJ.addEventListener('load', function (event) {

	  var obj = event.content;
	  obj.scale.set(0.13,0.13,0.13);
	  obj.rotation.y = Math.PI/2;
	  obj.position.set(-16.1,0.45,19.240);
	  mesh = obj;

	  car.add(mesh);
	});
	carOBJ.load(
	  'examples/assets/models/car.obj', 
	  'examples/assets/models/car.mtl', 
	  {side: THREE.DoubleSide}
	  );
	var geometry = new THREE.SphereGeometry(2,8,8 );
	var material = new THREE.MeshBasicMaterial( {opacity:0, transparent:true } );
	sphere = new THREE.Mesh( geometry, material );
	sphere.position.set(-16.1,0.45,19.240);
	car.add(sphere);
 		
	
  		toIntersect.push(sphere);
	sphere.interact =  function(){
		new TWEEN.Tween(car.position)
  		.to({x: 20,y:0, z:0}, 4000)
  		.start();  		
  		car_audio.play();
  		setTimeout( function() { car.remove(mesh) } , 4010);
  		setTimeout( function() { car_audio.pause() } , 4010);
};

	var car_audio =  document.createElement('audio');
	var car_audio_src = document.createElement('source');
	car_audio_src.src = 'examples/assets/movies/motore.mp3';
	car_audio.appendChild(car_audio_src);
	car_audio.loop = false;
	car_audio.onPlay = false;
	car_audio.paused === true;


  	return car;
  }