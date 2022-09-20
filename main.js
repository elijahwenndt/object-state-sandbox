let myObject = {
    gear: {
        tent: true,
        sleepingBag: true,
        mat: true,
        campStove: true,
        fireWood: true,
        food: ['beer', 'meat', 'bread']
    },
    prepWork: "pack up",
    cleanUp: "clean site"
}
console.log(myObject)
console.log(myObject.gear.tent)
console.log(myObject.gear.food)
// myObject.gear.food.push("fruit")

// console.log(myObject.gear.food)

// myObject.gear.mat = false;
// console.log(myObject.gear.mat)

document.getElementById('content').innerHTML = myObject.prepWork + ',' + myObject.cleanUp

document.getElementById('btn').addEventListener("click", () => {
    myObject.prepWork = "setup"
    document.getElementById('changed-content').innerHTML = myObject.prepWork
    console.log(myObject)
} )
