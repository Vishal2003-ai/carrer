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
  LinkedIn,
  Instagram,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-blue-50 py-20">
      {/* Page Header */}
      <div className="container max-w-5xl mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-blue-700">
          We're here to answer your questions and guide you.
        </p>
      </div>

      <div className="container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Column */}
        <div className="space-y-6 lg:col-span-1">
          <InfoCard icon={Phone} title="Phone" detail="+91 98765 43210" />
          <InfoCard icon={Mail} title="Email" detail="support@myacademy.com" />
          <InfoCard
            icon={MapPin}
            title="Address"
            detail="123 Education Lane, Knowledge City, Global"
          />
        </div>

        {/* Contact Form Column (Main Area) */}
        <Card className="lg:col-span-2 shadow-xl border-t-8 border-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">
              Send Us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we will get back to you within 24
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
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
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
                  required
                />
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
                  required
                />
              </div>

              {/* Status Message */}
              {status && (
                <p
                  className={`text-sm font-semibold ${
                    status.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
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
      </div>
    </div>
  );
}

// Reusable Info Card Component
const InfoCard = ({
  icon: Icon,
  title,
  detail,
}: {
  icon: React.ElementType;
  title: string;
  detail: string;
}) => (
  <Card className="p-6 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
    <div className="flex items-start space-x-4">
      <Icon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
      <div>
        <h4 className="text-lg font-semibold text-blue-800">{title}</h4>
        <p className="text-gray-600 text-sm">{detail}</p>
      </div>
    </div>
  </Card>
);
