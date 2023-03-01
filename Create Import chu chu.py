def createImport (total):
    for i in range(1, total+1):
        print('import image_%s from "../assets/item/%s_item.png"'%(i, i))

createImport(5)
