

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
    if(!category.allCategory){
        let newFilteredData = [];
        if(category.jersey == true)
            newFilteredData = [...newFilteredData, ...looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('jersey')}, 'Category' )];
        if(category.shoes == true)
            newFilteredData = [...newFilteredData, ...looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('shoes')}, 'Category' )];
        if(category.bottoms == true)
            newFilteredData = [...newFilteredData, ...looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('bottoms')}, 'Category' )];
        if(category.acessories == true)
            newFilteredData = [...newFilteredData, ...looperOfItems(filteredData, (toCheck)=>{return toCheck.includes('accessories')}, 'Category' )];
        filteredData = newFilteredData;
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

    // Filter by team
    if(!team.allTeam){
        let newFilteredData = [];
        let tempFilteredData = filteredData;

        
        Object.keys(team).map((item)=>{
            if(item == 'x76ers'){
                if(team[item]== true){
                    newFilteredData = [...newFilteredData ,...( filteredData.filter(item2=>{ return item2.Team.toLowerCase().includes('76ers') }) ) ];
                }
            }else if(item == 'trailblazers'){
                if(team[item] == true){
                    newFilteredData = [...newFilteredData ,...( filteredData.filter(item2=>{ return item2.Team.toLowerCase().includes('Trail Blazer') }) ) ];
                }
            }
            else{
                if(team[item] == true){
                    newFilteredData = [...newFilteredData ,...( filteredData.filter(item2=>{ return item2.Team.toLowerCase().includes(item) }) ) ];
                    newFilteredData.forEach(item => {
                        const index = filteredData.findIndex(element=>element.id == item.id);
                        if(index > -1){
                            filteredData.splice(index, 1);
                        }
                    });
                }
                    
            }
        });

        filteredData = newFilteredData;
    }

    
    // Filter by Size
    if(!size.allSizes){
        let newFilteredData = [];

        const minimizeTransition = (size, altName = '')=>{
            newFilteredData = [...newFilteredData ,...( filteredData.filter(item=>{ return item.Size.join(' ').toLowerCase().includes(altName == false ? size : altName) }) ) ];
            newFilteredData.forEach(item => {
                const index = filteredData.findIndex(element=>element.id == item.id);
                if(index > -1){
                    filteredData.splice(index, 1);
                }
            });
        }

        Object.keys(size).map((item)=>{
            if(item == 'x2sm'){
                if(size[item]== true){
                    minimizeTransition(size, '2xsm');
                }
            }else if(item == 'x2l'){
                if(size[item] == true){
                    minimizeTransition(size, '2xl');
                }
            }
            else if(item == 'x3l'){
                if(size[item] == true){
                    minimizeTransition(size, '3xl');
                }
            }
            else if(item == 'x4l'){
                if(size[item] == true){
                    minimizeTransition(size, '4xl');
                }
            }
            else{
                if(size[item] == true){
                    minimizeTransition(size);
                }
            }
        });

        filteredData = newFilteredData;
    }

    //Filter by Color
    if(!color.allColors){
        let newFilteredData = [];

        Object.keys(color).map((item)=>{
            if(color[item] == true){

                newFilteredData = [...newFilteredData, ...( filteredData.filter(item2=>{ return item2.color.join(' ').toLowerCase().includes(item) }) ) ];
                newFilteredData.forEach(item2 => {
                    const index = filteredData.findIndex(element=>element.id == item2.id);
                    if(index > -1){
                        filteredData.splice(index, 1);
                    }
                });

            }
        });

        filteredData = newFilteredData;
    }

    return filteredData;
}