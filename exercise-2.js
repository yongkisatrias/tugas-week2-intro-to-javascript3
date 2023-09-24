const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

// Callback function to display the month
const displayMonths = (error, months) => {
  if (months) {
    months.map((month) => console.log(month));
  } else {
    console.log(error.message);
  }
};

// Execute the getMonth function with the displayMonths callback
getMonth(displayMonths); // Output : Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember
