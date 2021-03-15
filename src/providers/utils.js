export async function login({ userEmail, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userEmail === 'noftzjs' && password === 'password') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }