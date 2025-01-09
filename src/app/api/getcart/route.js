import User from "@/lib/models/user.model";
import { connect } from "@/lib/mongodb/mongoose";

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();
        const user = await User.findOne({ username: data.username });
        return new Response(JSON.stringify(user.cart), { status: 200 });
    } catch (error) {
        return new Response("Error while fetching cart", { status: 500 });
    }
};