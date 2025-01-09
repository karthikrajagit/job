import { connect } from "@/lib/mongodb/mongoose";
import Post from "@/lib/models/post.model";


export const POST = async (req) => {
    try {
        await connect();
        const allpost = await Post.find({}).sort({createdAt: -1});
        return new Response(JSON.stringify(allpost),{
        status: 200})
    } catch (error) {
        return new Response("Error while fetching posts", {
            status: 500
        })
    }
}