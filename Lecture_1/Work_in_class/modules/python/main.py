# This doens't work at all
# import libs
# print(libs)
# libs.LibraryA.libA

#This works before we created __init__.py
from libs import LibraryA
LibraryA.LibA()

#This works after we created __init__.py
from libs import LibA, LibB
LibA()
LibB()