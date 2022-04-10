/**
 * Error Handling
 */
// !Bad
try {
  sendMail();
} catch (error) {
  console.log(error);
}

// *Good
try {
  sendMail();
} catch (error) {
  console.error(error);
  notifyUserOfError(error);
  reportErrorToService(error);
}

/**
 *Jika ada penolakan promise
 */
// !Bad
sendRequest()
  .then((response) => {
    // ...
  })
  .catch((error) => {
    console.log(error);
  });

// *Good
sendRequest()
  .then((response) => {
    // ...
  })
  .catch((error) => {
    console.log(error);
    notifyUserOfError(error);
    reportErrorToService(error);
  });
