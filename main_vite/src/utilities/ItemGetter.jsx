

export const ItemGetter = ([search, category, price, team, size, color], data)=>{
    let filteredData = data;
     
    const recalibrateArray = (theArray)=>{
        let tempArray = [];
        for(const item in theArray){
            tempArray[item] = theArray[item];
        }
        return tempArray;
    }

    const looperOfKeys = (element, condition ) =>{
        let checkValid = false;

        Object.keys(element).map(
            key=> {
                let tempData = element[key];
                if(key == 'Color') tempData = tempData.join(' ');
                else if(key == 'Size') tempData = tempData.join(' ');
                tempData = tempData.toString().toLowerCase();
                if(condition(tempData)){
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
        tempData = tempData.toString().toLowerCase();

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
        //filteredData = looperOfItems(filteredData, (toCheck)=>{return toCheck.includes(search.toString().toLowerCase())} );
        filteredData = filteredData.filter(item=>{
            let checkValid = false;
            Object.keys(item).forEach(item2=>{
                let tempData = item[item2];
                if(item2 == 'Color' || item2 == 'Size') tempData = tempData.join(' ');
                tempData = tempData.toString().toLowerCase();
                if(!checkValid) checkValid = tempData.includes(search.toLowerCase());
            });
            return checkValid;
        });
    }
    
    category = recalibrateArray(category);
    // Filter By Category
    if(!category.allCategory){
        let newFilteredData = [];
        let tempFilteredData = [];
        filteredData.forEach((item, index)=>{
            tempFilteredData[index] = filteredData[index];
        });

        const filtering = (categoryType, [newFilteredData, tempFilteredData])=>{
            // get all valid data
            let newData = tempFilteredData.filter(item3=>{
                let temp = item3.Category.toString().toLowerCase();
                return temp.includes(categoryType);
            });

            // delete the data that are already selected
            newData.forEach(item => {
            const index = tempFilteredData.findIndex(element=>element.id == item.id);
                if(index > -1){
                    tempFilteredData.splice(index, 1);
                }
            });
            newFilteredData = [...newFilteredData, ...newData];
            return [newFilteredData, tempFilteredData];
        }

        if(category.jersey == true)
            [newFilteredData, tempFilteredData] = filtering('jersey', [newFilteredData, tempFilteredData]);
        if(category.shoes == true)
            [newFilteredData, tempFilteredData] = filtering('shoes', [newFilteredData, tempFilteredData]);
        if(category.bottoms == true)
            [newFilteredData, tempFilteredData] = filtering('bottoms', [newFilteredData, tempFilteredData]);
        if(category.acessories == true)
            [newFilteredData, tempFilteredData] = filtering('accessories', [newFilteredData, tempFilteredData]);
        filteredData = newFilteredData;
    }

    // Filter By Price
    price = recalibrateArray(price);
    if( price.sort == 'MaxToMin'){
        filteredData = filteredData.sort( (a, b)=> b.Price - a.Price );
    }
    else{
        filteredData = filteredData.sort( (a, b)=> a.Price - b.Price );
    }
    price.range = recalibrateArray(price.range);
    if(price.range.min || price.range.max){
        filteredData = filteredData.filter((item, index)=>{
            let checkValid = true;
            if(!(!price.range.min || price.range.min <= item.Price))
                checkValid = false;
            if(!(!price.range.max || price.range.max >= item.Price))
                checkValid = false;
            return checkValid;
        });
    }

    
    // Filter by team
    team = recalibrateArray(team);
    if(!team.allTeam){
        let newFilteredData = [];
        let tempFilteredData = recalibrateArray(filteredData);
        
        Object.keys(team).map((item)=>{
            if(item == 'x76ers'){
                if(team[item]){
                    newFilteredData = [...newFilteredData, ...( tempFilteredData.filter(item2=>{ return item2.Team.toLowerCase().includes('76ers') }) ) ];
                }
            }else if(item == 'trailblazers'){
                if(team[item]){
                    newFilteredData = [...newFilteredData, ...( tempFilteredData.filter(item2=>{ return item2.Team.toLowerCase().includes('Trail Blazer') }) ) ];
                }
            }
            else{
                if(team[item]){
                    newFilteredData = [...newFilteredData, ...( tempFilteredData.filter(item2=>{ return item2.Team.toLowerCase().includes(item) }) ) ];
                }
            }
            newFilteredData.forEach(item => {
                if(tempFilteredData.length < 1) return false;

                let index = tempFilteredData.findIndex(element=>element.ID == item.ID);
                if(index > -1){
                    tempFilteredData.splice(index, 1);
                }
            });
        });

        filteredData = newFilteredData;
    }

    
    // Filter by Size
    size = recalibrateArray(size);
    if(!size.allSizes){
        let newFilteredData = [];
        let tempFilteredData = recalibrateArray(filteredData);

        const minimizeTransition = (size, altName = '')=>{
            newFilteredData = [...newFilteredData ,...( tempFilteredData.filter(item=>{ return item.Size.join(' ').toLowerCase().includes(altName == false ? size : altName) }) ) ];
            newFilteredData.forEach(item => {
                if(tempFilteredData.length < 1) return false;

                let index = tempFilteredData.findIndex(element=>element.ID == item.ID);
                if(index > -1){
                    tempFilteredData.splice(index, 1);
                }
            });
        }

        Object.keys(size).map((item)=>{
            if(item == 'x2sm'){
                if(size[item]== true){
                    minimizeTransition(item, '2xsm');
                }
            }else if(item == 'x2l'){
                if(size[item] == true){
                    minimizeTransition(item, '2xl');
                }
            }
            else if(item == 'x3l'){
                if(size[item] == true){
                    minimizeTransition(item, '3xl');
                }
            }
            else if(item == 'x4l'){
                if(size[item] == true){
                    minimizeTransition(item, '4xl');
                }
            }
            else{
                if(size[item] == true){
                    minimizeTransition(item);
                }
            }
        });

        filteredData = newFilteredData;
    }

    
    //Filter by Color
    color = recalibrateArray(color)
    if(!color.allColors){
        let newFilteredData = [];
        let tempFilteredData = recalibrateArray(filteredData);

        Object.keys(color).map((item)=>{
            if(color[item] == true){
                newFilteredData = [...newFilteredData, ...( tempFilteredData.filter(item2=>{ return item2.Color.join(' ').toLowerCase().includes(item) }) ) ];
                newFilteredData.forEach(item2 => {
                    if(tempFilteredData.length < 1) return false;

                    let index = tempFilteredData.findIndex(element=>element.ID == item2.ID);
                    if(index > -1){
                        tempFilteredData.splice(index, 1);
                    }
                });

            }
        });

        filteredData = newFilteredData;
    }/*
    */

    //console.log(filteredData);
    return filteredData;
}