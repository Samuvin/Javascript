/*
                    Animal
                   /      \
                Cat         Bird
               /   \          \
        houseCat   Tiger      Parrot


*/

class Animal
{
    constructor(color='Yellow',energy=100)
    {
        this.color = color;
        this.energy = energy;
    }
    isActive()
    {
        if(this.energy>0)
        {
            this.energy-=20;
            console.log('Energy is decreasing, currently at:', this.energy)
        }
        else if(this.energy==0)
        {
            this.sleep();
        }
    }
    sleep()
    {
        this.energy+=20;
        console.log("Sleeping......");
    }
    getColor()
    {
        console.log(this.color);
    }
}
class Cat extends Animal
{
    constructor(color,energy,sound='Meow',canjump=true,canclimb=true)
    {
        super(color,energy)
        this.sound= sound;
        this.canjump= canjump;
        this.canclimb= canclimb;
    }
    makeSound()
    {
        console.log(this.sound);
    }

}
class Bird extends Animal
{
    constructor(sound="chrip",canFly=true,color,energy)
    {
        super(color,energy)
        this.sound=sound;
        this.canFly= canFly;
    }
    makeSound()
    {
        console.log(this.sound);
    }
}
class HouseCat extends Cat
{
    constructor(sound,canjump,canclimb,color,energy,HouseCatSound="meeewwww")
    {
        super(sound,canjump,canclimb,color,energy);
        this.HouseCatSound= HouseCatSound;
    }
    makeSound(option)
    {
        if(option)
        {
            super.makeSound();
        }
        console.log(this.HouseCatSound);
    }
}
class Tiger extends Cat
{
    constructor(energy,color,sound,canjump,canclimb,TigerSound="Roar")
    {
        super(energy,color,sound,canjump,canclimb);
        this.TigerSound= TigerSound;
    }
    makeSound(option)
    {
        if(option)
        {
            super.makeSound();
        }
        console.log(this.TigerSound);
    }

}
class Parrot extends Bird
{
    constructor(canTalk=false,sound,canFly,color,energy)
    {
        super(sound,energy,canFly,color);
        this.canTalk= canTalk;
    }
    makeSound(option)
    {
        if(option)
        {
                super.makeSound();
        }
        if(this.canTalk)
        {   
        console.log("I'am a talking parrot!");
        }
    }
}

var polly=new Parrot(true);
var fiji=new Parrot(false);

fiji.makeSound(true);
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

// var penguin=new Bird("shrik",false,"black and white",200)

// penguin.makeSound();
// penguin.getColor();
// penguin.isActive();
// penguin.getColor();
// penguin.isActive();


// var leo=new HouseCat();
// // leo.makeSound(false);
// // leo.makeSound(true);

// var cuddles=new Tiger();
// cuddles.makeSound(false);
// cuddles.makeSound(true);
