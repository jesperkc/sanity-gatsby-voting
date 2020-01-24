const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "xzy5zxff",
  dataset: "production",
  token:
    "skcTj4hPew7Vh0nesBiU3g8OgpB7j3g6VrAqcHC09p5lUVtUXSvWBGNbVwD58N23SncZ6tz2zH5rLNxmSQP2r3SIOo8rcZQVd2JgxcesKr2JXpwXw15bfnZiZZbBZc04r1MVTo4yb8Jn4IC6xTn5sCL9bDUCBlkdq9B10vRr9vTKgSrjk77M", // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});

exports.handler = function(event, context, callback) {
  var id = "fdd816d4-2b6e-465a-bd30-1414c3a89689";

  client.getDocument(id).then(item => {
    var votes = item.votes || 0;
    votes += 1;

    client
      .patch(id) // Document ID to patch
      .set({ votes: votes }) // Increment field by count
      .commit() // Perform the patch and return a promise
      .then(updated => {
        callback(null, {
          statusCode: 200,
          body: "Added 1 vote"
        });
      })
      .catch(err => {
        callback(null, {
          statusCode: 200,
          body: "Oh no, the update failed:" + err.message
        });
      });
  });
};
