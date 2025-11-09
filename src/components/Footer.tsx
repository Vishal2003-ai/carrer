// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-auto bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Section 1: Academy Info */}
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-3">MyAcademy</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="/press" className="hover:text-blue-600">Press</Link></li>
            </ul>
          </div>
          
          {/* Section 2: Courses */}
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses" className="hover:text-blue-600">All Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>

          {/* Section 3: Legal */}
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Email: <a href="mailto:support@myacademy.com" className="hover:text-blue-600">support@myacademy.com</a>
            </p>
          </div>
        </div>

        <Separator className="my-6 bg-gray-300" />

        <div className="text-center text-sm text-muted-foreground pt-4">
          © {new Date().getFullYear()} MyAcademy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}