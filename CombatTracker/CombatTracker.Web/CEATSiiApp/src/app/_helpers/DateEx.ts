export { }


declare global {

    interface Date {
        formatDate: () => string;
        formatTime: (hideMs?: boolean) => string;
        addDays(days: number): Date;
    }
}



export function formatTimeSpan(ts: number) {
    if (ts <= 0) {
        return "";
    }

    var ms = ts - Math.floor(ts);
    ts = ts - ms;
    var second = ts % 60;
    ts = ts - second;
    second = second + ms;
    ts = ts / 60;
    var minute = ts % 60;
    ts = ts - minute;
    ts = ts / 60;
    var hour = Math.floor(ts);

    var shour: string = "" + hour;
    var sminute: string = "" + minute;
    var ssecond: string = "" + Math.round(second * 1000) / 1000;


    if (hour < 10) {
        shour = "0" + shour;
    }
    if (minute < 10) {
        sminute = "0" + sminute;
    }
    if (second < 10) {
        ssecond = "0" + ssecond;
    }


    return shour + ":" + sminute + ":" + ssecond;
}

export function formatDate(dt: Date) {
    var curr_date = dt.getDate();
    var curr_month = dt.getMonth() + 1; //Months are zero based
    var curr_year = dt.getFullYear();
    return '' + curr_month + "/" + curr_date + "/" + curr_year;
};

export function formatTime(dt: Date, hideMs?: boolean) {
    hideMs = !!hideMs;
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    var ms = dt.getMilliseconds();
    var ampm = "AM";
    if (hour > 11) {
        hour = hour - 12;
        ampm = "PM";
    }
    if (hour == 0) {
        hour = 12;

    }

    var sminute: string = "" + minute;
    var ssecond: string = "" + second;

    if (minute < 10) {
        sminute = "0" + sminute;
    }
    if (second < 10) {
        ssecond = "0" + ssecond;
    }

    return hour + ":" + sminute + (hideMs ? "" : ":" + ssecond) + " " + ampm + (hideMs ? "" : ":" + ms);
};



export function getTimeCount() {
    var Now = new Date();
    var Cnt = Math.round(Now.getTime());
    return Cnt;
};


Date.prototype.formatDate = function (): string {
    return formatDate(this);
}
Date.prototype.formatTime = function (hideMs?: boolean): string  {
    return formatTime(this, hideMs);
}

Date.prototype.addDays = function (days: number): Date {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}