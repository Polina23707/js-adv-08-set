export class Team {
  constructor() {
      this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Персонаж уже есть!');
    }
      
  }
  addAll(...characters) {
    let newCharacters = [...characters];
    newCharacters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    })
  }

  toArray() {
    const teamArray = [];
    this.members.forEach((member) => teamArray.push(member));
    return(teamArray);
  }
}

