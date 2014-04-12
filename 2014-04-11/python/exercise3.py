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

basalto = rgb([87,93,94])
asfalto = rgb([111,110,99])
rosewood_red = rgb([101,0,11])

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

palazzo2 = COLOR(grigioMura)(CUBOID([60,70,65]))
palazzo2_1 = T([1,2])([185,-70])(palazzo2)

palazzo3 = COLOR(grigioMura)(CUBOID([30,60,40]))
x2 = QUOTE([-29,1])
y2 = QUOTE([-2,14,-2,14,-2,14,-2,14,-2])
finestrone3 = INSR(PROD)([x1,y1,QUOTE([-1, 12,-1,12,-1,12,-1])])
facciata_vetro2 = COLOR(rosewood_red)(DIFFERENCE([palazzo3,finestrone3]))
x2_2 = QUOTE([-29, 0.5])
finestrone4 = COLOR(celesteVetro)(INSR(PROD)([x1_2,y1,QUOTE([-4, 10,-1,10,-1,10,-1,10,-1,10,-1])]))
facciata_uff2 = STRUCT([facciata_vetro2,finestrone3])
palazzo3_1 = T([1,2])([-35,-100])(facciata_uff2)

palazzo3_2 = T([1,2])([185,70])(palazzo3_1)

parziale14 = STRUCT([parziale13,palazzo1_1,palazzo2_1, palazzo3_2])


VIEW(parziale14)