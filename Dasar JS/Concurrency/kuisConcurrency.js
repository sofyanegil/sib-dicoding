// !Kuis Concurrency

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isOffline) resolve({ name: 'John', age: 18 });
      else reject(new NetworkError('Gagal mendapatkan data dari internet'));
    }, 500);
  });
};

const gettingUserName = async () => {
  try {
    const user = await fetchingUserFromInternet(false);
    return await user.name;
  } catch (error) {
    return error.message;
  }
};

(async () => {
  console.log(await gettingUsername());
})();
