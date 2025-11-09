"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Loader2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We will be in touch soon.", {
          icon: <Check className="h-4 w-4" />,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container max-w-5xl mb-16 text-center"
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600">
          We're here to answer your questions and guide you on your journey.
        </p>
      </motion.div>

      <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Contact Information Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 lg:col-span-1"
        >
          <InfoCard
            icon={Phone}
            title="Phone"
            detail="+91 98765 43210"
            href="tel:+919876543210"
          />
          <InfoCard
            icon={Mail}
            title="Email"
            detail="support@myacademy.com"
            href="mailto:support@myacademy.com"
          />
          <InfoCard
            icon={MapPin}
            title="Address"
            detail="123 Education Lane, Knowledge City, Global"
            href="https://maps.google.com"
          />

          {/* Social Media Links */}
          <Card className="p-6 bg-white shadow-md">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </Card>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-xl border-t-8 border-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`transition-all duration-200 ${
                        errors.name ? "border-red-500 focus:ring-red-200" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`transition-all duration-200 ${
                        errors.email ? "border-red-500 focus:ring-red-200" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`transition-all duration-200 ${
                      errors.subject ? "border-red-500 focus:ring-red-200" : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`transition-all duration-200 ${
                      errors.message ? "border-red-500 focus:ring-red-200" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container max-w-6xl mt-16"
      >
        <Card className="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0138227613994!2d80.94598661504726!3d26.871267983147903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645150407408!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </Card>
      </motion.div>
    </div>
  );
}

// Reusable Info Card Component
const InfoCard = ({
  icon: Icon,
  title,
  detail,
  href,
}: {
  icon: React.ElementType;
  title: string;
  detail: string;
  href: string;
}) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Card className="p-6 bg-white shadow-md transition-all duration-300 hover:shadow-lg group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-4"
      >
        <Icon className="h-6 w-6 text-blue-600 shrink-0 mt-1 group-hover:text-purple-600 transition-colors duration-300" />
        <div>
          <h4 className="text-lg font-semibold text-blue-800 group-hover:text-purple-800 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-600 text-sm">{detail}</p>
        </div>
      </a>
    </Card>
  </motion.div>
);

// Social Media Link Component
const SocialLink = ({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);
