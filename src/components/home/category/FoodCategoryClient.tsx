'use client';

import Image from "next/image";
import { ICategory } from "@/types/category.type";
import Link from "next/link";
import { motion } from "framer-motion";
import TextSizer from "@/components/shared/TextSizer";

interface Props {
  data: ICategory[];
}

const FoodCategoryClient = ({ data }: Props) => {
  return (
    <section className="p-4 md:p-8 lg:p-12 rounded-2xl dark:bg-gray-800">
      <TextSizer
        title="Search By Cuisine"
        desc="Explore restaurants and cafes by your favorite cuisine"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {data.map((category, index) => (
  <motion.div
    key={category.id}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }}
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white group relative shadow-md cursor-pointer overflow-hidden rounded-lg transition-all"
    >
      <Link href={`/posts?category=${category.id}`}>
        <Image
          src={category.image}
          alt={category.name}
          width={400}
          height={300}
          loading="lazy"
          className="w-full h-40 object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-lg font-semibold text-[#FF3C48] group-hover:underline">
            {category.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default FoodCategoryClient;
