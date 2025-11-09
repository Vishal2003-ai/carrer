// app/courses/page.tsx
'use client'; // For Tabs functionality

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Bot, Palette, Briefcase, Calculator, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

// --- Course Data (Organized by Category) ---
const courseData = {
  Technology: [
    {
      title: 'Full Stack Web Development',
      icon: Code,
      description: 'Master MERN/MEVN stack, build scalable applications, and launch your career as a professional developer.',
      duration: '6 Months',
      level: 'Advanced',
      price: '$499',
    },
    {
      title: 'AI & Machine Learning Specialist',
      icon: Bot,
      description: 'Dive into Python, TensorFlow, and deep learning algorithms for real-world AI applications.',
      duration: '7 Months',
      level: 'Expert',
      price: '$599',
    },
    {
      title: 'UI/UX Design Professional',
      icon: Palette,
      description: 'Learn Figma, design thinking, prototyping, and user research to create stunning interfaces.',
      duration: '4 Months',
      level: 'Intermediate',
      price: '$349',
    },
  ],
  Certifications: [
    {
      title: 'NIELIT O-Level',
      icon: BookOpen,
      description: 'Comprehensive preparation for the O-Level certification, covering IT Tools, Web Design, and Programming.',
      duration: '1 Year',
      level: 'Beginner',
      price: '$299',
    },
    {
      title: 'ADCA (Advanced Diploma in Computer Application)',
      icon: Briefcase,
      description: 'A comprehensive diploma covering programming, database management, and essential office tools.',
      duration: '1 Year',
      level: 'Beginner',
      price: '$399',
    },
    {
      title: 'DCA (Diploma in Computer Application)',
      icon: Briefcase,
      description: 'Fundamentals of computing, operating systems, MS Office, and internet technologies.',
      duration: '6 Months',
      level: 'Beginner',
      price: '$199',
    },
  ],
  Finance: [
    {
      title: 'Tally Prime & GST Certification',
      icon: Calculator,
      description: 'Master Tally Prime software, GST compliance, invoicing, and financial accounting for business.',
      duration: '3 Months',
      level: 'Intermediate',
      price: '$249',
    },
    {
      title: 'Advanced Excel & Data Analytics',
      icon: TrendingUp,
      description: 'Expert-level Excel skills including Pivot Tables, VLOOKUP, data modeling, and visualization.',
      duration: '2 Months',
      level: 'Intermediate',
      price: '$199',
    },
  ],
};

// --- Course Card Component ---
const CourseCard = ({ course }: { course: typeof courseData.Technology[0] }) => {
  const Icon = course.icon;
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-xl transform hover:-translate-y-2 border-t-4 border-blue-600">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Icon className="h-8 w-8 text-blue-600" />
          <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Level: <span className="font-semibold">{course.level}</span></span>
            <span>Duration: <span className="font-semibold">{course.duration}</span></span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 h-16">{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-blue-50 p-4 border-t">
        <span className="text-2xl font-extrabold text-blue-700">{course.price}</span>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all">
          <Link href={`/enroll/${course.title.replace(/\s/g, '-')}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// --- Main Courses Page Component ---
export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-blue-200 to-blue-300 text-center shadow-lg mb-12">
        <div className="container max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-md">
            Find Your Next Career Path
          </h1>
          <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
            Explore our curated selection of industry-focused courses designed by top professionals to get you job-ready.
          </p>
        </div>
      </section>

      {/* Course Tabs and Listing Section */}
      <section className="py-12 md:py-20 container">
        <Tabs defaultValue="Technology" className="w-full">
          {/* Tab List */}
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white p-2 shadow-lg border border-blue-200">
              <TabsTrigger value="Technology" className="text-lg px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">
                Tech & Development
              </TabsTrigger>
              <TabsTrigger value="Certifications" className="text-lg px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">
                Certifications
              </TabsTrigger>
              <TabsTrigger value="Finance" className="text-lg px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">
                Accounting & Finance
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content: Technology */}
          <TabsContent value="Technology">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Cutting-Edge Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.Technology.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Content: Certifications */}
          <TabsContent value="Certifications">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Career Diploma Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.Certifications.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Content: Finance */}
          <TabsContent value="Finance">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Business & Accounting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.Finance.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center rounded-t-[50px] shadow-lg mt-12">
        <div className="container">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Can't Decide? Talk to Our Advisor!</h3>
          <p className="text-lg text-gray-700 mb-8">
            Get personalized recommendations based on your goals and background.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-3 rounded-full shadow-xl transition-all duration-300">
            <Link href="/contact">Contact Advisor <ArrowRight className="ml-3 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}