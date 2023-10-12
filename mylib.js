module.exports={
    /**
     * 
     * @param {number} num1 
     * @param {number} num2 
     * @returns {number}
     */
    add:(num1,num2)=>num1+num2,//Add function

    /**
     * 
     * @param {number} num1 
     * @param {number} num2 
     * @returns {number}
     */
    subtract:(num1,num2)=>num1-num2,//Subtract function

    /**
     * 
     * @param {number} num1 
     * @param {number} num2 
     * @returns {number}
     */
    multiply:(num1,num2)=>num1*num2,//Multiply function

    /**
     * 
     * @param {number} num1 
     * @param {number} num2 
     * @returns {number}
     */
    divide: (num1, num2) => { //Divide function
        if(num2===0){
            throw new Error("Zero Division");
        }else{
            return num1/num2;
        }
    }
}