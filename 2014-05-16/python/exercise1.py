""" Mapping functions and primitive objects """
from pyplasm import *
from scipy import *
import os
import sys
""" import modules from lar-cc/lib """
sys.path.insert(0, '/home/silvia/lar-cc/lib/py/')
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


def rotate(coord,values,obj):
	return R(coord)(values)(obj)


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([9,11,2])([[.3,5,.1,2,.1,3,.1,6,.3],[.3,4,.1,4,.1,4,.1,2,.1,1.9,.3],[.2,2.8]])
V,CV = master

toRemove = [25,47,69,33,31,29,55,53,51,77,75,73,41,39,37,85,83,81,129,125,123,121,173,171,169,165,161,117,113,139,135,157]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#Porte
toMerge = 26
diagram = assemblyDiagramInit([3,1,2])([[.5,1.5,4],[.1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [167]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 63
diagram = assemblyDiagramInit([3,1,2])([[1.1,1.5,0.4],[.1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [171]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 97
diagram = assemblyDiagramInit([3,1,2])([[0.5,1.5,0.5],[.1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [175]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 101
diagram = assemblyDiagramInit([3,1,2])([[0.5,1.5,0.5],[.1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [179]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 47
diagram = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [183]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 82
diagram = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [187]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 115
diagram = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [191]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 111
diagram = assemblyDiagramInit([1,3,2])([[0.1],[1.25,1.5,1.25],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [195]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 70
diagram = assemblyDiagramInit([1,3,2])([[0.1],[1.25,1.5,1.25],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [199]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 66
diagram = assemblyDiagramInit([3,1,2])([[.75,1.5,.75],[0.3],[2.2,.5]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [203]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

#Finestre

toMerge = 3
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.5,1.5,1],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [206]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 6
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1,6,1],[0.2, 2.3, 0.2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [216]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 17
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [223]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 134
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [230]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 137
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [237]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 140
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [244]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 143
diagram = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [251]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 146
diagram = assemblyDiagramInit([1,3,3])([[0.3],[0,2.4,1.75],[0.7, 1.7, 0.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
toRemove = [258]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

#DRAW(master)