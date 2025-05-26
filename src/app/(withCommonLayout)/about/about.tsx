"use client";
import AboutBanner from "@/components/about/aboutBanner";
import pic from "@/assets/event/1.jpeg";
import person from "@/assets/images.png";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Lightbulb,
  MapPin,
  Smile,
  Star,
  ThumbsUp,
  Users,
  Utensils,
} from "lucide-react";
import Count from "@/components/Count/Count";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nora Bennett",
      role: "Chief Experience Officer",
      image: person,
      bio: "Nora crafts unforgettable dining journeys that combine taste, ambiance, and storytelling into one delightful experience.",
      specialties: ["UX Design", "Customer Journey", "Brand Strategy"],
    },
    {
      name: "Leo Matsuda",
      role: "Head of Culinary Research",
      image: person,
      bio: "A global explorer of flavor, Leo turns traditional recipes into modern masterpieces with research and heart.",
      specialties: ["Fusion Cuisine", "Culinary History", "R&D"],
    },
    {
      name: "Ava Campbell",
      role: "Digital Content Lead",
      image: person,
      bio: "Ava shapes narratives that make taste buds tingle and screens scroll. Food is her canvas, content her craft.",
      specialties: ["Copywriting", "Storytelling", "Social Media"],
    },
    {
      name: "Zane Holloway",
      role: "Lead Visual Artist",
      image: person,
      bio: "From plate to pixel, Zane captures food in its most stunning form—every frame a feast for the eyes.",
      specialties: ["Visual Design", "Motion Graphics", "Food Aesthetics"],
    },
  ];
  const stats = [
    {
      label: "Food Spots",
      value: 1200,
      icon: <Utensils className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
    {
      label: "Active Users",
      value: 50000,
      icon: <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
    {
      label: "Reviews",
      value: 85000,
      icon: <Star className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
    {
      label: "Cities",
      value: 120,
      icon: <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <AboutBanner></AboutBanner>
        <main className="container mx-auto px-4 py-16">
          {/* Statistics Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <Count label={stat.label} target={Number(stat.value)} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold primary mb-6">
                Why We Exist
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We believe every meal should be memorable. Our goal is to
                  guide food lovers to the most delightful culinary experiences.
                </p>
                <p>
                  Each review is more than a rating — it’s a story. From
                  ambiance to taste, we cover what matters to diners.
                </p>
                <p>
                  Whether it’s a cozy café or a bustling food truck, we bring
                  you the real flavor of the place.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={pic}
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <section className="mb-20 w-full">
                <h2 className="text-3xl font-bold text-primary text-center mb-12">
                  What Drives Us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Passion for Food
                        </h3>
                        <p className="text-gray-600">
                          We live and breathe culinary culture. Every review
                          reflects our love for discovering amazing food.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all  dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Trusted Reviews
                        </h3>
                        <p className="text-gray-600">
                          We don’t get paid to praise. Our reviews are 100%
                          honest, based on personal experience.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all  dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Community Focused
                        </h3>
                        <p className="text-gray-600">
                          We celebrate food lovers from all walks of life.
                          Everyone’s opinion matters in our community.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Card 4 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all  dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <Smile className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Joyful Experience
                        </h3>
                        <p className="text-gray-600">
                          We want food to make you smile. That’s why our
                          recommendations focus on delight and discovery.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Card 5 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all  dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <ThumbsUp className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Simplicity Wins
                        </h3>
                        <p className="text-gray-600">
                          No jargon. No fluff. Just simple, practical advice to
                          help you choose the best meal for the moment.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Card 6 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Card className="text-center p-8 shadow-md hover:shadow-xl transition-all  dark:bg-black border dark:border-white">
                      <CardContent className="p-0">
                        <Lightbulb className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                          Continuous Learning
                        </h3>
                        <p className="text-gray-600">
                          We grow with every bite. Our team constantly explores
                          new trends, tastes, and ideas to stay ahead.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Meet the Creators Behind the Magic
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-96 ">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover "
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary mb-1 font-medium">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((s, i) => (
                          <Badge
                            key={i}
                            className="bg-gray-100 border text-gray-700 px-2 py-0.5 text-xs rounded-full"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
