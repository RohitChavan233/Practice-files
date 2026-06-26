var place = {
    placeName: 'Office',
    behavior: 'Proffesional',
    sayHi: function(){
        const insidePlace = {
            placeName: 'Meeting room',
            behavior: 'Roasting',
            sayHiInforntOffriends:function(){
                console.log(this.behavior);
            },
            sayHiInforntOfClients:()=>{
                console.log(this.behavior);
            },
        }

        insidePlace.sayHiInforntOfClients()
    },
}

place.sayHi()