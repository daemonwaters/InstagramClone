import { ref, storage, getDownloadURL, uploadBytes } from "../lib/firebase";
import { ChangeAvatar } from "../features/Users/services/ChangeAvatar";
import { useAppDispatch } from "./reduxHooks";

export function useUpload() {
  const dispatch = useAppDispatch();

  const upload = async (file: File, documentId: string) => {
    const storageRef = ref(storage, `imgs/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file);

    return uploadTask
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            dispatch(ChangeAvatar({ avatar_url: url, documentId }));
          })
          .catch((error) => {
            throw new Error(
              "Failed to get the document download url. " + error
            );
          });
      })
      .catch((error) => {
        throw new Error("Upload failed. " + error);
      });
  };

  return upload;
}
