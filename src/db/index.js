var admin = require("firebase-admin");

var serviceAccount = require("../../firebase-credentials.json");


try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://test-project-3294b.firebaseio.com"
      });
} catch (e) {
  throw new Error(
    "Please add the firebase-credentials.json file to your root folder found in your project's Slack channel"
  );
}

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

// import the db from any file to access firebase!
module.exports = db;
