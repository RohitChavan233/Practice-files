var hero = {
    fname: 'rohit',
    lname: 'chavan',
    age: 22,
    getInto: () => {
        const sayMyName = () => {
            console.log(this);
        }
        sayMyName()

    }
}

hero.getInto()