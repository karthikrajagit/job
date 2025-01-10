import Post from "@/lib/models/post.model";
import { connect } from "@/lib/mongodb/mongoose";


export const DELETE = async (req) => {
    try {
        await connect();
        const data = await req.json();
        await Post.findByIdAndDelete(data.postId);
        return new Response("Post deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error while deleting post", { status: 500 });
    }
};