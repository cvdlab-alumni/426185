function createStereo(){
	var stereo = new THREE.Object3D();
	stereo.name = "toaster";
	var stereoOBJ = new THREE.OBJMTLLoader();
	stereoOBJ.addEventListener('load', function (event) {

	  var obj = event.content;
	  obj.scale.set(0.033,0.033,0.033);

	  obj.position.set(-22.5,0.45,8.740);
	  mesh = obj;

	  stereo.add(mesh);
	});
	stereoOBJ.load(
	  'examples/assets/models/stereo/mini_stereo.obj', 
	  'examples/assets/models/stereo/mini_stereo.mtl', 
	  {side: THREE.DoubleSide}
	  );
	var geometry = new THREE.SphereGeometry(2,8,8 );
	var material = new THREE.MeshBasicMaterial( {opacity:0, transparent:true } );
	sphere = new THREE.Mesh( geometry, material );
	sphere.position.set(-22.5,0.45,8.740);
	stereo.add(sphere);
 		
	
  		toIntersect.push(sphere);
	sphere.interact =  function(){
  		if (stereoM.paused === true)
  			stereoM.play();
  		else
  			stereoM.pause();
};

	var stereoM =  document.createElement('audio');
	var stereoSRC = document.createElement('source');
	stereoSRC.src = 'examples/assets/movies/rtl.mp3';
	stereoM.appendChild(stereoSRC);
	stereoM.loop = false;
	stereoM.onPlay = false;
	stereoM.paused === true;


  	return stereo;
  }