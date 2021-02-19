// Js promises
const fetchData = function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
    }, 2000);
  });
  
  return promise;
}


fetchData()
  .then((data) => console.log('success'))
  .catch();
