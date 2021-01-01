export const getRandomItemOf = (array, modifier = 0) => {
    let index = getRandomIndex(array.length, modifier);
    index = index < 0 ? 0 : (index >= array.length ? array.length - 1 : index);
    return array[index];
}

export const getRandomIndex = (length, modifier = 0) => Math.floor(Math.random() * length) + modifier;

export const diceRoll = (d1, d2 = 0) => Math.ceil(Math.random() * d1) + Math.ceil(Math.random() * d2);

export const getRandomItemFromObject = (obj) => {
    let entries = Object.entries(obj);
    let index = getRandomIndex(entries.length);

    return entries[index][1];
}