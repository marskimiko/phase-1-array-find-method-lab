function superbowlWin(record) {
    let item = record.find(obj => obj.result === "W")
    if (item) {
        return item.year
    }
}

//use below to return result in replit
//superbowlWin(record);