import { getPostById } from './postData';
import getSingleCategory from './categoryData';

const viewPostDetails = (postId) => new Promise((resolve, reject) => {
  getPostById(postId)
    .then((postObject) => {
      getSingleCategory(postObject.category_id)
        .then((categoryObject) => {
          resolve({ categoryObject, ...postObject });
        });
    }).catch((error) => reject(error));
});

export default viewPostDetails;
