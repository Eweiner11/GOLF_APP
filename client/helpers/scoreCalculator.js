function scoreCalculator(obj) {
    let total=0;
    for(var scorePerHole in obj){
        total+=obj[scorePerHole]
    }
    return total;
}
export default scoreCalculator;
