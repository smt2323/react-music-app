

import moment from 'moment'

export function formatToMMSS(second){
    const min = moment.utc(second * 1000).format("mm:ss")
    return min;
}