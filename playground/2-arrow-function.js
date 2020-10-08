// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Phyllis', 'Karen', 'Stephen'],
    printGuestList() { // regular function setting up method on object 
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => { // arrow function don't bind it's own value (this)
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()