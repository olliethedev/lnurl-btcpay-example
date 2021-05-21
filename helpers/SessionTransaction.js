import getConfig from '../constants/sessionConfig';

export class SessionDestroyedError extends Error {
    constructor(message = "SessionTransaction already finished" ) {
        super(message);
    }
}
export default class SessionTransaction{
    constructor() {
        this.destroyed = false;
        this.config = getConfig();
    }
    static init() {
        return new SessionTransaction();
    }
    async commitTransaction(transaction){
        if(this.destroyed){
            throw new SessionDestroyedError();
        }
        transaction

    }
    async destroy(){
        if(this.destroyed){
            throw new SessionDestroyedError();
        }
        this.destroyed = true;
    }

}