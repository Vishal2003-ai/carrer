// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactModel from '@/models/Contact';

// POST Handler for submitting the contact form
export async function POST(request: Request) {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    // 3. Create a new Contact Submission instance
    const newSubmission = new ContactModel({
      name,
      email,
      subject,
      message,
    });

    // 4. Save to MongoDB
    await newSubmission.save();

    // 5. Success Response
    return NextResponse.json({ success: true, message: 'Message successfully received and saved.' }, { status: 201 });

  } catch (error: any) {
    console.error('API Error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map((err: any) => err.message);
        return NextResponse.json({ success: false, message: messages.join(', ') }, { status: 400 });
    }

    // General Server Error
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}