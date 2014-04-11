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

#ESERCIZIO 1
floor_0 = CUBOID([75,135,0])
lato = CUBOID([2.5,30,2])
parziale = STRUCT([lato,floor_0])
lato1 = T(2)(105)(lato)
lato2 = T(1)(72.5)(lato1)
lato3 = T(1)(72.5)(lato)
lato_piccolo = CUBOID([20,2.5,2.5])
lato_piccolo1 = T(2)(30)(lato_piccolo)
lato_piccolo2 = T(2)(105)(lato_piccolo)
lato_piccolo3 = T(1)(55)(lato_piccolo2)
lato_piccolo4 = T(1)(55)(lato_piccolo1)
parziale = STRUCT([lato,lato2,lato3,lato1,lato_piccolo1,lato_piccolo2,lato_piccolo3,lato_piccolo4,floor_0])

x_pilastri = QUOTE([-3.35,1.55]*14)
y_pilastri = QUOTE([-0.4,1.55])
pilastri = INSR(PROD)([x_pilastri,y_pilastri,QUOTE([2.5])])
parziale1 = STRUCT([parziale, pilastri])

x_p = QUOTE([-20,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18])
y_p = QUOTE([-30,1.2])
banchi = INSR(PROD)([x_p,y_p,QUOTE([2.5])])
parziale2 = STRUCT([parziale1, banchi])

x_p2 = QUOTE([-20,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18])
y_p2 = QUOTE([-65,1.2])
banchi2 = INSR(PROD)([x_p2,y_p2,QUOTE([2.5])])
parziale3 = STRUCT([parziale2, banchi2])

x_p3 = QUOTE([-20, -1.18, 1.2])
y_p3 = QUOTE([-30,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18])
banchi3 = INSR(PROD)([x_p3,y_p3,QUOTE([2.5])])
parziale4 = STRUCT([parziale3, banchi3])

x_p4 = QUOTE([-51.82, -1.18,  1.2])
y_p4 = QUOTE([-30,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18])
banchi4 = INSR(PROD)([x_p4,y_p4,QUOTE([2.5])])
parziale5 = STRUCT([parziale4, banchi4])
