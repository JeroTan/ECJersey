

export const ItemGeter = ({search, category, price, team, size, color}, data)=>{
    let filteredData = data;

    const looperOfKeys = (element, condition ) =>{
        let checkValid = false;

        Object.keys(element).map(
            key=> {
                let tempData = element[key];
                if(key == 'Color'){
                    tempData = tempData.join(' ');
                }
                else if(key == 'Size'){
                    tempData = tempData.join(' ');
                }
                tempData = tempData.toLowerCase();
                if(condition(tempValid)){
                    checkValid = true;
                }
                return true;
            } 
        );

        return checkValid;
    }

    const singleCheckKeys = (element, condition) =>{
        let tempData = element;
        if(element.isArray()){
            tempData = tempData.join(' ');
        }
        tempData = tempData.toLowerCase();

        return condition(tempData);
    }

    const looperOfItems = (item, condition, single=false)=>{
        let newFilteredData = [];
    
        for(const element of item){
            let checkValid = single==false ? looperOfKeys( element, condition ) : singleCheckKeys(element.single, condition);
            if(checkValid)
                newFilteredData.push(element);
        }
  
        return newFilteredData;
    }

    // SEARCH 
    if(search){
        filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes(toLowerCase.search)} );
    }

    // Filter By Category
    switch(category){
        case 'jersey':
            filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('jersey')}, 'Category' );
        break;
        case 'shoes':
            filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('shoes')}, 'Category' );
        break;
        case 'bottoms':
            filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('bottoms')}, 'Category' );
        break;
        case 'accessories':
            filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('accessories')}, 'Category' );
        break;
    }

    // Filter By Price
    switch(price.sort){
        case 'MinToMax':
            filteredData = filteredData.sort( (a, b)=> a.Price - b.Price );
        break;
        case 'MaxToMin':
            filteredData = filteredData.sort( (a, b)=> b.Price - a.Price );
        break;
    }
    if(price.range.min || price.range.max){
        filteredData = looperOfItems(filteredData, (toCheck)=>{
            let checkValid = true;
            let num = Number(toCheck);
            if(!(!price.range.min || price.range.min <= num))
                checkValid = false;
            if(!(!price.range.max || price.range.max >= num))
                checkValid = false;
            
            return Number(toCheck);
        }, 'Price' );
    }
    

    return filteredData;
}