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

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

grigioMura = rgb([219,215,210])
celesteVetro =rgb([176,224,230])


#ESERCIZIO 1
floor_0 = CUBOID([75,135,0])
lato = CUBOID([2.5,30,12.1])
parziale = STRUCT([lato,floor_0])
lato1 = T(2)(105)(lato)
lato2 = T(1)(72.5)(lato1)
lato3 = T(1)(72.5)(lato)
lato_piccolo = CUBOID([20,4.5,12.1])
lato_piccolo_f = CUBOID([22.3,4.5,12.1])
lato_piccolo1 = T(2)(30)(lato_piccolo)
lato_piccolo2 = T(2)(105)(lato_piccolo_f)
lato_piccolo3 = T(1)(52.8)(lato_piccolo2)
lato_piccolo4 = T(1)(55)(lato_piccolo1)
parziale = COLOR(grigioMura)(STRUCT([COLOR(grigioMura)(lato),COLOR(grigioMura)(lato2),COLOR(grigioMura)(lato3),COLOR(grigioMura)(lato1),lato_piccolo1,lato_piccolo2,lato_piccolo3,lato_piccolo4,floor_0]))


x_pilastri = QUOTE([-3.55,1.55]*14)
y_pilastri = QUOTE([-0.4,1.55])
pilastri = INSR(PROD)([x_pilastri,y_pilastri,QUOTE([12.1])])
parziale1 = STRUCT([parziale, COLOR(grigioMura)(pilastri)])


x_p = QUOTE([-0.25, 3.55,-0.25]*18)
y_p = QUOTE([-11,1.2, -98, 1.2])
vetrata = INSR(PROD)([x_p,y_p,QUOTE([5.875, -0.25, 5.875])])
parziale10 = STRUCT([parziale1, COLOR(celesteVetro)(vetrata)])


x_p = QUOTE([-20,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18])
y_p = QUOTE([-30,1.2])
banchi = INSR(PROD)([x_p,y_p,QUOTE([5])])
parziale2 = STRUCT([parziale10, COLOR(grigioMura)(banchi)])

x_p1 = QUOTE([75])
y_p1 = QUOTE([-30,4.5])
banchi1 = INSR(PROD)([x_p1,y_p1,QUOTE([-5,7.1])])
parziale12 = STRUCT([parziale2, COLOR(grigioMura)(banchi1)])

x_p2 = QUOTE([26.51,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,26.18])
y_p2 = QUOTE([-65,1.2])
banchi2 = INSR(PROD)([x_p2,y_p2,QUOTE([5])])
parziale3 = STRUCT([parziale12, COLOR(grigioMura)(banchi2)])

x_p1 = QUOTE([75])
y_p1 = QUOTE([-65,1.2])
banchi32 = INSR(PROD)([x_p1,y_p1,QUOTE([-5,7.1])])
parziale32 = STRUCT([parziale3, COLOR(grigioMura)(banchi32)])

x_p3 = QUOTE([-20, -1.18, 1.2])
y_p3 = QUOTE([-30,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,44.5])
banchi3 = INSR(PROD)([x_p3,y_p3,QUOTE([4, -2.1, 4, -2])])
parziale4 = STRUCT([parziale32, COLOR(grigioMura)(banchi3)])

x_p3 = QUOTE([-20, -1.18, 1.2])
y_p3 = QUOTE([-65, 44.5])
banchi33 = INSR(PROD)([x_p3,y_p3,QUOTE([12.1])])
parziale44 = STRUCT([parziale4, COLOR(grigioMura)(banchi33)])

x_p1 = QUOTE([-20, -1.18, 33])
y_p1 = QUOTE([-30, 34.98])
banchi42 = INSR(PROD)([x_p1,y_p1,QUOTE([-4,2.1, -4, 2])])
parziale42 = STRUCT([parziale44, COLOR(grigioMura)(banchi42)])

x_p4 = QUOTE([-51.82, -1.18,  1.2])
y_p4 = QUOTE([-30,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,3.18,-3.18,44.5])
banchi4 = INSR(PROD)([x_p4,y_p4,QUOTE([4, -2.1, 4, -2])])
parziale5 = STRUCT([parziale42, COLOR(grigioMura)(banchi4)])

x_p3 = QUOTE([-51.82, -1.18,  1.2])
y_p3 = QUOTE([-65, 44.5])
banchi53 = INSR(PROD)([x_p3,y_p3,QUOTE([12.1])])
parziale54 = STRUCT([parziale5, COLOR(grigioMura)(banchi53)])

x_p1 = QUOTE([-51.82, -1.18,  1.2])
y_p1 = QUOTE([-30, 34.98])
banchi52 = INSR(PROD)([x_p1,y_p1,QUOTE([-4,2.1, -4, 2])])
parziale52 = STRUCT([parziale54, COLOR(grigioMura)(banchi52)])



#VIEW(parziale52)