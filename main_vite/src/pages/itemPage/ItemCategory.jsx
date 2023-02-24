export const ItemCategory = ({itemType = 'all'})=>{

    let category = {}
    category.price = 'min' //min or max or none
    category.range = false // [n, n]
    category.color = ['blue', 'green', 'white', 'yellow']
    category.size = ['sm', 'lg', 'xl']
    category.teams = ['Lakers']

    return category;
}