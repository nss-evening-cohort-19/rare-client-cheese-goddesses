// const viewPostDetails = (id) => new Promise((resolve, reject) => {
//   getSinglePost(id).then((postObj) => {
//     getUserById(postObj?.user_id).then((userInfo) => {
//       getSingleCategoryById(postObj?.category_id).then((categoryObj) => {
//         resolve({
//           postObj,
//           userInfo,
//           categoryObj,
//         });
//       });
//     });
//   })
//     .catch((error) => reject(error));
// });

// const viewPostComments = (id) =>
//   new Promise((resolve, reject) => {
//     getSinglePost(id)
//       .then((postObj) => {
//         getUserById(postObj?.user_id).then((userInfo) => {
//           getSingleCategoryById(postObj?.category_id).then((categoryObj) => {
//             resolve({
//               postObj,
//               userInfo,
//               categoryObj,
//             });
//           });
//         });
//       })
//       .catch((error) => reject(error));
//   });
