import User from "@/lib/models/user.model";
import { connect } from "@/lib/mongodb/mongoose";
import { currentUser } from "@clerk/nextjs/server";

export const PUT = async (req) => {
    const newUser = await currentUser();
    console.log("Clerk User ID:", newUser.id);

    try {
        await connect();
        const data = await req.json();

        // Validate postId
        if (!data.postId || typeof data.postId !== 'string') {
            return new Response('Invalid postId', { status: 400 });
        }

        // Fetch user by Clerk ID
        const user = await User.findOne({ clerkId: newUser.id });
        if (!user) {
            return new Response('User not found', { status: 401 });
        }

        console.log("User found:", user);

        
        const update = { $pull: { cart: data.postId } };// Add postId

        const updatedUser = await User.findByIdAndUpdate(
            user.id, // Use MongoDB `_id`
            update,
            { new: true }
        );

        return new Response(
            JSON.stringify({ success: true, cart: updatedUser.cart }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating user cart:", error);
        return new Response('Failed to update the user cart', { status: 500 });
    }
};
