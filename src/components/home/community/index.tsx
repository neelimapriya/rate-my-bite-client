"use client"
import Count from '@/components/Count/Count'
import TextSizer from '@/components/shared/TextSizer'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Star, Users, Utensils } from 'lucide-react'
import {motion} from "framer-motion"

const stats = [
    {
        label: "Food Spots",
        value: "1,200+",
        icon: <Utensils className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
    {
        label: "Active Users",
        value: "50,000+",
        icon: <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />,
    },
    { label: "Reviews", value: "85,000+", icon: <Star className="h-8 w-8 mx-auto mb-2 text-orange-600" /> },
    { label: "Cities", value: "120+", icon: <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-600" /> },
]
export default function Community() {

    return (
        <section className="py-12 bg-white border dark:bg-black dark:border-primary">
            <div className="container px-4 mx-auto">
                <TextSizer title='Join Our Foodie Community' desc='Connect with fellow food enthusiasts, share your favorite spots, write reviews, and be part of a growing network that celebrates great taste.' />
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
            </div>
        </section>
    )
}
