function dateTime(format, time_format){
    var date_time_parts = ["DD", "MM", "YYYY", "hh", "mm", "ss"]
    var current_date_time = new Date()


    var dateTime = {
        DD: current_date_time.getDate(),
        MM: current_date_time.getMonth()+1,
        YYYY: current_date_time.getFullYear(),
        hh: current_date_time.getHours(),
        mm: current_date_time.getMinutes(),
        ss: current_date_time.getSeconds()
    }

    if(time_format === 24){

        for(let item of date_time_parts){
            if(format.includes(item)){format = format.replace(item, dateTime[item])}
        }

        return format

    }else{

        var ampm = (dateTime.hh>11 && dateTime.mm>0) ? "PM":"AM"
        dateTime.hh = dateTime.hh - 12

        for(let item of date_time_parts){
            if(format.includes(item)){format = format.replace(item, dateTime[item])}
        }

        return `${format} ${ampm}`

    }
}
