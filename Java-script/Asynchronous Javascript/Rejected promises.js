const fetchData = function (success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("✅ Data loaded");
      else reject("❌ Failed to load data");
    }, 1000);
  });
};

fetchData(false)
  .then(data => console.log(data))
  .catch(err => console.error(err));
