import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  title: string;
  description: string;
}
export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const onSubmit = async (data: IFormInput) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          type="text"
          placeholder="Title..."
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
        <textarea
          className="form-control"
          placeholder="Description..."
          {...register("description")}
        />
        <p>{errors.description?.message}</p>
        <input type="submit" className="btn btn-light" />
      </form>
    </div>
  );
};
// Compare this snippet from firebase-project/src/pages/create-post/form.tsx:
