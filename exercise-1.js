const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Then catch
const checkDay = cekHariKerja("senin");

checkDay
  .then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
  })
  .catch((error) => {
    console.log(error.message);
  });
// This will display true = "Hari senin adalah hari kerja"

// Try catch using arrow function ES6
const checkWorkDay = async () => {
  try {
    const workingDay = await cekHariKerja("minggu");
    console.log(`Hari ${workingDay} adalah hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
};

checkWorkDay();
// this will display error = "Hari ini bukan hari kerja"
