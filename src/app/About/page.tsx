// app/about/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Lightbulb, Users, ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// Dummy Team Data
const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Founder & CEO',
    bio: 'A passionate educator with 15 years of experience in EdTech and curriculum design.',
    image: '/images/team-sarah.jpg', // Placeholder image
  },
  {
    name: 'Mr. David Lee',
    title: 'Lead Technology Officer',
    bio: 'Expert in AI-driven learning systems and platform scalability.',
    image: '/images/team-david.jpg', // Placeholder image
  },
  {
    name: 'Ms. Emily Clark',
    title: 'Head of Student Success',
    bio: 'Dedicated to optimizing the student learning journey and community growth.',
    image: '/images/team-emily.jpg', // Placeholder image
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      
      {/* 1. Hero Section: Introduction */}
      <section className="relative w-full py-24 md:py-36 bg-gradient-to-r from-blue-200 to-blue-300 text-center shadow-lg">
        <div className="container max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4 drop-shadow-md">
            Our Story, Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 max-w-2xl mx-auto">
            Empowering individuals worldwide through accessible, high-quality, and future-focused education.
          </p>
        </div>
      </section>

      {/* 2. Institute Details & Mission/Vision */}
      <section className="py-20 md:py-32 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Institute Details */}
          <div className="lg:pr-10">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">
              Institute Details & History
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              **MyAcademy** was founded in 2018 with the core belief that quality education should not be restricted by geography or cost. We started with three basic courses and have since grown into a global platform hosting **over 500 specialized courses** and serving **more than 100,000 students** across 80 countries.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="p-4 bg-white shadow-md border-blue-200">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <p className="text-3xl font-bold text-blue-800">500+</p>
                </div>
                <CardDescription>Specialized Courses</CardDescription>
              </Card>
              <Card className="p-4 bg-white shadow-md border-blue-200">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <p className="text-3xl font-bold text-blue-800">100K+</p>
                </div>
                <CardDescription>Happy Students</CardDescription>
              </Card>
            </div>
          </div>
          
          {/* Our Vision */}
          <Card className="p-8 bg-blue-100 shadow-xl border-t-8 border-blue-600">
            <CardHeader className="p-0 mb-4">
              <Lightbulb className="h-10 w-10 text-blue-600 mb-3" />
              <CardTitle className="text-3xl font-bold text-blue-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 leading-relaxed mb-4">
                To be the world's leading platform for continuous learning, transforming careers and fostering innovation through highly practical and interactive education.
              </p>
              <p className="text-sm italic text-blue-700 mt-4">
                "Learning is not attained by chance, it must be sought for with ardor and diligence."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Our Team Section */}
      <section className="py-20 md:py-32 bg-white rounded-t-[100px] shadow-inner">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">
            Meet the Driving Force: Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] border-t-4 border-blue-600">
                <div className="relative h-60 w-full">
                  {/* Placeholder for Team Member Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-500" // Attractive grayscale hover effect
                  />
                </div>
                <CardHeader className="text-center pt-6 pb-2">
                  <CardTitle className="text-2xl font-bold text-blue-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6">
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-16 bg-blue-50 text-center">
        <div className="container">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-gray-700 mb-8">
            Explore our curated catalog of courses and find the perfect path for your growth.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-3 rounded-full shadow-xl transition-all duration-300">
            <Link href="/courses">View All Courses <ArrowRight className="ml-3 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}