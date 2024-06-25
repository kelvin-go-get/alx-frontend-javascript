// asyncUploadUser function in 100-await.js

import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Await both promises simultaneously
    const [photoResult, userResult] = await Promise.all([
      photoPromise,
      userPromise,
    ]);

    return {
      photo: photoResult,
      user: userResult,
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
