import { ref, storage, getDownloadURL, uploadBytes } from "../lib/firebase";
import { ChangeAvatar } from "../features/Users/services/ChangeAvatar";
import { useAppDispatch } from "./reduxHooks";
import { PostInfo, sharePost } from "../features/Posts/services/sharePost";
type Uploadparams = {
  action: "avatar_change" | "post_upload";
  file: File;
} & (
  | { action: "avatar_change"; documentId: string }
  | { action: "post_upload"; postInfo: Omit<PostInfo, "content_url"> }
);

export function useUpload() {
  const dispatch = useAppDispatch();

  const upload = async (params: Uploadparams) => {
    const storageRef = ref(storage, `imgs/${params.file.name}`);
    const uploadTask = uploadBytes(storageRef, params.file);

    return uploadTask
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            if (params.action == "avatar_change") {
              dispatch(
                ChangeAvatar({ avatar_url: url, documentId: params.documentId })
              );
              return;
            }
            if (params.action == "post_upload") {
              const sharedPostInfo = {
                authorId: params.postInfo.authorId,
                author: params.postInfo.author,
                caption: params.postInfo.caption,
                avatar: params.postInfo.avatar,
                content_url: url,
                editValue: {
                  filter: params.postInfo.editValue.filter,
                  customClass: params.postInfo.editValue.customClass,
                },
              };
              dispatch(sharePost(sharedPostInfo));
            }
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
