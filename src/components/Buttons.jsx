'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function Buttons({ id }) {
  const router = useRouter();
  const { user } = useUser();

  const handleAddToCart = async (event) => {
    event.preventDefault();
    if (!user) {
      router.push('/sign-in');
      return;
    }
    try {
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId: id }),
      });

      router.push(`/post/cart/${user.username}`);
      if (!response.ok) {
        console.error('Failed to add to cart:', jobs.message);
        return;
      }
      console.log('Added to cart successfully:', jobs);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleApplyJob = async (event) => {
    event.preventDefault();
    if (!user) {
      router.push('/sign-in');
      return;
    }
    try {
      const response = await fetch('/api/job', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({ id }),
      });

      const jobs = await response.json();

      const emailSubject = `Application for ${jobs.title}`;
      const emailBody = `Respected ${jobs.username},%0D%0A%0D%0A
        I am interested in applying for the position of ${jobs.title}. Please find my details below:%0D%0A%0D%0A
        Name: ${user.fullName}%0D%0A
        Email: ${user.emailAddresses[0].emailAddress}%0D%0A%0D%0A
        Looking forward to your response.%0D%0A%0D%0A
        Best regards,%0D%0A
        ${user.fullName}`;

      window.location.href = `mailto:${jobs.userEmail}?subject=${emailSubject}&body=${emailBody}`;
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  return (
    <div className="flex align-center gap-8 mt-4 ml-8 mb-8">
      <button
        onClick={handleApplyJob}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Apply Job
      </button>
      <button
        onClick={handleAddToCart}
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
