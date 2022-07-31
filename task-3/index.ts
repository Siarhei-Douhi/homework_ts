interface User {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: User[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];


const usersNames = users.map((user: User) => user.name).join(', ');

const usersCarsCount = users.reduce((acc, user) => {
    if(user.cars !== undefined) {
        acc += user.cars.length;
    }
    return acc;
}, 0);
  

function usersHasEducation(users: User[]): string[] {
    return users.filter((user: User) => user.hasEducation === true).map(({name}) => name);
}


function getUsersWithAnimal(users: User[]): string[] {
    return users.filter((user: User) =>  user.animals).map(({name}) => name);
}


function getModelCar(users: User[]): string {
    return users.filter((user: User) => (user.cars !== undefined)).map(({cars}) => cars).join(', ');
}
