import { Lock } from "./Lock";


export class MutexLock {

    private refreshLock:Lock.Locker = null;

    constructor(maxLockTime?:number) {
        this.refreshLock = new Lock.Locker(maxLockTime);
    }

    get isLocked(): boolean {
        return this.refreshLock.isLocked();
    }

    async LockAreaAsync(func: () => Promise<void>): Promise<void> {
        await this.BeginLock();

        await func();

        await this.EndLock();
    }

    async WaitTillUnlocked(): Promise<void> {
        await whenTrue(() => {
            return !this.refreshLock.isLocked();
        });
        return;
    }


    async BeginLock(): Promise<void> {
        await whenTrue(() => {
            return !this.refreshLock.isLocked();
        });

        if (this.refreshLock.isLocked()) {
            return;
        }

        this.refreshLock.lock();
    }

    async EndLock(): Promise<void> {
        this.refreshLock.unLock();
    }

}



    export class RecurringTask {

        private _isRunning: boolean = false;

        private locker = new Lock.Locker();
        private timedCall = (): void => {
            if (!this.isLocked() && this.callback) {
                this.callback();
            }
            if (this.isRunning) {
                setTimeout(() => { this.timedCall(); }, this.timeout);
            }
        }


        constructor(private callback: () => void, private timeout: number, private maxLockTime?: number) {

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
        lock = (): void => {
            this.locker.lock();
        }
        unLock = (): void => {
            this.locker.unLock();
        }
        isLocked = (): boolean => {
            return this.locker.isLocked();
        }
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
        var obj = new RecurringTask(() => {
            obj.lock();
            if (trueFunc()) {
                resolve();
                obj.stop();
            }
            obj.unLock();
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
                progressCB(fin, tot);
            }
        });
    });



    return await Promise.all(list);
}



//}
