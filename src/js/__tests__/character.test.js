import { Character } from "../character";

test('create character', () => {
  let dragon = new Character('Dragon');
  expect(dragon).toEqual({name: 'Dragon'});
});