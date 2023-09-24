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
