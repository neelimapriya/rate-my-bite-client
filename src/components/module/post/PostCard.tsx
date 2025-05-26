import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPost } from "@/types";
import { ArrowRight, Crown, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function PostCard({
  spot,
}: {
  spot: IPost & { averageRating: number };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={spot.image || "/placeholder.svg"}
            alt={spot.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
          {spot.isPremium && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-primary text-white hover:bg-primary-dark flex items-center gap-1 px-2 py-1 rounded">
                <Crown className="h-4 w-4" />
                Premium
              </Badge>
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge
              variant="outline"
              className="bg-white/90 text-primary font-semibold px-2 py-1 rounded"
            >
              {spot.category?.name || "Category"}
            </Badge>
          </div>
        </div>
        <CardHeader className="px-4 pt-4 pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg md:text-xl text-primary font-bold">
              {spot.title}
            </CardTitle>
            <span className="text-sm font-semibold text-gray-700">
              {spot.price?.toLocaleString()} TK
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1 text-primary" />
            <span>{spot.location}</span>
          </div>
        </CardHeader>
        <CardContent className="px-4 flex-grow">
          <CardDescription className="line-clamp-3 text-gray-700">
            {spot.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="px-4 pt-0 pb-4 flex justify-between items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(spot.averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600">
              {spot.ratings?.length || 0} Reviews
            </span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="flex items-center gap-1 text-white bg-primary"
            asChild
          >
            <Link href={`/posts/${spot.id}`}>
              View <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
