var localStorageHelper = (action,value) =>{


if(action === "post"){
   let savedScores= window.localStorage.getItem('savedScores')
   if(savedScores=undefined){
       savedScores = [];
   }
   savedScores.push(value);
   window.localStorage.setItem("savedScores",JSON.stringify(savedScores))
   return
}else if(action ==="get"){
    let savedScores= JSON.parse(window.localStorage.getItem('savedScores'))
    let avg=0;
    for (var item in savedScores){
        avg +=item;
    }
    avg += value
    return avg/savedScores.length

}







}