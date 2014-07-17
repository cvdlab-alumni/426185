function createWindows(){
	var windows = new THREE.Object3D();

	//CUCINA
	var finestraCucina = singleWindow(0.95,1.4,11,8.36,1,-1);
	finestraCucina.rotation.z = Math.PI/2;
	windows.add(finestraCucina);

	//BAGNO
	var finestraBagno = singleWindow(1.4,1.4,27.6,3.11,1,1);
	finestraBagno.rotation.z = Math.PI/2;
	windows.add(finestraBagno);

	//STUDIO
	var finestraStudio = singleWindow(1.5,1.4,27.6,-1.10,1,1);
	finestraStudio.rotation.z = Math.PI/2;
	windows.add(finestraStudio);

	//SALA
	var finestrone = doubleWindows(3,2,11,-2.1,0.4,-1);
	finestrone.rotation.z = Math.PI/2;
	windows.add(finestrone);

	//SALONCINO
	var finestraSaloncino = singleWindow(1.4,1.4,11,-5.12,1,-1);
	finestraSaloncino.rotation.z = Math.PI/2;
	windows.add(finestraSaloncino);

	//CAMERA DA LETTO GRANDE
	var finestraLetto = singleWindow(1.4,1.4,27.6,-5.12,1,1);
	finestraLetto.rotation.z = Math.PI/2;
 	windows.add(finestraLetto);

	return windows;
}

function doubleWindows(width,heigh, positionX, positionY,positionZ,reverse){
	var finestra = new THREE.Object3D();

	//anta sx
	var antaSx = createAnta(width,heigh);
	finestra.add(antaSx);
	//anta dx
	var antaDx = createAnta(width,heigh);
	antaDx.position.x = width/2;
	finestra.add(antaDx);

	finestra.position.set(positionX,positionY,positionZ);


	hook1 = new THREE.Object3D();
	hook2 = new THREE.Object3D();

	finestra.add(hook1);
	hook1.add(antaSx);
	antaSx.position.set(0,0,0);
	
	finestra.add(hook2);
	hook2.position.set(width,0,0);
	hook2.add(antaDx);
	antaDx.position.set(-width/2,0,0);

    toIntersect.push(antaSx.children[0]);
    antaSx.children[0].open=false;
	antaSx.children[0].interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: -reverse*Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	toIntersect.push(antaDx.children[0]);
    antaDx.children[0].open=false;
	antaDx.children[0].interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: reverse*Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}

	return finestra;

}

function singleWindow(width,heigh, positionX, positionY,positionZ,reverse){
	var finestra = new THREE.Object3D();
	//anta 
	var anta = createAnta(width*2,heigh);
	finestra.add(anta);
	finestra.position.set(positionX,positionY,positionZ);


	hook1 = new THREE.Object3D();

	finestra.add(hook1);
	hook1.add(anta);
	anta.position.set(0,0,0);
	
    toIntersect.push(anta.children[0]);
    anta.children[0].open=false;
	anta.children[0].interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: -reverse*Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	 return finestra;
}

function createAnta(width,heigh){
	var anta = new THREE.Object3D();
	var options = {
			amount: .28,
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

	anta.add(shape);
	//vetro anta sx
	var vetroX = width*2/5;
	var vetroY = heigh*4/5;
	var vetroZ = .05;

	var geometry = new THREE.BoxGeometry( vetroX,vetroY,vetroZ );
	var material = new THREE.MeshLambertMaterial( {color: 0x87cefa, transparent: true, opacity: .5} );
	var vetro = new THREE.Mesh( geometry, material );
	vetro.position.set(vetroX/2+width/20,vetroY/2+heigh/10,vetroZ/2);
	anta.add( vetro );
	anta.rotation.x = (Math.PI/2);

	return anta ;
}


