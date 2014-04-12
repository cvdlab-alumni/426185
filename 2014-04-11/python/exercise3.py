from pyplasm import *

import sys
sys.path.insert(0, '/home/orange/Dropbox/GP/426185/2014-04-11/python/')
import exercise1
from exercise1 import*
import exercise2
from exercise2 import*

import sys
""" import modules from lar-cc/lib """
sys.path.insert(0, '/home/orange/lar-cc/lib/py/')

""" Mapping functions and primitive objects """
from pyplasm import *
from scipy import *
import os

""" import modules from larcc/lib """
'''sys.path.insert(0, 'lib/py/')'''
import lar2psm
from lar2psm import *

import simplexn
from simplexn import *

import larcc
from larcc import *

import largrid
from largrid import *

import boolean2
from boolean2 import *

import mapper
from mapper import *

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

#Colori usati
basalto = rgb([87,93,94])
asfalto = rgb([111,110,99])
rosewood_red = rgb([101,0,11])
cambrige_blue = rgb([163,193,173])
forest_green = rgb([1,68,33])
raw_brown = rgb([130,102,68])
mantis_green = rgb([116,195,101])
spring_green = rgb([23,114,69])
pastel_yellow = rgb([253,253,150])

semiTetto = COLOR(grigioMura)(CUBOID([75,135,4]))
semiTetto2 = T([3])([12.1])(semiTetto)

scritta = S(1)(0.3)(PROD([ OFFSET([0.5 ,0.5]) (TEXT("PALAZZO DEI CONGRESSI")) , Q(3) ]))
scritta = S(2)(0.3)(scritta)
scritta1 = MAP([S1,S3,S2])(scritta)
scritta2 = COLOR(BLACK)(T([1,3])([22, 12.7])(scritta1))

cuboTetto = CUBOID([45,45,27])
cuboPiccolo = CUBOID([5,5,1])
cuboPiccoloT = T([1,2,3])([20,-5,22])(cuboPiccolo)
tettoP = STRUCT([cuboTetto, cuboPiccoloT])
cuboTettoT = COLOR(grigioMura)(T([1,2,3])([15,16.06,15])(tettoP))

parziale2 = STRUCT([parziale52,cuboTettoT,semiTetto2,scritta2])

semicerchio = parzcircle(25.98)
semi = extrude(semicerchio,44.65)
s = MAP([S1,S3,S2])(semi)
sr = rotate([1,3],PI/6,s)
srt = COLOR(grigioMura)(T([1,2,3])([37,16.3,25])(sr))

semicerchio2 = parzcircle(22.98)
semi2 = extrude(semicerchio2,3)
s2 = MAP([S1,S3,S2])(semi2)
sr2 = rotate([1,3],PI/6,s2)
srt2 = T([1,2,3])([37,16.3,25])(sr2)

srt2_1 = T([1,2,3])([37.16,57.95,25])(sr2)


parziale5 = DIFFERENCE([srt,srt2,srt2_1])

parziale5 = COLOR(grigioMura)(parziale5)

srt3 = COLOR(celesteVetro)(T([1,2,3])([37,17.5,25])(sr2))

srt3_1 = COLOR(celesteVetro)(T([1,2,3])([37.16,55.05,25])(sr2))

parziale6 = STRUCT([parziale5,srt3, srt3_1])

parziale7 = rotate([1,2],PI/2,parziale6)

parziale8 = T([1])([76])(parziale7)

parziale4 = STRUCT([parziale2,parziale6,parziale8])

muroEst = rotate([1,2],PI/2,mura1)

parziale9 = STRUCT([parziale4,T([1])([75])(muroEst)])

muroOvest = rotate([1,2],3*PI/2,mura1)

parziale10 = STRUCT([parziale9,T([2])([135])(muroOvest)])

#Scale
scalino1 = CUBOID([75,137,2])
scalino2 = CUBOID([75,138,2])
scalino3 = CUBOID([75,139,2])
scalino4 = CUBOID([75,140,2])
scalino5 = CUBOID([75,141,2])

scalinata = COLOR(grigioMura)(STRUCT([T([3])([4])(scalino1),T([3])([3])(scalino2),T([3])([2])(scalino3),T([3])([1])(scalino4),scalino5]))
scalinata1 = rotate([1,2],PI,scalinata)
scalinata2 = T([1,2])([75,135])(scalinata1)

parziale11 = STRUCT([scalinata2,T([3])([4])(parziale10),scalinata])

pavimento = COLOR(basalto)(CUBOID([115,230,1]))
pavimento1 = T([2])([-65])(pavimento)

parziale12 = STRUCT([pavimento1,T([1,3])([20,1])(parziale11)])

strada = COLOR(asfalto)(CUBOID([185,300,0]))
strada1 = T([2])([-100])(strada)

parziale13 = STRUCT([strada1,T([1])([35])(parziale12)])


#Esterno
palazzo1 = COLOR(grigioMura)(CUBOID([35,100,60]))
x1 = QUOTE([-34,1])
y1 = QUOTE([-1,23.5,-1,23.5,-1,23.5,-1,23.5,-1])
finestrone = INSR(PROD)([x1,y1,QUOTE([-4, 10,-1,10,-1,10,-1,10,-1,10,-1])])
facciata_vetro = COLOR(rosewood_red)(DIFFERENCE([palazzo1,finestrone]))
x1_2 = QUOTE([-34, 0.5])
finestrone2 = COLOR(celesteVetro)(INSR(PROD)([x1_2,y1,QUOTE([-4, 10,-1,10,-1,10,-1,10,-1,10,-1])]))
facciata_uff = STRUCT([facciata_vetro,finestrone2])
palazzo1_1 = T([1,2])([-35,-100])(facciata_uff)

palazzo2 = CUBOID([35,75.5,49])
x1_22 = QUOTE([-34,3])
y1_22 = QUOTE([-1,23.5,-1,23.5,-1,23.5,-1,])
finestrone12 = INSR(PROD)([x1_22,y1_22,QUOTE([-4, 10,-1,10,-1,10,-1,10,-1])])
facciata_vetro12 = COLOR(pastel_yellow)(DIFFERENCE([palazzo2,finestrone12]))
x1_23 = QUOTE([-34, 1.5])
finestrone23 = COLOR(celesteVetro)(INSR(PROD)([x1_23,y1_22,QUOTE([-4, 10,-1,10,-1,10,-1,10,-1])]))
facciata_uff_23 = STRUCT([facciata_vetro12,finestrone23])
palazzo2_3 = rotate([1,2],PI,facciata_uff_23) 
palazzo2_2 = T([1,2])([220,150])(palazzo2_3)
palazzo2_1 = T([1,2])([0,-150])(palazzo2_2)

palazzo3 = COLOR(grigioMura)(CUBOID([35,100,38]))
x3 = QUOTE([-34,1])
y3 = QUOTE([-1,23.5,-1,23.5,-1,23.5,-1,23.5,-1])
finestrone3 = INSR(PROD)([x1,y1,QUOTE([-4, 10,-1,10,-1,10,-1])])
facciata_vetro3 = COLOR(cambrige_blue)(DIFFERENCE([palazzo3,finestrone3]))
x3_2 = QUOTE([-34, 0.5])
finestrone3_1 = COLOR(celesteVetro)(INSR(PROD)([x1_2,y1,QUOTE([-4, 10,-1,10,-1,10,-1])]))
facciata_uff_3 = STRUCT([facciata_vetro3,finestrone3_1])
palazzo3_1 = rotate([1,2],PI,facciata_uff_3) 
palazzo3_2 = T([1,2])([220,150])(palazzo3_1)

parziale14 = STRUCT([parziale13,palazzo1_1,palazzo2_1, palazzo3_2])

parco = COLOR(mantis_green)(CUBOID([83,150,1.2]))



#Albero
tronco = COLOR(raw_brown)(CYLINDER([0.4,7.0])(12))
chioma = T([3])([7])(COLOR(forest_green)(SPHERE(3)([20,5])))
albero = STRUCT([tronco, chioma])
vector_albero = [T(2)(7),albero]
schiera_alberi = STRUCT(NN(21)(vector_albero))
vector_alberi2 = [T(1)(7),schiera_alberi]
schiera_alberi2 = STRUCT(NN(11)(vector_alberi2))
parco_a = STRUCT([parco,schiera_alberi2])

parziale15 = STRUCT([parziale14, T([1,2])([-83,50])(parco_a)])

vector_cespugli = [T(2)(6),COLOR(spring_green)(SPHERE(2.5)([20,7]))]
schieracespugli = STRUCT(NN(25)(vector_cespugli))

schiera_alberi3 = STRUCT(NN(18)(vector_albero))

schiera_alberi4 = STRUCT(NN(7)(vector_albero))

vector_pilastrini = [T(1)(5),COLOR(grigioMura)(CYLINDER([1,2])(20))]
pilastrini = STRUCT(NN(20)(vector_pilastrini))

parziale16 = STRUCT([parziale15, T([1,2,3])([50,0,1.6])(schiera_alberi3), T([1,2,3])([135,0,1.6])(schiera_alberi3),T([1,2,3])([40,0,1.6])(schieracespugli),T([1,2,3])([40,-60,1.6])(schiera_alberi4),T([1,2,3])([145,-60,1.6])(schiera_alberi4),T([1,2,3])([145,-0,1.6])(schieracespugli), T([1,2])([40,-60])(pilastrini)])

strisce_strada = COLOR(WHITE)(CUBOID([172,1]))
strisce_strada_v = COLOR(WHITE)(CUBOID([1,287]))

strisce_strada2= COLOR(WHITE)(CUBOID([132,1]))
strisce_strada_v2 = COLOR(WHITE)(CUBOID([1,247]))

vector_pedonale = [T(2)(3),COLOR(WHITE)(CUBOID([10,2]))]
pedonali = STRUCT(NN(5)(vector_pedonale))


parziale17 = STRUCT([T([1,2])([40,-95])(pedonali),T([1,2])([132,-95])(pedonali),T([1,2])([5,-95])(strisce_strada),T([1,2])([5,192])(strisce_strada),T([1,2])([5,-95])(strisce_strada_v),T([1,2])([177,-95])(strisce_strada_v),T([1,2])([25,-75])(strisce_strada2),T([1,2])([25,172])(strisce_strada2),T([1,2])([25,-75])(strisce_strada_v2),T([1,2])([157,-75])(strisce_strada_v2),parziale16])

VIEW(parziale17)