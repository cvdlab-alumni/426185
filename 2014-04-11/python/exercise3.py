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

#ESERCIZIO 3
#x_pilastri = QUOTE([-3.35,1.55]*14)
#y_pilastri = QUOTE([-0.4,1.55])
#pilastri = INSR(PROD)([x_pilastri,y_pilastri,QUOTE([12.1])])
#mura = CUBOID([75.72,135,15])
#muroVUOTO = CUBOID([72.18,5.16,12.1])
#muroFINITO = DIFFERENCE([mura, T(1)(1.77)(muroVUOTO)])
#parziale = STRUCT([muroFINITO, T([1,2])([1.77,-0.5])(COLOR(BLUE)(pilastri))])


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
parziale4 = STRUCT([parziale2,srt])

VIEW(parziale4)