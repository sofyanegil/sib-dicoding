async function getBooks() {
  try {
    const response = await fetch("https://books-api.dicoding.dev/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345",
      },
      body: JSON.stringify({
        id: 10,
        title: "Edensor",
        author: "Andrea Hirata",
      }),
    });

    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
}

getBooks();
