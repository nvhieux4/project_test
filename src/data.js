const DEFAULT_LENGTH_VALUE = 50;
const DEFAULT_HIGHT = 4;

const fakeData = () => {
    const array = [];

    for (let index = 0; index < DEFAULT_LENGTH_VALUE; index++) {
        array[index] = {
            value: randomNumber(),
            time: "default",
        };
    }

    return array;
};

const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

export default fakeData;
export { randomNumber, DEFAULT_HIGHT };
