class Human {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getAge(): number {
    return this.age;
  }

  getName(): string {
    return this.name;
  }

  getGender(): string {
    return this.gender;
  }
}

const lynn = new Human("lynn", 12, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.getName()}, you are ${person.getAge()}, you are a ${person.getGender()}!!~~~`;
};

console.log(sayHi(lynn));

export {};
