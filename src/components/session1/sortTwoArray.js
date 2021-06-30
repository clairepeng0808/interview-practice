// Given an array of objects:
// const a = [ { id: 'p1' }, { id: 'p2' }, { id: 'p3'}, { id: 'p4' }, ...]
// sort the array based on the ordering of another array
// const b = ['p2', 'p3', 'p1', 'p4']

//  turn a into map
//  e.g. a = { p1: { id: 'p1' }, p2:{ id: 'p2' } }

const sortTwoArray = (array1, array2) => {
  const newA = {};
  for (let i = 0; i < array1.length; i++) {
    newA[array1[i].id] = array1[i];
  }
  console.log(newA);
};

const array1 = [{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }, { id: 'p4' }];
const array2 = ['p2', 'p3', 'p1', 'p4'];

sortTwoArray(array1, array2);
