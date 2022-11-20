
import moment from "moment";

export function formateDate(date: string){
    const formatedDate = moment(date).fromNow()
    return formatedDate
}