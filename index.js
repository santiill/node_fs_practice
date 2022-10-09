const fs = require('fs');
const path = require('path');

fs.promises.readFile(path.resolve(__dirname, "input.txt"), "utf-8")
    .then(data => {
        console.log(data)
        const input = data.split(" ")
        fs.promises.readFile(path.resolve(__dirname, "patterns.txt"), "utf-8")
        .then(data => {
            const patterns = data.split(" ")

            // first condition
            const arr = []
            input.forEach(item => {
                for(let i = 0; i < patterns.length; i++){
                    if(item.includes(patterns[i])){
                        arr.push(item)
                    }
                }
            })
            const res1 = arr.filter((item, i) => arr.indexOf(item) == i)
            console.log("res1", res1)

            //second condition
            const res2 = input.filter(i => patterns.includes(i))
            console.log("res2", res2)

            // third condition
            let mistake = 0
            const res3 = []
            input.forEach((item, w_idx) =>{
                item.split("").forEach((val, str_idx) => {
                    for( let i = 0; i < patterns.length; i++) {
                        val != patterns[i].charAt(str_idx) && mistake++
                    }
                })
                mistake <= 1 && res3.push(item)
                mistake = 0
            })
            mistake <= 1 && console.log()
            console.log("res3", res3)

        })
})
    .catch(err => console.log(err))

