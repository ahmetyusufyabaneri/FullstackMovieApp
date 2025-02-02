import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    api
      .delete(`http://127.0.0.1:4080/api/movies/${id}`)
      .then(() => {
        navigate("/");

        toast.success("Movie Deleted!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded-sm duration-100 hover:bg-red-400"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
