const generateId = () => {
  return Math.random().toString(36).substr(2, 18);
};

export default generateId;
