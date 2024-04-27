/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <div className="bg-[#F8F8F8] w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Ready to dominate the world of color? Join Now
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Enroll now and start your journey to becoming a color expert today! With Edukarma, you're not just learning;
            you're transforming your creative future.
          </p>
          <Button className="mt-8 bg-[#FFC700] text-black hover:bg-[#E6B800]">Purchase Now</Button>
        </div>
      </div>
    </div>
  )
}
