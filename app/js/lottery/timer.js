// 倒计时
class Timer{
    /**
     * 
     * @param {string} end    截止时间
     * @param {*} update    时间更新的回调 
     * @param {*} handle    时间结束后的回调
     */
    countdown(end,update,handle){
        // 获取当前时间
        const now = new Date().getTime();
        const self = this;
        if(now-end>0){
            // 倒计时结束的回调
            handle.call(self);
        }else{
            let last_time = end - now;
            const d = 100*60*60*24;
            const h = 1000*60*60;
            const m = 1000*60;
            const s = 1000;
            let day = Math.floor(last_time/d),
                hour = Math.floor((last_time-day*d)/h),
                minite = Math.floor((last_time-d*day-h*hour)/m),
                second = Math.floor((last_time-d*day-h*hour-m*minite)/s);
            let r = [];
            if(day>0){
                r.push(`<em>${day}</em>天`)
            }
            // 如果没有天则没有小时
            if(r.length&&(hour>0)){
                r.push(`<em>${hour}</em>时`)
            }
            if(r.length&&(minite>0)){
                r.push(`<em>${minite}</em>分`)
            }
            if(r.length&&(second>0)){
                r.push(`<em>${second}</em>秒`)
            }
            self.last_time = r.join('');
            update.call(self,r.join(''));
            setTimeout(function(){
                self.countdown(end,update,handle);
            },1000)
        }
    }
}

export default Timer;
