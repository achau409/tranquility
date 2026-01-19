"use client";

import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="max-h-[520px] bg-[rgba(53,53,53,0.6)] text-white flex flex-col items-center justify-center rounded-[10px] stroke-[rgba(255,255,255,0.3)] backdrop-blur-sm px-8 py-6">
      <h2 className="text-xl font-bold text-center mb-2">
        Sign Up & Get 10% Off with a FREE Quote Today
      </h2>
      <section id="contact" className="w-full">
        <form
          ref={formRef}
          className="flex flex-col space-y-4 w-full text-sm"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
            formRef.current?.reset();
          }}
        >
          <div className="w-full">
            <label className="block text-white mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border border-gray-300 bg-white text-black p-1.5 rounded"
            />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1">Email Address *</label>
            <input
              type="email"
              name="senderEmail"
              required
              className="w-full border border-gray-300 bg-white text-black p-1.5 rounded"
            />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 bg-white text-black p-1.5 rounded"
            />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1">What are you interested in? *</label>
            <div className="flex  flex-col space-y-2 mt-2">
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="radio"
                  name="interest"
                  value="Walk in Shower"
                  required
                  className="mr-2 text-sm"
                />
                Walk in Shower
              </label>
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="radio"
                  name="interest"
                  value="walk in tub"
                  required
                  className="mr-2 text-sm"
                />
                walk in tub
              </label>
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="radio"
                  name="interest"
                  value="Both / Not Sure"
                  required
                  className="mr-2 text-sm"
                />
                Both / Not Sure
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#569BFE] text-white py-3 px-6 rounded-full font-bold w-full md:w-[70%] mx-auto mt-4"
          >
            Submit
          </button>
        </form>
        <p className="text-white text-center mt-4 text-[12px]">
          100% Privacy Guaranteed.
        </p>
      </section>
    </div>
  );
}
