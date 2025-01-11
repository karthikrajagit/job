import { connect } from "@/lib/mongodb/mongoose";
import Post from "@/lib/models/post.model";
import { currentUser } from "@clerk/nextjs/server";
export const POST = async (req) => {
    const user = await currentUser();
    const data = await req.json();
    try {
        await connect();
        if(!user)
        {
            return new Response('Unauthorized', { status: 401 });
        }
        
        const newPost = await Post.create(
            {
                username: data.username,
                userEmail: data.email,
                title: data.title,
                description: data.description,
                company: data.company,
                experience: data.experience,
                salary: data.salary,
                location: data.location,
                skills: data.skills,
                lastdate: data.lastdate
            }
        );
        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
        return new Response('Failed to create a new post', { status: 500 });
    }
}