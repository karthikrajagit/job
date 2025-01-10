import Post from '@/lib/models/post.model';
import { connect } from '@/lib/mongodb/mongoose';

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();
        const jobs = await Post.find({ username: data.username });
        return new Response(JSON.stringify(jobs), { status: 200 });
    } catch (error) {
        return new Response("Error while fetching jobs", { status: 500 });
    }
}