import Post from "@/lib/models/post.model";
import { connect } from "@/lib/mongodb/mongoose";

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();
        const searchTerm = decodeURIComponent(data.searchTerm);
        const searchResult = await Post.find({
            $or: [
                {title: {$regex: searchTerm, $options: 'i'}},
                {description: {$regex: searchTerm, $options: 'i'}},
                {skills: {$regex: searchTerm, $options: 'i'}}
            ],
        }).sort({createdAt: -1})
        return new Response(JSON.stringify(searchResult), {status: 200})
    } catch (error) {
        console.log("Error: ", error)
    }
}