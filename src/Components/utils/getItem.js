let isOk = true;

const getItem = (time, product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(product);
      } else {
        reject("Error");
      }
    }, time);
  });
};

export default getItem;
