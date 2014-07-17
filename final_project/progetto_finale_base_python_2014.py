""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, 'C:\Users\Andrea\Dropbox\GP\lar-cc-master\lib\py')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])

def rotate(coord,values,obj):
	return R(coord)(values)(obj)

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

def extractFacets(master, emptyChain=[]):
    solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
    exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
    exteriorCV += exteriorCells(master)
    CV = solidCV + exteriorCV
    V = master[0]
    FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
    BF = boundaryCells(solidCV,FV)
    boundaryFaces = [FV[face] for face in BF]
    B_Rep = V,boundaryFaces
    return B_Rep


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([9,11,2])([[.3,5,.1,2,.1,3,.1,6,.3],[.3,4,.1,4,.1,4,.1,2,.1,1.9,.3],[.2,2.8]])

diagram01 = assemblyDiagramInit([3,1,2])([[.5,1.5,4],[.1],[2.2,.5]])
diagram02 = assemblyDiagramInit([3,1,2])([[1.1,1.5,0.4],[.1],[2.2,.5]])
diagram03 = assemblyDiagramInit([3,1,2])([[0.5,1.5,0.5],[.1],[2.2,.5]])
diagram04 = assemblyDiagramInit([3,1,2])([[0.5,1.5,0.5],[.1],[2.2,.5]])
diagram05 = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
diagram06 = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
diagram07 = assemblyDiagramInit([1,3,2])([[0.1],[1,1.5,1],[2.2,.5]])
diagram08 = assemblyDiagramInit([1,3,2])([[0.1],[1.25,1.5,1.25],[2.2,.5]])
diagram09 = assemblyDiagramInit([1,3,2])([[0.1],[1.25,1.5,1.25],[2.2,.5]])
diagram10 = assemblyDiagramInit([3,1,2])([[.75,1.5,.75],[0.3],[2.2,.5]])
diagram11 = assemblyDiagramInit([1,3,3])([[0.3],[1.5,1.5,1],[0.7, 1.7, 0.3]])
diagram12 = assemblyDiagramInit([1,3,3])([[0.3],[1,6,1],[0.2, 2.3, 0.2]])
diagram13 = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
diagram14 = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
diagram15 = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
diagram16 = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0.75],[0.7, 1.7, 0.3]])
diagram17 = assemblyDiagramInit([1,3,3])([[0.3],[1.75,2.4,0],[0.7, 1.7, 0.3]])
diagram18 = assemblyDiagramInit([1,3,3])([[0.3],[0,2.4,1.75],[0.7, 1.7, 0.3]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

master = diagram2cell(diagram16,master,187)
master = diagram2cell(diagram15,master,183)
master = diagram2cell(diagram14,master,179)
master = diagram2cell(diagram07,master,147)
master = diagram2cell(diagram08,master,143)
master = diagram2cell(diagram04,master,127)
master = diagram2cell(diagram03,master,119)
master = diagram2cell(diagram06,master,103)
master = diagram2cell(diagram09,master,91)
master = diagram2cell(diagram10,master,87)
master = diagram2cell(diagram02,master,79)
master = diagram2cell(diagram05,master,59)
master = diagram2cell(diagram01,master,27)
master = diagram2cell(diagram13,master,19)
master = diagram2cell(diagram12,master,7)
master = diagram2cell(diagram11,master,3)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyChain = [291,282, 273, 247, 204, 186, 195, 204, 241, 229, 217, 211, 223,235, 259, 243, 265, 43, 47, 27, 51, 35,
77, 113, 128, 124, 22, 25 , 29, 64, 72, 68, 33, 37, 75, 118, 115, 160, 156, 111,152,158,70, 148, 108, 104, 144, 49, 79, 253]

#master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
#DRAW(master)

master_facets = extractFacets(master,emptyChain)

master_facets_tria = quads2tria(master_facets)
objExporter(master_facets_tria,"C:/Users/Andrea/Dropbox/GP/static-file-server-master/public/threejs-crumbs-master/examples/assets/models/casa.obj")
