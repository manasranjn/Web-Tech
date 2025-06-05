// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");

// console.log("One");
// setTimeout(() => {
//     console.log("Two");
// }, 3000)
// console.log("Three");
// console.log("Four");

// () => {
//     () => {
//         () => {
//             () => {
//                 () => {

//                 }
//             }
//         }
//     }
// }

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
getUser(1, (user) => {
    getUserPosts(user.id, (posts) => {
        getPostComments(posts[0].postId, (comments) => {
            console.log("Comments: ", comments);
        });
    });
});