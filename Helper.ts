export default class Helper {
 
static  lastId:number=1;

/**
 *
 *
 * @static
 * @param {string} id
 * @returns
 * @memberof Helper
 */
static chekId(id:string){
 if (this.lastId === parseInt(id))
 return false; 
 
 if (parseInt(id) !== (this.lastId+1))
    return false;

return true;
}


}