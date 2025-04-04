import { useNavigate } from "react-router";
import { useCreateComment } from "../../api/commentApi";
import { usePlant } from "../../api/plantApi";
import useAuth from "../../hooks/useAuth";
import { useMessageContext } from "../../contexts/MessageContext";

export default function CommentsCreate({
    plantId,
    onCreate
}) {

    const { create } = useCreateComment();
    const { email } = useAuth();

    const [plant] = usePlant(plantId);

    const { showMessage } = useMessageContext();
    const navigate = useNavigate();

    const createAction = async (formData) => {

        const comment = Object.fromEntries(formData);

        const payload = {
            comment: comment.content,
            plantId,
            email,
            plantImage: plant.image_url
        };

        const result = await create(payload);
        if (!result.comment) {

            showMessage('❌ ' + result.message);
            return navigate(`/plants/details/${plantId}`);
        }

        onCreate(result);
    }

    return (
        <form action={createAction}>
            <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
            <textarea
                name="content"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your comment..."
            ></textarea>
            <button
                className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition"
                type="submit"
            >
                Post Comment
            </button>
        </form>

    );
}