// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, GraduationCap, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Dummy Course Data
const courses = [
  {
    id: 1,
    title: 'Web Development Masterclass',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and Next.js.',
    image: '/images/web-dev-course.jpg', 
    price: '$299',
  },
  {
    id: 2,
    title: 'Data Science with Python',
    description: 'Fundamentals of Python, Pandas, NumPy, Machine Learning, and AI.',
    image: '/images/data-science-course.jpg', 
    price: '$349',
  },
  {
    id: 3,
    title: 'Graphic Design Fundamentals',
    description: 'Master Adobe Photoshop, Illustrator, and UI/UX Design principles.',
    image: '/images/graphic-design-course.jpg', 
    price: '$249',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-r from-blue-100 to-blue-200 text-center flex items-center justify-center overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] shadow-lg">
        <div className="container relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-900 mb-6 drop-shadow-md">
            Illuminate Your Future with <span className="text-blue-600">The Power of Knowledge</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Elevate your skills and boost your career with high-quality online courses led by industry experts.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link href="/courses">Explore Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
        {/* Decorative background elements (Tailwind config animation required) */}
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-blue-50 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl font-semibold text-blue-800">Diverse Course Catalog</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Explore our vast collection of expert-led courses, from technical skills to creative arts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-blue-50 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl font-semibold text-blue-800">Industry Expert Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Learn from seasoned professionals who bring real-world experience to the virtual classroom.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-blue-50 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl font-semibold text-blue-800">Active Student Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Connect and collaborate with fellow students to enhance your learning journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Popular Courses Section */}
      <section className="py-16 md:py-24 bg-blue-100 container rounded-2xl mb-16 shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Our Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl transform hover:-translate-y-2">
              <div className="relative h-48 w-full">
                {/* Placeholder Image - Update paths */}
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-800">{course.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-2xl font-extrabold text-blue-700">{course.price}</span>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            <Link href="/courses">View All Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Call to Action / Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-200 to-blue-300 text-center rounded-tl-[100px] md:rounded-tr-[200px] shadow-lg mb-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Get Exclusive Updates and Offers</h2>
          <p className="text-lg text-blue-700 mb-8">
            Subscribe to our newsletter to receive information about new courses, discounts, and the latest educational content.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <Label htmlFor="email" className="sr-only">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="flex-grow p-3 rounded-full border-2 border-blue-400 focus:border-blue-600 shadow-sm transition-all duration-300"
            />
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}