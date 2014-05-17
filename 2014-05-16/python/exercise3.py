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
import sys


def rotate(coord,values,obj):
	return R(coord)(values)(obj)

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

def extrude(obj,z):
	return PROD([obj, Q(z)])


#Numerazione celle
def numberingCell (master):
	hpc = SKEL_1(STRUCT(MKPOLS(master)))
	hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
	return hpc

#Merge celle
def toMergeCell (toMergeArray,master,diagramArray):
	for i in range(len(diagramArray)):
		master = diagram2cell(diagramArray[i],master,toMergeArray[i])
	return master

#Rimuovi celle
def toRemoveCell (toRemove, master):
	master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
	return master

#Metodo diagram
def loopMergingNumberingRemove (diagram,master,toMergeArray,toRemoveArray):
	for i in range(len(diagram)):
		lastNumber = len(master[1])-1
		toMergeCell(toMergeArray[i],master,diagram[i])
		for j in range(len(toRemoveArray[i])):
			toRemoveArray[i][j] += lastNumber
		toRemoveCell(toRemoveArray[i],master)
	return master


master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = numberingCell(master)
VIEW(hpc)

toRemove = [[5],[6]]
toMerge = [11,12]
diagram1 = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])
diagrams = [diagram1,diagram2]

master = loopMergingNumberingRemove(diagrams,master,toMerge,toRemove)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = numberingCell(master)
VIEW(hpc)
