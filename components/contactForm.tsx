"use client";
import Image from "next/image";
import React from "react";
import heading from "@/public/images/contact-heading-1.png";
import map from "@/public/images/worldmapp-1.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  enquiry: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex justify-between p-10">
      <div className="w-[49%]">
        <Image src={heading} alt="" className="mb-2" />
        <h3 className="text-[24px] text-[var(--secondary-color)] font-semibold mb-5">
          Contact Us
        </h3>
        <p className="text-[14px] leading-5">
          Need to get in touch with us? Fill out the form and one of our team
          will evaluate your request and get back to you at the earliest.
        </p>
        <Image src={map} alt="" className="mt-10" />
      </div>
      <div className="w-[49%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="firstName"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              First Name:
            </label>
            <input
              id="firstName"
              {...register("firstName")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="lastName"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              Last Name:
            </label>
            <input
              id="lastName"
              {...register("lastName")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="email"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              Email:
            </label>
            <input
              id="email"
              {...register("email")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="organization"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              Organization:
            </label>
            <input
              id="organization"
              {...register("organization")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="enquiry"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              Subject of Enquiry:
            </label>
            <input
              id="enquiry"
              {...register("enquiry")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="message"
              className="mb-1 text-[14px] text-[var(--secondary-color)] font-semibold"
            >
              Message to our Team:
            </label>
            <textarea
              rows={3}
              id="message"
              {...register("message")}
              className="py-[6px] px-3 text-[15px] border-2 border-[var(--primary-color)] rounded-md outline-none"
            />
          </div>

          <input
            type="submit"
            className="bg-[var(--primary-color)] text-white py-2 px-6 text-[14px] font-semibold rounded-md hover:bg-[var(--secondary-color)] transition-all duration-500 w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
}
