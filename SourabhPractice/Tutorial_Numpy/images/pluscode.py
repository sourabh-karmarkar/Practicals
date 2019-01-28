"""
Space me out
I have two numbers 0 and 255 interleave them using a helper from NumPy so that there equidistant 100 samples
"""
import numpy as np
import cv2
from IPython.display import Image, display
def show(img, fmt='.jpeg'):
    display(Image(cv2.imencode(fmt, img)[1].tostring()))

dim=200
x = int(dim * (0.2))
a = np.zeros(shape=(dim,dim))

a[:,-x:]=255
a[-x:,:]=255
b=np.rot90(a)
c=np.vstack((a,b))
d=np.rot90(np.rot90(c))

show(np.hstack((c,d)))