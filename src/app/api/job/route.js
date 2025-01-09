import Post from "@/lib/models/post.model";
import {connect} from "@/lib/mongodb/mongoose";

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();
        const job = await Post.findOne({ _id: data.id });
        return new Response(JSON.stringify(job), { status: 200 });
    } catch (error) {
        return new Response("Error while fetching job", { status: 500 });
    }
}