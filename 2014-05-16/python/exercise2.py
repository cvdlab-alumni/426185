""" Mapping functions and primitive objects """
from pyplasm import *
from scipy import *
import os
import sys
""" import modules from lar-cc/lib """
sys.path.insert(0, '/home/sorange/lar-cc-master/lib/py/')
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
from splines import *
import architectural
from architectural import *
from sysml import *
import sys
sys.path.insert(0, '/home/silvia/Dropbox/GP/426185/2014-05-16/python/')
import exercise1
from exercise1 import*

def rotate(coord,values,obj):
	return R(coord)(values)(obj)

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

def extrude(obj,z):
	return PROD([obj, Q(z)])


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
celesteVetro =rgb([176,224,230])
sabbia = rgb ([224, 164, 96])
perla = rgb([228, 219, 197])
mantis_green = rgb([116,195,101])
spring_green = rgb([23,114,69])
raw_brown = rgb([130,102,68])

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = larApply(s(1,-1,1))(master)
master3 = larApply(s(1,-1,1))(master)

pianerottolo = assemblyDiagramInit([3,2,1])([[2.5,0.8,1.7],[2.5,2.5],[5]])
hpc_pianerottolo = SKEL_1(STRUCT(MKPOLS(pianerottolo)))
hpc_pianerottolo = cellNumbering (pianerottolo,hpc_pianerottolo)(range(len(pianerottolo[1])),CYAN,1)

building=assemblyDiagramInit([1,3,4])([[10],[10,5,10],[3,3,3,3]])
hpc_building = SKEL_1(STRUCT(MKPOLS(building)))
hpc_building = cellNumbering (building,hpc_building)(range(len(building[1])),CYAN,1)

building = diagram2cell(master3,building,0)
building = diagram2cell(master3,building,0)
building = diagram2cell(master3,building,0)
building = diagram2cell(master3,building,0)


building = diagram2cell(pianerottolo,building,0)
building = diagram2cell(pianerottolo,building,0)
building = diagram2cell(pianerottolo,building,0)
building = diagram2cell(pianerottolo,building,0)

building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)

hpc_building = SKEL_1(STRUCT(MKPOLS(building)))
hpc_building = cellNumbering (building,hpc_building)(range(len(building[1])),CYAN,1)
#VIEW(hpc_building)

toRemove = [1069,1063,1057,1051]
building = building[0], [cell for k,cell in enumerate(building[1]) if not (k in toRemove)]

buildingP = COLOR(perla)(STRUCT(MKPOLS(building)))

#Scale
stair = spiralStair(width=0.2,R=1.2,r=0.25,riser=0.1,pitch=3.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/4))(stair)
stair = larApply(t(5,13.75,0))(stair)
stairColumn = larApply(t(5,13.75,0))(larRod(0.25,3)())
assembly3D = evalStruct(Struct([stairColumn,stair,t(0,0,3)]*3))
scale = STRUCT(CAT(AA(MKPOLS)(assembly3D)))


tettoCompleto = COLOR(perla)(CUBOID([10,25,1]))
muroDietro = COLOR(perla)(CUBOID([1,5,12]))
s = STRUCT([buildingP, scale,T(3)(12)(tettoCompleto),T(2)(10)(muroDietro)])

muro = CUBOID([1,5,12])
porta = T(2)(1)(CUBOID([1,3,5]))
muro = DIFFERENCE([muro,porta])
vetrata = COLOR(perla)(T([1,2])([9,10])(muro))
basePalazzo = COLOR(perla)(CUBOID([10,25,0.3]))
strutturaC = T([2,3])([10,0.5])(STRUCT([s,vetrata, basePalazzo]))

giardino = COLOR(mantis_green)(CUBOID([30,43.5]))

#Albero
tronco = COLOR(raw_brown)(CYLINDER([0.4,11.0])(12))
chioma = T([3])([11])(COLOR(forest_green)(SPHERE(4)([20,5])))
albero = STRUCT([tronco, chioma])
cespuglio = COLOR(forest_green)(SPHERE(1.8)([20,7]))

parziale = STRUCT([strutturaC,giardino,T([1,2])([5,4])(albero),T([1,2])([5,41])(albero) ,T([1,2])([15,15])(cespuglio), T([1,2])([15,30])(cespuglio)])

dom = (PROD([INTERVALS(1)(30),INTERVALS(1)(30)]))
controls3 = [[1, 1], [2, 5], [9, 6], [11, 3.5], [14,4]]
bezier3 = BEZIER(S1)(controls3)
controls4 = [[3, 1], [4, 3], [7, 4], [10, 2], [15,2]]
bezier4 = BEZIER(S1)(controls4)
vaso = MAP( BEZIER(S2)([bezier3,bezier4]))(dom)

caso = rotate([1,2],-PI/2, vaso)

caso = extrude(caso,0.1)

stradaDritta = T([1,2])([10,21.6])(CUBOID([10,1.97,0.1]))

sd = rotate([1,2],PI/1.6,CUBOID([10,2.08,0.1]))

sd1 = T([1,2])([26.8,1.5])(sd)

parziale1 = STRUCT([parziale, T([1,2])([19,24.6])(caso), stradaDritta,sd1])

VIEW(parziale1)
