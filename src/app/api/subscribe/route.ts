import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, replace with a database (Supabase, Planetscale, etc.)
// or email service API (Mailchimp, ConvertKit, Resend, etc.)
const subscribers: Map<string, {
  email: string;
  categories: string[];
  subscribedAt: string;
}> = new Map();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, categories = ['all'] } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    if (subscribers.has(normalizedEmail)) {
      // Update categories if already subscribed
      const existing = subscribers.get(normalizedEmail)!;
      const updatedCategories = [...new Set([...existing.categories, ...categories])];
      subscribers.set(normalizedEmail, {
        ...existing,
        categories: updatedCategories,
      });

      return NextResponse.json({
        message: 'Your deal alert preferences have been updated!',
        categories: updatedCategories,
      });
    }

    // Add new subscriber
    const subscriber = {
      email: normalizedEmail,
      categories: categories,
      subscribedAt: new Date().toISOString(),
    };

    subscribers.set(normalizedEmail, subscriber);

    // Log for debugging (remove in production)
    console.log('New subscriber:', subscriber);
    console.log('Total subscribers:', subscribers.size);

    // In production, you would:
    // 1. Save to database
    // 2. Send to email service (Mailchimp, ConvertKit, etc.)
    // 3. Send welcome email

    // Example Mailchimp integration (uncomment and add your API key):
    /*
    const mailchimpResponse = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status: 'subscribed',
          tags: categories,
        }),
      }
    );
    */

    return NextResponse.json({
      message: 'Welcome! You\'ll receive deal alerts for the hottest discounts.',
      categories: categories,
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return subscriber count (for admin purposes)
  return NextResponse.json({
    count: subscribers.size,
    message: 'Subscriber count retrieved successfully',
  });
}
