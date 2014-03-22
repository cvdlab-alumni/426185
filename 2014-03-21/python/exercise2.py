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

#ESERCIZIO 2
facciata = COLOR(WHITE)(CUBOID([75,0,15]))
x_pilastri = QUOTE([-3.35,1.55]*14)
y_pilastri = QUOTE([0])
pilastri = COLOR(BLACK)(INSR(PROD)([x_pilastri,y_pilastri,QUOTE([12.1])]))
facciata_2 = T([1,3])([15,15])(CUBOID([45,0,27]))
north = STRUCT([pilastri,facciata, facciata_2])

facciata2 = COLOR(WHITE)(CUBOID([135,0,15]))
x = QUOTE([-30,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1])
y = QUOTE([0])
finestre = COLOR(BLACK)(INSR(PROD)([x,y,QUOTE([-3,3,-3,3,-3])]))
facciata2_2 = T([1,3])([30,15])(CUBOID([45,0,27]))
est = STRUCT([finestre,facciata2,facciata2_2])

facciata3 = COLOR(WHITE)(CUBOID([135,0,15]))
x2 = QUOTE([-30,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1])
y2 = QUOTE([0])
finestre2 = COLOR(BLACK)(INSR(PROD)([x2,y2,QUOTE([-3,3,-3,3,-3])]))
facciata3_2 = T([1,3])([30,15])(CUBOID([45,0,27]))
ovest = STRUCT([finestre2,facciata3, facciata3_2])

facciata4 = COLOR(WHITE)(CUBOID([75,0,15]))
x_f = QUOTE([-1.77,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38,2.38,-2.38])
y_f = QUOTE([0])
f = COLOR(BLACK)(INSR(PROD)([x_f,y_f,QUOTE([4])]))
facciata4_2 = T([1,3])([15,15])(CUBOID([45,0,27]))
south = STRUCT([f,facciata4, facciata4_2])

#mock_up_3d = STRUCT([floor_0, north, rotate([1,3],-PI/2,est), rotate([1,3],PI/2,ovest),T(2)(135)(rotate([2,3],PI,south))])
