from pyplasm import *

def circle(r):
	def ball(p):
 		a,r = p
		return [r*COS(a), r*SIN(a)]
	dom2D = PROD([INTERVALS(2*PI)(50), INTERVALS(1)(1)])
	return S([1,2])([r,r])(MAP(ball)(dom2D))

def extrude(obj,z):
	return PROD([obj, Q(z)])

def parzcircle(r):
	def ball(p):
 		a,r = p
		return [r*COS(a), r*SIN(a)]
	dom2D = PROD([INTERVALS(0.6*PI)(50), INTERVALS(1)(1)])
	return S([1,2])([r,r])(MAP(ball)(dom2D))

def rotate(coord,values,obj):
	return R(coord)(values)(obj)

#ESERCIZIO 3
x_pilastri = QUOTE([-3.35,1.55]*14)
y_pilastri = QUOTE([-0.4,1.55])
pilastri = INSR(PROD)([x_pilastri,y_pilastri,QUOTE([12.1])])
mura = CUBOID([75.72,135,15])
muroVUOTO = CUBOID([72.18,5.16,12.1])
muroFINITO = DIFFERENCE([mura, T(1)(1.77)(muroVUOTO)])
parziale = STRUCT([muroFINITO, T([1,2])([1.77,-0.5])(COLOR(BLUE)(pilastri))])

cuboTetto = CUBOID([45,45,27])
cuboPiccolo = CUBOID([5,5,1])
cuboPiccoloT = T([1,2,3])([20,-5,22])(cuboPiccolo)
tettoP = STRUCT([cuboTetto, cuboPiccoloT])
cuboTettoT = T([1,2,3])([15,16.06,15])(tettoP)
parziale2 = STRUCT([parziale,cuboTettoT])

cuboVuoto2 = CUBOID([65,9.8,10])
cuboVuoto2T = T([1,2])([5.36,125.25])(cuboVuoto2)
parziale3 = DIFFERENCE([parziale2,cuboVuoto2T])

semicerchio = parzcircle(25.98)
semi = extrude(semicerchio,45)
s = MAP([S1,S3,S2])(semi)
sr = rotate([1,3],PI/6,s)
srt = T([1,2,3])([37,16,25])(sr)
parziale4 = STRUCT([parziale3,srt])

#VIEW(parziale4)
