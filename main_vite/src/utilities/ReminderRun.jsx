import { useContext } from "react";

export const runReminder = (data, dataSet)=>{
    if(data.length <= 0) return false;

    let tempArray = [...data];
    tempArray.forEach((item, index)=>{
        tempArray[index].Data = data[index].Data;
        tempArray[index].Counter = data[index].Counter;
    })
    data.forEach((item, index)=>{
        tempArray[index].Counter--;
        if(tempArray[index].Counter <= 0){
            item.Data();
            tempArray.splice(index, 1);
        }
    });
    dataSet(tempArray);
}