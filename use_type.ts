interface User {
    tag: string;
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    tag: string;
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        tag: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        tag: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        tag: "user",
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        tag: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];

export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);