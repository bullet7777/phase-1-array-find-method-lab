
function superbowlWin(arrayOfObjects){

    function isWinningObject(element){
        var k = element.result === "W"; 
        return k;
    }

    var result = arrayOfObjects.find(isWinningObject)
if(result===undefined){
    return undefined
}
    return result.year

}

