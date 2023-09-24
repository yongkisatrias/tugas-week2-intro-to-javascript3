fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((jsonData) => {
    // Retrieve all names (only name)
    const names = jsonData.map((user) => user.name);

    // Displays all names
    names.forEach((name) => console.log(`Nama: ${name}`));
  })

  .catch(() => {
    console.log("Terjadi kesalahan!"); // to handle errors
  });
// Output =
// Nama: Leanne Graham
// Nama: Ervin Howell
// Nama: Clementine Bauch
// Nama: Patricia Lebsack
// Nama: Chelsey Dietrich
// Nama: Mrs. Dennis Schulist
// Nama: Kurtis Weissnat
// Nama: Nicholas Runolfsdottir V
// Nama: Glenna Reichert
// Nama: Clementina DuBuque
