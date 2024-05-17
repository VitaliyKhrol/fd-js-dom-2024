
class Slider{
    constructor(imageArray,index = 0){
        this._images = imageArray;
        this._currentIndex = index;
    }

    get currentSlide(){
        return this._images[this._currentIndex];
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
              return ((this._currentIndex-1 + this._images.length) % this._images.length)
    }

    
    get next(){
        return ((this._currentIndex+1) % this._images.length)
    }

}