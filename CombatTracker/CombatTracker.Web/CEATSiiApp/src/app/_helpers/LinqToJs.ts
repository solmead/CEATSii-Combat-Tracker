
declare global {
    interface Array<T> {
        asQueryable(): Queryable<T>;
        remove(item: T): void;


        where: (func: (obj: T) => boolean) => Array<T>;
        any: (func: (obj: T) => boolean) => boolean;
        //ForEach: (func: (obj: T) => void) => void;
        sum: (func: (obj: T) => number) => number;
        select: (func: (obj: T) => any) => Array<any>;
        orderBy: (func: (obj: T) => number | string, isDescending?: boolean) => Array<T>;
        sortBy: (func: (obj: T) => number | string, isDescending?: boolean) => void;
        skip: (count: number) => Array<T>;
        take: (count: number) => Array<T>;
        first: () => T;
        last: () => T;
        //FindItem: (func: (obj: T) => boolean) => T;
        //Find: (func: (obj: T) => boolean) => T;
        contains: (item: T, func: (obj: T, obj2: T) => boolean) => T;
        union: (arr: Array<T>) => Array<T>;
        intersect: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;
        difference: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;
    }
}


export interface IEnumerable<T> extends Array<T> {

}

export interface IList<T> extends Array<T> {

}
export interface List<T> extends Array<T> {

}
export interface Dictionary<T1, T2> extends Object {

}

//module Linq {
 export class Queryable<T> {

        constructor(private array?: Array<T>) {
            if (this.array == null) {
                this.array = new Array<T>();
            }
        }

        private equals(x: any, y: any): boolean {
            if (x === y) return true;
            // if both x and y are null or undefined and exactly the same

            if (!(x instanceof Object) || !(y instanceof Object)) return false;
            // if they are not strictly equal, they both need to be Objects

            if (x.constructor !== y.constructor) return false;
            // they must have the exact same prototype chain, the closest we can do is
            // test there constructor.

            for (var p in x) {
                if (!x.hasOwnProperty(p)) continue;
                // other properties were tested using x.constructor === y.constructor

                if (!y.hasOwnProperty(p)) return false;
                // allows to compare x[ p ] and y[ p ] when set to undefined

                if (x[p] === y[p]) continue;
                // if they have the same strict value or identity then they are equal

                if (typeof (x[p]) !== "object") return false;
                // Numbers, Strings, Functions, Booleans must be strictly equal

                if (!this.equals(x[p], y[p])) return false;
                // Objects and Arrays must be tested recursively
            }

            for (p in y) {
                if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
                // allows x[ p ] to be set to undefined
            }
            return true;
        }

        add = (item: T): void => {
            this.array.push(item);
        }

        remove = (item: T): void => {
            this.array.remove(item);
        }

        push = (item: T): void => {
            this.array.push(item);
        }


        toArray = (): Array<T> => {
            return this.array.slice(0);
        }

        get length(): number {
            return this.array.length;
        }
        get count(): number {
            return this.array.length;
        }
        
        distinct = (compareFunction?: (obj1: T, obj2: T) => boolean): Queryable<T> => {
            var lst = new Queryable<T>();
            this.forEach((t) => {
                if (!lst.contains(t, compareFunction)) {
                    lst.add(t);
                }
            });

            return lst;
        }

        where = (whereClause: (obj: T) => boolean): Queryable<T> => {
            if (!whereClause) {
                return new Queryable<T>(this.array.slice(0));
            }
            var lst2: any[] = [];
            this.array.forEach(item => {
                if (whereClause(item)) {
                    lst2.push(item);
                }
            });
            return new Queryable<T>(lst2);
        }

        any = (whereClause?: (obj: T) => boolean): boolean => {
            if (!whereClause) {
                return this.array.length > 0;
            }
            return this.where(whereClause).any();
        }

        forEach = (func: (obj: T) => any): boolean => {
            var list = this.array;
            if (func == null) {
                return false;
            }
            $.each(list, (i: number, item: T) => {
                func(item);
            });
            return true;
        }

        sum = (func?: (obj: T) => number): number => {
            if (!func) {
                func = (obj: T): number => {
                    return <number><any>obj;
                }
            }
            var cnt: number = 0;
            this.forEach(item => { cnt = cnt + func(item); });
            return cnt;
        }
        max = (func?: (obj: T) => number): number => {
            if (!func) {
                func = (obj: T): number => {
                    return <number><any>obj;
                }
            }
            var mx: number = func(this.first());
            this.forEach(item => {
                var v: number = func(item);
                if (mx < v) {
                    mx = v;
                }
            });
            return mx;
        }
        min = (func?: (obj: T) => number): number => {
            if (!func) {
                func = (obj: T): number => {
                    return <number><any>obj;
                }
            }
            var mx: number = func(this.first());
            this.forEach(item => {
                var v: number = func(item);
                if (mx > v) {
                    mx = v;
                }
            });
            return mx;
        }

        select = <T2>(selectItem: (obj: T) => T2): Queryable<T2> => {
            if (selectItem == null) {
                return new Queryable<T2>(<Array<T2>><any>this.array.slice(0));
            }
            return new Queryable<T2>(this.array.map(selectItem));
        }

     sortBy = (orderBy: (obj: T) => number | string, isDescending = false): void => {

         this.sortByFunction((ob1, ob2) => {
             var v1 = orderBy(ob1);
             var v2 = orderBy(ob2);
             if (v1 > v2) {
                 return 1;
             }
             if (v1 < v2) {
                 return -1;
             }
             return 0;
         }, isDescending);
     }

     sortByFunction = (orderBy?: (obj1: T, obj2: T) => any, isDescending = false): void => {
         isDescending = !!isDescending;
         if (orderBy == null) {
             return;// new Queryable<T>(this.array.slice(0));
         }
         //var clone = this.array.slice(0);
         this.array.sort(orderBy);
         if (isDescending) {
             this.array = this.array.reverse();
         }
         return;// (new Queryable<T>(clone));
     }
        orderBy = (orderBy: (obj: T) => number | string, isDescending = false): Queryable<T> => {

            return this.orderByFunction((ob1, ob2) => {
                var v1 = orderBy(ob1);
                var v2 = orderBy(ob2);
                if (v1 > v2) {
                    return 1;
                }
                if (v1 < v2) {
                    return -1;
                }
                return 0;
            }, isDescending);
        }

     orderByFunction = (orderBy?: (obj1: T, obj2: T) => any, isDescending = false): Queryable<T> => {
            isDescending = !!isDescending;
            if (orderBy == null) {
                return new Queryable<T>(this.array.slice(0));
            }
            var clone = this.array.slice(0);
            clone.sort(orderBy);
            if (isDescending) {
                clone = clone.reverse();
            }
            return (new Queryable<T>(clone));
        }

        reverse = (): Queryable<T> => {
            return new Queryable<T>(this.array.reverse());
        }

        skip = (count: number): Queryable<T> => {
            if (this.length < count) {
                return new Queryable<T>([]);
            }
            this.array.splice(0, count);
            return new Queryable<T>(this.array.slice(0));
        }

        take = (count: number): Queryable<T> => {
            if (this.length == 0) {
                return new Queryable<T>([]);
            }
            if (count > this.length) {
                count = this.length;
            }
            this.array.splice(count - 1, this.length - count)
            return new Queryable<T>(this.array.slice(0));
        }

        first = (): T => {
            if (this.length == 0) {
                return null;
            }
            return this.array[0];
        }
        last = (): T => {
            if (this.length == 0) {
                return null;
            }
            return this.array[this.length - 1];
        }


        findItem = (selectItem: (obj: T) => boolean): T => {
            return this.where(selectItem).first();
        }

        find = (selectItem: (obj: T) => boolean): T => {
            return this.where(selectItem).first();
        }

        contains = (item: T, compareFunction?: (obj1: T, obj2: T) => boolean): boolean => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            return this.where((item2: any) => compareFunction(item, item2)).any();
        };

        union = (arr: Array<T> | Queryable<T>): Queryable<T> => {
            if (arr instanceof Queryable) {
                return new Queryable<T>(this.array.concat((<Queryable<T>>arr).toArray()));
            } else {

                return new Queryable<T>(this.array.concat(arr));
            }
        }

        intersect = (arr: Array<T> | Queryable<T>, compareFunction?: (obj1: T, obj2: T) => boolean): Queryable<T> => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            var q: Queryable<T> = null;
            if (arr instanceof Queryable) {
                q = <Queryable<T>>arr;
            } else {
                q = new Queryable<T>(this.array.concat(arr));
            }
            var lst2: any[] = [];
            this.forEach((item: any) => {
                if (q.contains(item, compareFunction)) {
                    lst2.push(item);
                }
            });
            return new Queryable<T>(lst2);

        }

        difference = (arr: Array<T> | Queryable<T>, compareFunction?: (obj1: T, obj2: T) => boolean): Queryable<T> => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            var q: Queryable<T> = null;
            if (arr instanceof Queryable) {
                q = <Queryable<T>>arr;
            } else {
                q = new Queryable<T>(this.array.concat(arr));
            }
            var lst2: any[] = [];
            this.forEach((item: any) => {
                if (!q.contains(item, compareFunction)) {
                    lst2.push(item);
                }
            });
            return new Queryable<T>(lst2);
        }

        copy = (): Queryable<T> => {
            return new Queryable<T>(this.array.slice(0));
        }
        asQueryable = (): Queryable<T> => {
            return new Queryable<T>(this.array.slice(0));
        }
    }
//}

Array.prototype.asQueryable = function (): Queryable<any> {
    return new Queryable<any>(this);
};
Array.prototype.remove = function (item: any): void {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//where: (func: (obj: T) => boolean) => Array<T>;
//any: (func: (obj: T) => boolean) => boolean;
////ForEach: (func: (obj: T) => void) => void;
//sum: (func: (obj: T) => number) => number;
//select: (func: (obj: T) => any) => Array<any>;
//orderBy: (func: (obj: T) => number, isDescending: boolean) => Array<T>;
//skip: (count: number) => Array<T>;
//take: (count: number) => Array<T>;
//first: () => T;
//last: () => T;
////FindItem: (func: (obj: T) => boolean) => T;
////Find: (func: (obj: T) => boolean) => T;
//contains: (item: T, func: (obj: T, obj2: T) => boolean) => T;
//union: (arr: Array<T>) => Array<T>;
//intersect: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;
//difference: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;

Array.prototype.sortBy = function (orderBy, isDescending) {
    var arr = <Array<any>>this;
    arr.asQueryable().sortBy(orderBy, isDescending);

};

Array.prototype.where = function (where) {
    var arr = <Array<any>>this;
    return arr.asQueryable().where(where).toArray();
};
Array.prototype.any = function (where) {
    var arr = <Array<any>>this;
    return arr.asQueryable().any(where);
};
//Array.prototype.ForEach = function (func) {
//    var arr = <Array<any>>this;
//    arr.asQueryable().forEach(func);
//};
Array.prototype.sum = function (func) {
    var arr = <Array<any>>this;
    return arr.asQueryable().sum(func);
};
Array.prototype.select = function (func) {
    var arr = <Array<any>>this;
    return arr.asQueryable().select(func).toArray();
};
Array.prototype.orderBy = function (orderBy, isDescending) {
    var arr = <Array<any>>this;
    return arr.asQueryable().orderBy(orderBy, isDescending).toArray();
};
Array.prototype.skip = function (count) {
    var arr = <Array<any>>this;
    return arr.asQueryable().skip(count).toArray();
};
Array.prototype.take = function (count) {
    var arr = <Array<any>>this;
    return arr.asQueryable().take(count).toArray();
};
Array.prototype.first = function () {
    var arr = <Array<any>>this;
    return arr.asQueryable().first();
};
Array.prototype.last = function () {
    var arr = <Array<any>>this;
    return arr.asQueryable().last();
};
//Array.prototype.FindItem = function (select) {
//    var arr = <Array<any>>this;
//    return arr.asQueryable().findItem(select);
//};
//Array.prototype.Find = function (select) {
//    var arr = <Array<any>>this;
//    return arr.asQueryable().findItem(select);
//};
Array.prototype.contains = function (item, compareFunction) {
    var arr = <Array<any>>this;
    return arr.asQueryable().contains(item, compareFunction);
};
Array.prototype.union = function (arr) {
    var arr2 = <Array<any>>this;
    return arr2.asQueryable().union(arr).toArray();
};
Array.prototype.intersect = function (arr, compareFunction) {
    var arr2 = <Array<any>>this;
    return arr2.asQueryable().intersect(arr, compareFunction).toArray();
};
Array.prototype.difference = function (arr, compareFunction) {
    var arr2 = <Array<any>>this;
    return arr2.asQueryable().difference(arr, compareFunction).toArray();
};

