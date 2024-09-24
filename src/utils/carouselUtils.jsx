export const getNextIndex = (index, length) => (index + 1) % length;
export const getPrevIndex = (index, length) => (index - 1 + length) % length;