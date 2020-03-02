const  {Animal} =  require('../animal/index');

 class Cat extends Animal{
    sayMeow(){
        console.log(`Cat ${this.name} say meow`);
    }
} 

module.exports ={
    Cat
}