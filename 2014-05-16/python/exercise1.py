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

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([9,11,2])([[.3,5,.1,2,.1,3,.1,6,.3],[.3,4,.1,4,.1,4,.1,2,.1,1.9,.3],[.2,2.8]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)

toRemove = [25,47,69,33,31,29,55,53,51,77,75,73,41,39,37,85,83,81,129,125,123,121,173,171,169,165,161,117,113,139,135,157]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)

toRemove = []
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)
