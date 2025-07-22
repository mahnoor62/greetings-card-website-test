// pages/api/secure-data.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Secure data to return if user is logged in
  res.status(200).json({
    message: "Authenticated request success!",
    user: session.user, // contains name, email, image
  });
}

