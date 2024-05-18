
class Slider{
    constructor(userArray,index = 0){
        this._users = userArray;
        this._currentIndex = index;
    }

    get currentSlide(){
        return this._users[this._currentIndex];
    }

    set currentIndex(value){
        if (typeof value !== 'number'){
            throw new TypeError('Inden not number')
        }
        this._currentIndex=value;
    }

    get currentIndex(){
        return this._currentIndex;
    }

    get prev(){
              return ((this._currentIndex-1 + this._users.length) % this._users.length);

    }
    get next(){
        return ((this._currentIndex+1 )% this._users.length);
    }

}