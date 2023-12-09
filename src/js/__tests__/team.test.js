import { Character } from "../character";
import { Team } from "../team";

test('create team', () => {
  let team = new Team();
  expect(team).toEqual({members: new Set([])});
});

test('Team.add()', () => {
  let team = new Team();
  team.add(new Character('Dragon'));
  expect(team).toEqual({members: new Set([{name: 'Dragon'}])});
});

test('Team.add() copy', () => {
  let team = new Team();
  let dragon = new Character('Dragon');
  team.add(dragon);
  
  expect(() => {team.add(dragon)}).toThrow(new Error('Персонаж уже есть!'));
});

test('Team.addAll()', () => {
  let team = new Team();
  team.addAll(new Character('Dragon') , new Character('Zombie') , new Character('Cat'));
  expect(team).toEqual({members: new Set([{name: 'Dragon'} , {name: 'Zombie'} , {name: 'Cat'}])});
});

test('Team.toArrow()', () => {
  let team = new Team();
  team.addAll(new Character('Dragon') , new Character('Zombie') , new Character('Cat'));
  let result = team.toArray();
  expect(result).toEqual([new Character('Dragon') , new Character('Zombie') , new Character('Cat')]);
});