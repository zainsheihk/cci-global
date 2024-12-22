/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import GalleryCard from "./galleryCard";
import card1 from "@/public/images/Retail-E-Commerce-CCI-Industry-min.jpg";
import card2 from "@/public/images/healthcare.jpg";
import card3 from "@/public/images/631874765f30c8382f705152_Frame-99-1-1.jpg";
import card4 from "@/public/images/6318746e9f6923a7bd3cb070_Frame-102-1.jpg";
import card5 from "@/public/images/6318748e55a2976c548a8603_Frame-99-2.jpg";
import card6 from "@/public/images/Financial-Services.jpg";
import card7 from "@/public/images/insurence.jpg";
import card8 from "@/public/images/Travel.jpg";

export default function Gallery() {
  const cards = [
    {
      title: "Retail & E-Commerce",
      description:
        "CCI has developed digital services and expertise to migrate your business processes to a dynamically changing consumer shopping landscape. Our specialized fast commerce agents support customers & shoppers from some of the world’s most recognizable retail brands. We have a proven history of Award-winning delivery for food, clothing, household, travel & leisure via voice, chat and messenger channels.",
      image: card1,
    },
    {
      title: "Healthcare",
      description:
        "CCI help our healthcare clients drive growth and manage their revenue cycle to deliver added value to the patient network. We help providers, government agencies, insurance companies and payers with customer relations, complex case management, administrative processes, sales, marketing and other wider services. Our specialized healthcare agents support customers with the required empathy and urgency to support such a vital service.",
      image: card2,
    },
    {
      title: "Leisure, Travel & Tourism",
      description:
        "As the global industry shifts to a more adaptive, resilient and efficiency focused operating model, we optimize your service delivery to a customer centric approach. We offer our services across the guest experience, digital services, sales management, and operational outsourced functionality. Our award winning agents support global hotels, holiday rentals, cruise, and airline brands. 24/7 coverage with a flexible approach to staffing, delivers the support you need during peak seasons.",
      image: card3,
    },
    {
      title: "Telecommunications",
      description:
        "Digital connectivity continues to be a focus for the global economy with dynamically shifting technology paradigms. Our first client was UK Telecom & today we support global telecom clients. Our experience covers every aspect of the customer life cycle from pre-sales all the way through to retentions and win-back via voice, chat, and omni-channels. Our transformation and call propensity reduction programs have saved millions of unnecessary customer interactions.",
      image: card4,
    },
    {
      title: "Information Technology & Services",
      description:
        "As global industries shift to a digitized operating model, CCI utilize their technology agnostic experience as well as people centric approach to merge the future demands of the industry with the human element of personalized customer services. We develop solutions that are customizable and flexible to the demands of all the industries. We serve these demands through flexible agent training and targeted product understanding for a customer centric approach to service delivery.",
      image: card5,
    },
    {
      title: "Financial Services",
      description:
        "Customer demands and constantly shifting regulatory requirements create a competitive landscape. Outsourcing continues to be a driving force and CCI focuses on supporting bank operations from back-office support to sales and roadmap development. 15+ years’ experience supporting globally prestigious brands with award winning agents. We provide 24/7 support for our clients in Australia, United Sates, United Kingdom and domestically in Africa.",
      image: card6,
    },
    {
      title: "Insurance",
      description:
        "CCI’s deep industry knowledge and analytical solutions, integrate with data and quality programs to help insurers scale faster and respond to changing market conditions. Agents supporting some of the oldest and most respected global insurance brands covering house, auto, healthcare & travel. Supporting both Business to Business and Business to Consumer channels, our agents provide award winning support 24/7 for lead generation, sales, FNOL through to complex claims management.",
      image: card7,
    },
    {
      title: "Airlines",
      description:
        "CCI are supporting some of the world’s largest airlines. We provide voice, chat & messenger support for travelers with new bookings, changes, cancellations, complaint management & loyalty program queries. Accent neutrality and enhanced English comprehension skills delver the very best CSAT and NPS scores. Flexible workforce solutions enable us to support our clients through IROPs and other seasonal changes to customer contact volume changes.",
      image: card8,
    },
  ];
  return (
    <section className="container py-[80px] pb-[160px] ">
      <div className={`flex flex-wrap justify-between gap-y-5`}>
        {cards.map((ele: any, index: number) => (
          <GalleryCard {...ele} key={index} isOdd={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
