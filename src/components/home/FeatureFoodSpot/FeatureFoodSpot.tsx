
import { getHomePagePosts } from "@/services/dashboard/user";
import { IPost } from "@/types";
import FeaturedFoodSpotClient from "./FeaturedFoodSpotClient";



export default async function FeatureFoodSpot() {
  const { data } = (await getHomePagePosts()!) as { data: IPost[] };
  const postsWithAverage = data?.map((post) => {
    const values = post?.ratings!.map((r) => r.value);
    const average =
      values.reduce((sum, val) => sum + val, 0) / (values.length || 1);

    return {
      ...post,
      averageRating: average,
    };
  });

  return (
   <FeaturedFoodSpotClient postsWithAverage={postsWithAverage}></FeaturedFoodSpotClient>
  );
}
