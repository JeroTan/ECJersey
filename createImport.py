def createImport (total):
    for i in range(1, total+1):
        print('import image_%s from "../assets/item/image_%s.jpg"'%(i, i))

createImport(83)
