/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import { IPost } from "@/types";
import { IComment } from "@/types/comment.type";
import { IRating } from "@/types/rating.type";
import { IVote } from "@/types/vote.type";
// import { Ipost, IpostComment, IpostVote, Irating } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// get all products
// lib/api.ts
export const getAllposts = async (
  page?: string,
  limit?: string,
  query: { [key: string]: string | undefined } = {}
) => {
  const params = new URLSearchParams();

  if (query.searchTerm) params.append("searchTerm", query.searchTerm);
  if (query.category) params.append("category", query.category);
  if (query.location) params.append("location", query.location);
  if (query.minPrice) params.append("minPrice", query.minPrice);
  if (query.maxPrice) params.append("maxPrice", query.maxPrice);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post?page=${page}&limit=${limit}&${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          ((await cookies()).get("accessToken")?.value as string) || "",
      },
    }
  );
  const data = await res.json();
  return data;
};

// get single product
export const getSinglePost = async (postId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/post/${postId}`, {
      next: {
        tags: ["POST"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add product
export const createPost = async (postData: Partial<IPost>): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/post`, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("POST");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update product
export const updatePost = async (
  postData: IPost,
  productId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/post/${productId}`,
      {
        method: "PATCH",
        body: JSON.stringify(postData),
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("POST");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
// ------------add comment----------
export const addcomment = async (
  commentData: Partial<IComment>
): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/comments`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("COMMENT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
// ------------add rating----------
export const addrating = async (commentData: Partial<IRating>) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/rating`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("RATING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const addvote = async (voteData: Partial<IVote>): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/vote`, {
      method: "POST",
      body: JSON.stringify(voteData),
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("VOTE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
