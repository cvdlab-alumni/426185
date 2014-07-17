/*
* Functions Muri
*/
function createWalls(){
	var walls = new THREE.Object3D();

	//SALONE

	// Muro sala - cucina
	var muroSaloneCucina = [0,3,7.5,0];
	var holeSaloneCucina = [7.1,0,2.4,6.2];
	var wallSaloneCucina = createWallOneHole("plaster-diffuse.jpg", muroSaloneCucina, holeSaloneCucina);
	wallSaloneCucina.rotation.x= Math.PI/2;
	wallSaloneCucina.position.set(11,5.495,0);
	walls.add(wallSaloneCucina);

	// Muro sala - saloncino
	var muroSaloneSaloncino = [0,3,7.5,0];
	var holeSaloneSaloncino = [6.7,0,2.45,5.8];
	var wallSaloneSaloncino = createWallOneHole("plaster-diffuse.jpg", muroSaloneSaloncino, holeSaloneSaloncino);
	wallSaloneSaloncino.rotation.x= Math.PI/2;
	wallSaloneSaloncino.rotation.y= Math.PI;
	wallSaloneSaloncino.position.set(18.5,-2.59,0);
	walls.add(wallSaloneSaloncino);
	
	// Muro sala - corridoio
	var muroSaloneCorridoio = [0,3,8.1,0];
	var wallSaloneCorridoio = createWallWithoutHole("plaster-diffuse.jpg", muroSaloneCorridoio);
	wallSaloneCorridoio.rotation.x= Math.PI/2;
	wallSaloneCorridoio.rotation.y= Math.PI/2;
	wallSaloneCorridoio.position.set(18.381,-2.58,0);
	walls.add(wallSaloneCorridoio);

	// Muro sala - esterno
	var muroSaloneEsterno = [0,3,8.1,0];
	var holeSaloneEsterno = [3.5,0,2.4,0.5];
	var wallSaloneEsterno = createWallOneHole("plaster-diffuse.jpg", muroSaloneCorridoio, holeSaloneEsterno);
	wallSaloneEsterno.rotation.x= Math.PI/2;
	wallSaloneEsterno.rotation.y= Math.PI/2;
	wallSaloneEsterno.position.set(11.307,-2.58,0);
	walls.add(wallSaloneEsterno);

	//SALONCINO

	// Muro saloncino - salone
	var muroSaloncinoEsternoLungo = [0,3,7.5,0];
	var holeSaloncinoEsternoLungo = [6.7,0,2.45,5.8];
	var wallSaloncinoEsternoLungo = createWallOneHole("plaster-diffuse.jpg", muroSaloncinoEsternoLungo, holeSaloncinoEsternoLungo);
	wallSaloncinoEsternoLungo.rotation.x= Math.PI/2;
	wallSaloncinoEsternoLungo.rotation.y= Math.PI;
	wallSaloncinoEsternoLungo.position.set(18.5,-2.71,0);
	walls.add(wallSaloncinoEsternoLungo);

	// Muro saloncino - esterno corto
	var muroSaloneEsternoCorto = [0,3,4.1,0];
	var holeSaloneEsternoCorto = [2.96,1,2.4,1.6];
	var wallSaloneEsternoCorto = createWallOneHole("plaster-diffuse.jpg", muroSaloneEsternoCorto, holeSaloneEsternoCorto);
	wallSaloneEsternoCorto.rotation.x= Math.PI/2;
	wallSaloneEsternoCorto.rotation.y= Math.PI/2;
	wallSaloneEsternoCorto.position.set(11.318,-6.69,0);
	walls.add(wallSaloneEsternoCorto);

	// Muro saloncino - esterno senza porta
	var muroSaloncinoEsternoVuoto = [0,3,7.5,0];
	var wallSaloncinoEsternoVuoto = createWallWithoutHole("plaster-diffuse.jpg", muroSaloncinoEsternoVuoto);
	wallSaloncinoEsternoVuoto.rotation.x= Math.PI/2;
	wallSaloncinoEsternoVuoto.rotation.y= Math.PI;
	wallSaloncinoEsternoVuoto.position.set(18.5,-6.688,0);
	walls.add(wallSaloncinoEsternoVuoto);

	// Muro saloncino - camera da letto grande
	var muroSaloneCameraLettoGrande = [0,3,4.1,0];
	var holeSaloneCameraLettoGrande = [2.9,0,2.45,2];
	var wallSaloneCameraLettoGrande = createWallOneHole("plaster-diffuse.jpg", muroSaloneCameraLettoGrande, holeSaloneCameraLettoGrande);
	wallSaloneCameraLettoGrande.rotation.x= Math.PI/2;
	wallSaloneCameraLettoGrande.rotation.y= Math.PI/2;
	wallSaloneCameraLettoGrande.position.set(18.389,-6.69,0);
	walls.add(wallSaloneCameraLettoGrande);

	//CAMERA DA LETTO GRANDE

	// Muro camera da letto grande - saloncino
	var muroCameraLettoGrandeSaloncino = [0,3,4.1,0];
	var holeCameraLettoGrandeSaloncino = [2.9,0,2.45,2];
	var wallCameraLettoGrandeSaloncino = createWallOneHole("plaster-diffuse.jpg", muroCameraLettoGrandeSaloncino, holeCameraLettoGrandeSaloncino);
	wallCameraLettoGrandeSaloncino.rotation.x= Math.PI/2;
	wallCameraLettoGrandeSaloncino.rotation.y= Math.PI/2;
	wallCameraLettoGrandeSaloncino.position.set(18.52,-6.69,0);
	walls.add(wallCameraLettoGrandeSaloncino);

	// Muro camera da letto grande - esterno finestra
	var muroCameraLettoGrandeEsternoFinestra = [0,3,4.1,0];
	var holeCameraLettoGrandeEsternoFinestra = [2.96,1,2.4,1.56];
	var wallCameraLettoGrandeEsternoFinestra = createWallOneHole("plaster-diffuse.jpg", muroCameraLettoGrandeEsternoFinestra, holeCameraLettoGrandeEsternoFinestra);
	wallCameraLettoGrandeEsternoFinestra.rotation.x= Math.PI/2;
	wallCameraLettoGrandeEsternoFinestra.rotation.y= Math.PI/2;
	wallCameraLettoGrandeEsternoFinestra.position.set(27.59,-6.69,0);
	walls.add(wallCameraLettoGrandeEsternoFinestra);

	// Muro camera da letto grande - esterno
	var muroCameraLettoEsternoVuoto1 = [0,3,9.1,0];
	var wallCameraLettoEsternoVuoto1 = createWallWithoutHole("plaster-diffuse.jpg", muroCameraLettoEsternoVuoto1);
	wallCameraLettoEsternoVuoto1.rotation.x= Math.PI/2;
	wallCameraLettoEsternoVuoto1.rotation.y= Math.PI;
	wallCameraLettoEsternoVuoto1.position.set(27.6,-6.68,0);
	walls.add(wallCameraLettoEsternoVuoto1);

	// Muro camera da letto grande - studio
	var muroCameraLettoStudio = [0,3,9.1,0];
	var wallCameraLettoStudio = createWallWithoutHole("plaster-diffuse.jpg", muroCameraLettoStudio);
	wallCameraLettoStudio.rotation.x= Math.PI/2;
	wallCameraLettoStudio.rotation.y= Math.PI;
	wallCameraLettoStudio.position.set(27.6,-2.71,0);
	walls.add(wallCameraLettoStudio);

	//ENTRATA

	//Muro ingresso
	var muroIngresso = [0,3,2,0];
	var holeIngresso = [1.4,0,2.4,0.49];
	var wallIngresso = createWallOneHole("plaster-diffuse.jpg", muroIngresso, holeIngresso);
	wallIngresso.rotation.x= Math.PI/2;
	wallIngresso.position.set(16.4,9.593,0);
	walls.add(wallIngresso);

	//Muro ingresso - salone
	var muroIngressoSalone = [0,3,2,0];
	var holeIngressoSalone = [1.71,0,2.4,0.81];
	var wallIngressoSalone = createWallOneHole("plaster-diffuse.jpg", muroIngressoSalone, holeIngressoSalone);
	wallIngressoSalone.rotation.x= Math.PI/2;
	wallIngressoSalone.position.set(16.4,5.61,0);
	walls.add(wallIngressoSalone);

	//Muro ingresso - cucina
	var muroIngressoCucina = [0,3,4,0];
	var holeIngressoCucina = [1.45,0,2.45,0.55];
	var wallIngressoCucina = createWallOneHole("plaster-diffuse.jpg", muroIngressoCucina, holeIngressoCucina);
	wallIngressoCucina.rotation.x= Math.PI/2;
	wallIngressoCucina.rotation.y= Math.PI/2;
	wallIngressoCucina.position.set(16.41,5.61,0);
	walls.add(wallIngressoCucina);
	
	//Muro ingresso - corridoio
	var muroIngressoCorridoio = [0,3,4,0];
	var holeIngressoCorridoio = [1.35,0,2.45,0.52];
	var wallIngressoCorridoio = createWallOneHole("plaster-diffuse.jpg", muroIngressoCorridoio, holeIngressoCorridoio);
	wallIngressoCorridoio.rotation.x= Math.PI/2;
	wallIngressoCorridoio.rotation.y= Math.PI/2;
	wallIngressoCorridoio.position.set(18.39,5.67,0);
	walls.add(wallIngressoCorridoio);


	//CUCINA

	//Muro cucina - ingresso
	var muroCucinaIngresso = [0,3,4,0];
	var holeCucinaIngresso = [1.45,0,2.45,0.55];
	var wallCucinaIngresso = createWallOneHole("mosaicocucina.jpg", muroCucinaIngresso, holeCucinaIngresso);
	wallCucinaIngresso.rotation.x= Math.PI/2;
	wallCucinaIngresso.rotation.y= Math.PI/2;
	wallCucinaIngresso.position.set(16.29,5.605,0);
	walls.add(wallCucinaIngresso);

	//Muro cucina - salone
	var muroCucinaSalone = [0,3,5.3,0];
	var wallCucinaSalone = createWallWithoutHole("mosaicocucina.jpg", muroCucinaSalone);
	wallCucinaSalone.rotation.x= Math.PI/2;
	wallCucinaSalone.position.set(11,5.61,0);
	walls.add(wallCucinaSalone);

	//Muro cucina - esterno
	var muroCucinaEsterno = [0,3,5.3,0];
	var wallCucinaEsterno = createWallWithoutHole("mosaicocucina.jpg", muroCucinaEsterno);
	wallCucinaEsterno.rotation.x= Math.PI/2;
	wallCucinaEsterno.position.set(11,9.58,0);
	walls.add(wallCucinaEsterno);

	//Muro cucina - finestra
	var muroCucinaFinestra = [0,3,4,0];
	var holeCucinaFinestra = [3.7,1,2.4,2.75];
	var wallCucinaFinestra = createWallOneHole("mosaicocucina.jpg", muroCucinaFinestra, holeCucinaFinestra);
	wallCucinaFinestra.rotation.x= Math.PI/2;
	wallCucinaFinestra.rotation.y= Math.PI/2;
	wallCucinaFinestra.position.set(11.31,5.61,0);
	walls.add(wallCucinaFinestra);

	//STANZINO

	//Muro stanzino - ingresso
	var muroStanzinoIngresso = [0,3,2,0];
	var wallStanzinoIngresso = createWallWithoutHole("plaster-diffuse.jpg", muroStanzinoIngresso);
	wallStanzinoIngresso.rotation.x= Math.PI/2;
	wallStanzinoIngresso.rotation.y= Math.PI/2;
	wallStanzinoIngresso.position.set(18.51,7.66,0);
	walls.add(wallStanzinoIngresso);

	//Muro stanzino - camera da letto piccola
	var muroStanzinoCameraLettoPiccola = [0,3,2,0];
	var wallStanzinoCameraLettoPiccola = createWallWithoutHole("plaster-diffuse.jpg", muroStanzinoCameraLettoPiccola);
	wallStanzinoCameraLettoPiccola.rotation.x= Math.PI/2;
	wallStanzinoCameraLettoPiccola.rotation.y= Math.PI/2;
	wallStanzinoCameraLettoPiccola.position.set(21.49,7.65,0);
	walls.add(wallStanzinoCameraLettoPiccola);

	//Muro stanzino - esterno
	var muroStanzinoEsterno = [0,3,3,0];
	var wallStanzinoEsterno = createWallWithoutHole("plaster-diffuse.jpg", muroStanzinoEsterno);
	wallStanzinoEsterno.rotation.x= Math.PI/2;
	wallStanzinoEsterno.position.set(18.47,9.59,0);
	walls.add(wallStanzinoEsterno);

	//Muro stanzino - corridoio
	var muroStanzinoCorriodoio = [0,3,3,0];
	var holeStanzinoCorriodoio = [1.65,0,2.45,0.75];
	var wallStanzinoCorriodoio = createWallOneHole("plaster-diffuse.jpg", muroStanzinoCorriodoio, holeStanzinoCorriodoio);
	wallStanzinoCorriodoio.rotation.x= Math.PI/2;
	wallStanzinoCorriodoio.position.set(18.47,7.71,0);
	walls.add(wallStanzinoCorriodoio);

	//CORRIDOIO

	//Muro corridoio - stanzino
	var muroCorridoioStanzino = [0,3,3,0];
	var holeCorridoioStanzino = [1.65,0,2.45,0.75];
	var wallCorridoioStanzino = createWallOneHole("spugnatoceleste.jpg", muroCorridoioStanzino, holeCorridoioStanzino);
	wallCorridoioStanzino.rotation.x= Math.PI/2;
	wallCorridoioStanzino.position.set(18.49,7.59,0);
	walls.add(wallCorridoioStanzino);

	//Muro corridoio - studio
	var muroCorridoioStudio = [0,3,3,0];
	var holeCorridoioStudio = [1.55,0,2.45,0.65];
	var wallCorridoioStudio = createWallOneHole("spugnatoceleste.jpg", muroCorridoioStudio, holeCorridoioStudio);
	wallCorridoioStudio.rotation.x= Math.PI/2;
	wallCorridoioStudio.position.set(18.47,1.51,0);
	walls.add(wallCorridoioStudio);

	//Muro corridoio - salone
	var muroCorriodioSalone = [0,3,6.15,0];
	var holeCorriodioSalone = [1.51,0,2.45,0.59];
	var wallCorriodioSalone = createWallOneHole("spugnatoceleste.jpg", muroCorriodioSalone, holeCorriodioSalone);
	wallCorriodioSalone.rotation.x= Math.PI/2;
	wallCorriodioSalone.rotation.y= Math.PI*3/2;
	wallCorriodioSalone.position.set(18.51,7.65,0);
	walls.add(wallCorriodioSalone);

	//Muro corridoio - stanze
	var muroCorriodioStanze = [0,3,6.15,0];
	var hole1CorriodioStanze = [1.47,0,2.41,0.63];
	var hole2CorriodioStanze = [4.5,0,2.44,3.6];
	var wallCorriodioStanze = createWallTwoHole("spugnatoceleste.jpg", muroCorriodioStanze, hole1CorriodioStanze, hole2CorriodioStanze);
	wallCorriodioStanze.rotation.x= Math.PI/2;
	wallCorriodioStanze.rotation.y= Math.PI*3/2;
	wallCorriodioStanze.position.set(21.49,7.65,0);
	walls.add(wallCorriodioStanze);

	//CAMERA DA LETTO PICCOLA

	//Muro stanza da letto piccola - corridoio
	var muroCameraLettoPiccolaCorridoio= [0,3,4,0];
	var holeCameraLettoPiccolaCorridoio = [1.45,0,2.45,0.55];
	var wallCameraLettoPiccolaCorridoio = createWallOneHole("spugnatoceleste.jpg", muroCameraLettoPiccolaCorridoio, holeCameraLettoPiccolaCorridoio);
	wallCameraLettoPiccolaCorridoio.rotation.x= Math.PI/2;
	wallCameraLettoPiccolaCorridoio.rotation.y= Math.PI/2;
	wallCameraLettoPiccolaCorridoio.position.set(21.61,5.60,0);
	walls.add(wallCameraLettoPiccolaCorridoio);

	//Muro stanza da letto piccola - esterno piccolo
	var muroCameraLettoPiccolaEsternoPiccolo = [0,3,4,0];
	var wallCameraLettoPiccolaEsternoPiccolo = createWallWithoutHole("spugnatoceleste.jpg", muroCameraLettoPiccolaEsternoPiccolo);
	wallCameraLettoPiccolaEsternoPiccolo.rotation.x= Math.PI/2;
	wallCameraLettoPiccolaEsternoPiccolo.rotation.y= Math.PI/2;
	wallCameraLettoPiccolaEsternoPiccolo.position.set(27.59,5.60,0);
	walls.add(wallCameraLettoPiccolaEsternoPiccolo);

	//Muro stanza da letto piccola - esterno grande
	var muroCameraLettoPiccolaEsternoGrande = [0,3,6.4,0];
	var wallCameraLettoPiccolaEsternoGrande = createWallWithoutHole("spugnatoceleste.jpg", muroCameraLettoPiccolaEsternoGrande);
	wallCameraLettoPiccolaEsternoGrande.rotation.x= Math.PI/2;
	wallCameraLettoPiccolaEsternoGrande.position.set(21.5,9.59,0);
	walls.add(wallCameraLettoPiccolaEsternoGrande);

	//Muro stanza da letto piccola - bagno
	var muroCameraLettoPiccolaBagno = [0,3,6.4,0];
	var wallCameraLettoPiccolaBagno = createWallWithoutHole("spugnatoceleste.jpg", muroCameraLettoPiccolaBagno);
	wallCameraLettoPiccolaBagno.rotation.x= Math.PI/2;
	wallCameraLettoPiccolaBagno.position.set(21.5,5.61,0);
	walls.add(wallCameraLettoPiccolaBagno);

	//BAGNO

	//Muro bagno - stanza da letto piccola
	var muroBagnoStanzaLettoPiccola = [0,3,6.4,0];
	var wallBagnoStanzaLettoPiccola = createWallWithoutHole("mosaicobagno.jpg", muroBagnoStanzaLettoPiccola);
	wallBagnoStanzaLettoPiccola.rotation.x= Math.PI/2;
	wallBagnoStanzaLettoPiccola.position.set(21.5,5.49,0);
	walls.add(wallBagnoStanzaLettoPiccola);

	//Muro bagno - studio
	var muroBagnoStudio = [0,3,6.4,0];
	var wallBagnoStudio = createWallWithoutHole("mosaicobagno.jpg", muroBagnoStudio);
	wallBagnoStudio.rotation.x= Math.PI/2;
	wallBagnoStudio.position.set(21.5,1.51,0);
	walls.add(wallBagnoStudio);

	// Muro bagno - esterno finestra
	var muroBagnoEsternoFinestra = [0,3,3.9,0];
	var holeBagnoEsternoFinestra = [2.9,1,2.4,1.5];
	var wallBagnoEsternoFinestra = createWallOneHole("mosaicobagno.jpg", muroBagnoEsternoFinestra, holeBagnoEsternoFinestra);
	wallBagnoEsternoFinestra.rotation.x= Math.PI/2;
	wallBagnoEsternoFinestra.rotation.y= Math.PI/2;
	wallBagnoEsternoFinestra.position.set(27.58,1.58,0);
	walls.add(wallBagnoEsternoFinestra);

	//Muro bagno - corridoio
	var muroBagnoCorridoio= [0,3,4,0];
	var holeBagnoCorridoio = [2.55, 0,2.45,1.60];
	var wallBagnoCorridoio = createWallOneHole("mosaicobagno.jpg", muroBagnoCorridoio, holeBagnoCorridoio);
	wallBagnoCorridoio.rotation.x= Math.PI/2;
	wallBagnoCorridoio.rotation.y= Math.PI/2;
	wallBagnoCorridoio.position.set(21.61,1.51,0);
	walls.add(wallBagnoCorridoio);

	//STUDIO

	//Muro studio - camerda da letto grande
	var muroStudioCameraLetto = [0,3,9.1,0];
	var wallStudioCameraLetto = createWallWithoutHole("spugnatoceleste.jpg", muroStudioCameraLetto);
	wallStudioCameraLetto.rotation.x= Math.PI/2;
	wallStudioCameraLetto.rotation.y= Math.PI;
	wallStudioCameraLetto.position.set(27.6,-2.59,0);
	walls.add(wallStudioCameraLetto);

	//Muro studio - bagno
	var muroStudioBagno = [0,3,9.1,0];
	var holeStudioBagno = [8.48, 0,2.4,7.58];
	var wallStudioBagno = createWallOneHole("spugnatoceleste.jpg", muroStudioBagno, holeStudioBagno);
	wallStudioBagno.rotation.x= Math.PI/2;
	wallStudioBagno.rotation.y= Math.PI;
	wallStudioBagno.position.set(27.6,1.39,0);
	walls.add(wallStudioBagno);

	// Muro studio - corridoio
	var muroStudioCorridoio = [0,3,4.1,0];
	var wallStudioCorridoio = createWallWithoutHole("spugnatoceleste.jpg", muroStudioCorridoio);
	wallStudioCorridoio.rotation.x= Math.PI/2;
	wallStudioCorridoio.rotation.y= Math.PI/2;
	wallStudioCorridoio.position.set(18.51,-2.578,0);
	walls.add(wallStudioCorridoio);

	// Muro studio - esterno finestra
	var muroStudioEsternoFinestra = [0,3,4.1,0];
	var holeStudioEsternoFinestra = [2.85,1,2.4,1.48];
	var wallStudioEsternoFinestra = createWallOneHole("spugnatoceleste.jpg", muroStudioEsternoFinestra, holeStudioEsternoFinestra);
	wallStudioEsternoFinestra.rotation.x= Math.PI/2;
	wallStudioEsternoFinestra.rotation.y= Math.PI/2;
	wallStudioEsternoFinestra.position.set(27.59,-2.60,0);
	walls.add(wallStudioEsternoFinestra);

	//MURA PALAZZO

	//Muro Vuoto
	var muroVuoto = [0,3,10,0];
	var wallVuoto = createWallWithoutHole("granito2.jpg", muroVuoto);
	wallVuoto.rotation.x= Math.PI/2;
	wallVuoto.rotation.y= Math.PI;
	wallVuoto.position.set(21,-7.004,0);
	walls.add(wallVuoto);

	var muroVuoto2 = [0,3,6.9,0];
	var wallVuoto2 = createWallWithoutHole("granito2.jpg", muroVuoto2);
	wallVuoto2.rotation.x= Math.PI/2;
	wallVuoto2.rotation.y= Math.PI;
	wallVuoto2.position.set(27.9,-7.004,0);
	walls.add(wallVuoto2);

	//Muro della porta
	var muroPorta = [0,3,10,0];
	var holeMuroPorta = [4.1,0,2.4,3.2];
	var wallPorta = createWallOneHole("granito2.jpg", muroPorta, holeMuroPorta);
	wallPorta.rotation.x= Math.PI/2;
	wallPorta.rotation.y= Math.PI;
	wallPorta.position.set(21,9.92,0);
	walls.add(wallPorta);

	var muroPorta2 = [0,3,6.9,0];
	var wallPorta2 = createWallWithoutHole("granito2.jpg", muroPorta2);
	wallPorta2.rotation.x= Math.PI/2;
	wallPorta2.rotation.y= Math.PI;
	wallPorta2.position.set(27.9,9.92,0);
	walls.add(wallPorta2);

	//Muro finestrone
	var muroFinestrone = [0,3,10,0];
	var holeFinestrone1 = [3.3,1,2.4,1.9];
	var holeFinestrone2 = [7.9,0.4,2.4,4.9];
	var wallFinestrone = createWallTwoHole("granito2.jpg", muroFinestrone, holeFinestrone1, holeFinestrone2);
	wallFinestrone.rotation.x= Math.PI/2;
	wallFinestrone.rotation.y= Math.PI/2;
	wallFinestrone.position.set(10.989,-7,0);
	walls.add(wallFinestrone);

	var muroFinestrone2 = [0,3,6.9,0];
	var holeFinestrone2 = [6.3,1,2.4,5.35];
	var wallFinestrone2 = createWallOneHole("granito2.jpg", muroFinestrone2, holeFinestrone2);
	wallFinestrone2.rotation.x= Math.PI/2;
	wallFinestrone2.rotation.y= Math.PI/2;
	wallFinestrone2.position.set(10.989,3,0);
	walls.add(wallFinestrone2);

	//Muro Finestre
	var muroFinestre = [0,3,10,0];
	var holeFinestre1 = [3.3,1,2.4,1.9];
	var holeFinestre2 = [7.4,1,2.4,5.85];
	var wallFinestre = createWallTwoHole("granito2.jpg", muroFinestre, holeFinestre1, holeFinestre2);
	wallFinestre.rotation.x= Math.PI/2;
	wallFinestre.rotation.y= Math.PI/2;
	wallFinestre.position.set(27.907,-7,0);
	walls.add(wallFinestre);

	var muroFinestre2 = [0,3,6.9,0];
	var holeFinestre2 = [1.5,1,2.4,0.10];
	var wallFinestre2 = createWallOneHole("granito2.jpg", muroFinestre2, holeFinestre2);
	wallFinestre2.rotation.x= Math.PI/2;
	wallFinestre2.rotation.y= Math.PI/2;
	wallFinestre2.position.set(27.907,3,0);
	walls.add(wallFinestre2);


	return walls
}

function createMesh(geom, texture) {
	var texture = THREE.ImageUtils.loadTexture("examples/assets/textures/general/" + texture)
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	geom.computeVertexNormals();
	var mat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
		mat.map = texture;
		mat.map.repeat.set(0.1, 0.1);
	var mesh = new THREE.Mesh(geom, mat);
	return mesh;
}

//Funzione che ritorna un muro senza porte o finestre
function createWallWithoutHole(rivestimento, muro) {
		function drawShape() {
			var shape = new THREE.Shape();
				shape.moveTo(muro[0],muro[1]);
				shape.lineTo(muro[2],muro[1]);
				shape.lineTo(muro[2],muro[3]);
				shape.lineTo(muro[0],muro[3]);
				shape.lineTo(muro[0],muro[1]);
		return shape;
		}
		var shape1 = createMesh(new THREE.ShapeGeometry(drawShape()),rivestimento);

	return shape1;		
}

//Funzione che torna un muro con una porta o una finestra
function createWallOneHole(rivestimento, muro, foro) {
		function drawShape() {
			var shape = new THREE.Shape();
				shape.moveTo(muro[0],muro[1]);
				shape.lineTo(muro[2],muro[1]);
				shape.lineTo(muro[2],muro[3]);
				shape.lineTo(muro[0],muro[3]);
				shape.lineTo(muro[0],muro[1]);
			var hole = new THREE.Path();
				hole.moveTo(foro[0],foro[1]);
				hole.lineTo(foro[0],foro[2]);
				hole.lineTo(foro[3],foro[2]);
				hole.lineTo(foro[3],foro[1]);
				shape.holes.push(hole);
		return shape;
		}
		var shape1 = createMesh(new THREE.ShapeGeometry(drawShape()),rivestimento);

	return shape1;		
}

//Funzione che torna un muro con due fori
function createWallTwoHole(rivestimento, muro, foro1, foro2) {
		function drawShape() {
			var shape = new THREE.Shape();
				shape.moveTo(muro[0],muro[1]);
				shape.lineTo(muro[2],muro[1]);
				shape.lineTo(muro[2],muro[3]);
				shape.lineTo(muro[0],muro[3]);
				shape.lineTo(muro[0],muro[1]);
			var hole = new THREE.Path();
				hole.moveTo(foro1[0],foro1[1]);
				hole.lineTo(foro1[0],foro1[2]);
				hole.lineTo(foro1[3],foro1[2]);
				hole.lineTo(foro1[3],foro1[1]);
				shape.holes.push(hole);
			var hole2 = new THREE.Path();
				hole2.moveTo(foro2[0],foro2[1]);
				hole2.lineTo(foro2[0],foro2[2]);
				hole2.lineTo(foro2[3],foro2[2]);
				hole2.lineTo(foro2[3],foro2[1]);
				shape.holes.push(hole2);
		return shape;
		}
		var shape1 = createMesh(new THREE.ShapeGeometry(drawShape()),rivestimento);
	return shape1
}

//Funzione che torna un muro con tre fori
function createWallThreeHole(rivestimento, muro, foro1, foro2, foro3) {
		function drawShape() {
			var shape = new THREE.Shape();
				shape.moveTo(muro[0],muro[1]);
				shape.lineTo(muro[2],muro[1]);
				shape.lineTo(muro[2],muro[3]);
				shape.lineTo(muro[0],muro[3]);
				shape.lineTo(muro[0],muro[1]);
			var hole = new THREE.Path();
				hole.moveTo(foro1[0],foro1[1]);
				hole.lineTo(foro1[0],foro1[2]);
				hole.lineTo(foro1[3],foro1[2]);
				hole.lineTo(foro1[3],foro1[1]);
				shape.holes.push(hole);
			var hole2 = new THREE.Path();
				hole2.moveTo(foro2[0],foro2[1]);
				hole2.lineTo(foro2[0],foro2[2]);
				hole2.lineTo(foro2[3],foro2[2]);
				hole2.lineTo(foro2[3],foro2[1]);
				shape.holes.push(hole2);
			var hole3 = new THREE.Path();
				hole3.moveTo(foro3[0],foro3[1]);
				hole3.lineTo(foro3[0],foro3[2]);
				hole3.lineTo(foro3[3],foro3[2]);
				hole3.lineTo(foro3[3],foro3[1]);
				shape.holes.push(hole3);
		return shape;
		}
		var shape1 = createMesh(new THREE.ShapeGeometry(drawShape()),rivestimento);

	return shape1;		
}