const delay = (s, ms) => new Promise((resolve) => setTimeout(() => {
    console.log(s);
    resolve();
}, ms));

const printInOrder = async () => {
  console.log('a');
  console.log('b');
  await delay('c', 3000);
  await delay('d', 0);
  console.log('e');
};

printInOrder();