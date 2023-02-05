function convertDate(date){
    const months = {
        1: "Jan",
        2: "Feb", 
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10:"Oct",
        11:"Nov",
        12:"Dec"
        
    }
    let splitDate = []
    let firstValue = date.includes(' ');
    let finalDate = ""
    
    if(firstValue){
        splitDate = date.split(' ')
        const month = splitDate[1].slice(0,3)
        finalDate = ""

        let i = 1
        while (i <= 12) {
            if(month === months[i]){
                let m = i < 10 ? `0${String(i)}` : i
                let d = splitDate[0] //(Number(splitDate[0]) < 10 && Number(splitDate[0]) !== 1) ? `${splitDate[0]}` : splitDate[0]
                finalDate = `${splitDate[2]}-${m}-${d}`
                break
            }
            i++
        }
        return finalDate

    }
    else{
        splitDate = date.split('-')
        const month = splitDate[1]
         finalDate = ""

        let i = 1
        while (i <= 12) {
            if(Number(month) === i){
                let m = months[i]
                let d = splitDate[2]
                finalDate = `${d} ${m}, ${splitDate[0]}`
                break
                
            }
            i++
        }
        return finalDate           
    }
}

module.exports = convertDate