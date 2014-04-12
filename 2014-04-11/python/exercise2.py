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

facciata3 = CUBOID([135,2,15])
x2 = QUOTE([-30,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1])
y2 = QUOTE([1])
finestre2 = INSR(PROD)([x2,y2,QUOTE([-3,3,-3,3,-3])])
mura = COLOR(grigioMura)(DIFFERENCE([facciata3,finestre2]))
y2_2 = QUOTE([-0.6, 1])
finestre3 = COLOR(celesteVetro)(INSR(PROD)([x2,y2_2,QUOTE([-3,3,-3,3,-3])]))
mura1 = STRUCT([mura,finestre3])

#VIEW(mura1)