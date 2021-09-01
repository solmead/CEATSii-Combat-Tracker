
export class MutexLock {

    private locked = false;
    private lastCalled: Date = null;
    //private refreshLock:Lock.Locker = null;

    constructor(private maxLockTime?:number) {
        //this.refreshLock = new Lock.Locker(maxLockTime);
    }

    get isLocked(): boolean {
        var seconds = 0;
        if (this.lastCalled) {
            seconds = ((new Date()).getTime() - this.lastCalled.getTime()) / 1000;
        }
        return this.locked && seconds < this.maxLockTime;
    }


    async WhenTrueAsync(func: () => boolean):Promise<void> {

        var p = new Promise<void>((resolve, reject) => {
            var startTime = new Date();
            var check = () => {
                if (func) {
                    var t = func();
                    if (t) {
                        resolve();
                        return;
                    }
                }
                var seconds = ((new Date()).getTime() - startTime.getTime()) / 1000;

                if (seconds >= this.maxLockTime) {
                    reject("Max Wait Time for lock hit");
                    return;
                }

                setTimeout(check, 100);
            };


            setTimeout(check, 100);
        });
        return p;
    }

    async WaitTillUnlocked(): Promise<void> {
        await this.WhenTrueAsync(() => {
            return !this.isLocked;
        });
        return;
    }

    async LockAreaAsync(func: () => Promise<void>): Promise<void> {
        await this.BeginLock();
        try {
            await func();
        } catch {

        }

        await this.EndLock();
    }







    async BeginLock(): Promise<void> {
        await this.WaitTillUnlocked();
        //await this.WhenTrueAsync(() => {
        //    return !this.isLocked;
        //});

        if (this.isLocked) {
            return;
        }

        this.locked = true;
        this.lastCalled = new Date();


    }

    async EndLock(): Promise<void> {
        this.locked = false;
    }

}



    export class RecurringTask {

        private _isRunning: boolean = false;

        private refreshLock = new MutexLock(30000);
        //private locker = new Lock.Locker();
        private async timedCall(): Promise<void> {
            
            if (this.callback) {
                await this.refreshLock.LockAreaAsync(async () => {
                    await this.callback();
                });
                //await this.refreshLock.BeginLock();
                //try {
                //this.callback();
                //} catch {}
                //await this.refreshLock.EndLock();
            }
            if (this.isRunning) {
                setTimeout(() => { this.timedCall(); }, this.timeout);
            }
        }


        constructor(private callback: () => Promise<void>, private timeout: number, private maxLockTime?: number) {

        }


        get isRunning(): boolean {
            return this._isRunning;
        }
        //private set isRunning(value: boolean) {
        //    this._isRunning = value;
        //}

        setTimeOut = (time: number): void => {
            this.timeout = time;
        }
        //lock = (): void => {
        //    this.locker.lock();
        //}
        //unLock = (): void => {
        //    this.locker.unLock();
        //}
        //isLocked = (): boolean => {
        //    return this.locker.isLocked();
        //}
        start = (): void => {
            if (!this.isRunning) {
                this._isRunning = true;
                this.timedCall();
            }
        }
        stop = (): void => {
            this._isRunning = false;
        }


    }

    export function delay(msec: number): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, msec);
        });
    }





export function whenTrue(trueFunc: () => boolean): Promise<void> {
    if (!trueFunc || trueFunc()) {
        return new Promise<void>((resolve) => {
            resolve();
        });
    }
    return new Promise<void>((resolve) => {
        var obj = new RecurringTask(async ():Promise<void> => {
           //obj.lock();
            if (trueFunc()) {
                resolve();
                obj.stop();
            }
            //obj.unLock();
        }, 100);
        obj.start();
    });
}



export async function WhenAll<tRet>(list: Array<Promise<tRet>>, progressCB?: ((numFinished: number, total: number) => void)): Promise<Array<tRet>> {
    var tot = list.length;
    var fin = 0;
    list.forEach((p) => {
        p.then(() => {
            fin++;
            if (progressCB) {
                try {
                    progressCB(fin, tot);
                } catch {

                }
            }
        });
    });



    return await Promise.all(list);
}



//}
