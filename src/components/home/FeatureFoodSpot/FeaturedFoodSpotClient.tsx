"use client";

import PostCard from "@/components/module/post/PostCard";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IPost } from "@/types";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  postsWithAverage: (IPost & { averageRating: number })[];
}

const FeaturedFoodSpotClient = ({ postsWithAverage }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const trending = postsWithAverage.slice(0, 6);
  const newSpots = postsWithAverage.slice(3, 9);
  const topRated = postsWithAverage
    .sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0))
    .slice(0, 6);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="container px-4 mx-auto"
    >
      <div className="relative mb-12">
        <h2 className="text-lg md:text-2xl lg:text-3xl absolute top-0 font-bold">
          Featured Food Spots
        </h2>
        <Tabs defaultValue="trending" className="mt-4 md:mt-0 w-full">
          <TabsList className="ml-auto">
            <TabsTrigger value="trending" className="cursor-pointer">
              Trending
            </TabsTrigger>
            <TabsTrigger value="new" className="cursor-pointer">
              New
            </TabsTrigger>
            <TabsTrigger value="top-rated" className="cursor-pointer">
              Top Rated
            </TabsTrigger>
          </TabsList>

          {[
            { value: "trending", posts: trending },
            { value: "new", posts: newSpots },
            { value: "top-rated", posts: topRated },
          ].map(({ value, posts }) => (
            <TabsContent key={value} value={value} className="mt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {posts.map((spot, i) => (
                    <motion.div
                      key={spot.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                    >
                      <PostCard spot={spot} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Button asChild className="bg-primary hover:bg-orange-600">
          <Link href="/posts">View All Food Spots</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedFoodSpotClient;
