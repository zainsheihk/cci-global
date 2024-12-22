/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import TabsItem from "./tabsItem";
import TabContent from "./tabContent";
import image from "@/public/images/Business-Growth.jpg";
import image2 from "@/public/images/6317540345a41e3cb7e869e1_Frame-90.png";
import image3 from "@/public/images/63175402dabe2322b5ba26eb_Frame-90-2.webp";
import image4 from "@/public/images/63175402ade8ac24c8be70b2_Frame-90-3.webp";
import CustomerEngagement from "@/public/images/icons/customer-engagement";
import DigitalMarketing from "@/public/images/icons/digital-marketing";
import LoyaltyProgram from "@/public/images/icons/loyalty-program";
import Renewal from "@/public/images/icons/renewal";
import ChatSupport from "@/public/images/icons/chat-support";
import ContentModernation from "@/public/images/icons/content-modernation";
import ComplianceServices from "@/public/images/icons/compliance-services";
import DigitalDemand from "@/public/images/icons/digital-demand";
import SocialMediaCommunity from "@/public/images/icons/socialmedia-community";
import ProductSupport from "@/public/images/icons/product-support";
import TechnicalSupport from "@/public/images/icons/technical-support";
import WarrantyClaim from "@/public/images/icons/warranty-claim";
import BackOffice from "@/public/images/icons/back-office";
import DataValidation from "@/public/images/icons/data-validation";
import DataEntryProcessing from "@/public/images/icons/data-entry-procssing";
import FinancialAccounting from "@/public/images/icons/financial-accounting";
import InsuranceProcessing from "@/public/images/icons/insurance-processing";
import TranslationLocalization from "@/public/images/icons/transaltion-localization";
import FeedbackAnalysis from "@/public/images/icons/feedback-analysis";
import SelfService from "@/public/images/icons/self-service";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Business Growth");
  const tabs = [
    {
      title: "Business Growth",
      image: image,
      content: {
        description:
          "CCI assist clients in growing their business by applying a customer focused approach to engagement. With a focus on the human experience, we create the interactions that directly impact how your customers feel and perceive your brand. CCI’s first language communication skills, empathetic interactions and informed agents directly impact your bottom line and create new revenue opportunities across your products and services.",
        solutions: [
          {
            title: "Customer Acquisition & Engagement",
            description:
              "CCI support your businesses to grow and expand across your services. We help in developing sales strategies that directly impact your bottom line with agents working to grow your customer base and interact in a positive manner to maximize your brand value.",
            icon: <CustomerEngagement />,
          },
          {
            title: "Digital Demand Generation",
            description:
              "CCI provide our clients the ability to create new opportunities for sales and loyalty amongst their client base through digitally generated sector specific insights and tailored agent training.",
            icon: <DigitalDemand />,
          },
          {
            title: "Digital Marketing & Inbound Sales",
            description:
              "Managing your ad revenue, new sales opportunities and marketing new products or services is a standard service offering to all our clients across communication channels and your digital landscape.",
            icon: <DigitalMarketing />,
          },
          {
            title: "Loyalty Program Management",
            description:
              "We manage your loyalty programs and engage with your customers by understanding your customer base. We then integrate our service interactions with your program to deliver a CX, service specific interaction model. We fortify the engagements through data generated strategies and tactics.",
            icon: <LoyaltyProgram />,
          },
          {
            title: "Renewals and cancellations",
            description:
              "Subscription based services or multi-tiered revenue programs; we manage your financial processes as it relates to your service lines. We seamlessly take on your standard tasks allowing you to focus on enhancing your core competencies.",
            icon: <Renewal />,
          },
        ],
      },
    },

    {
      title: "Management",
      image: image2,
      content: {
        description:
          "CCI manage your standard business processes in the most extraordinary manner applying cross industry best practices to enhance service and output. We help our clients manage noncritical functions in the value chain by offering efficiency and cost benefits",
        solutions: [
          {
            title: "Chat & Email Support",
            description:
              "CCI provide the technology platforms, training, and delivery methodology to manage your channels and interact with customers with an experiential mindset.",
            icon: <ChatSupport />,
          },
          {
            title: "Content Moderation, Labelling & Curation",
            description:
              "CCI audit, review, and govern your platforms to assess content against your policies to moderate, label and curate media. Our trained team develop governance structures which then also tag and label new media to then become part of your content ecosystems adding the additional benefit of curating content to your requirements.",
            icon: <ContentModernation />,
          },
          {
            title: "Compliance As a Service",
            description:
              "Offering trained professionals who understand your regulatory framework to seamlessly integrate into your operating model. This ensures your work is monitored, measured, assessed, and reported on to meet the demands of your local regulatory market.",
            icon: <ComplianceServices />,
          },
          {
            title: "Customer Services",
            description:
              "Helping businesses develop centralized contact center operations that deliver solution-oriented services. Solutions that tackle the whole breadth of services from customer issues, complaints, requests, and queries.",
            icon: <DigitalDemand />,
          },
          {
            title: "Social Media Community Management",
            description:
              "Across regions, countries, cities and areas, your divisions, product lines and brands require multiple social channel management. We provide you teams who will engage with your communities and generate and manage content to ensure that your customers feel engaged, heard, and connected to your brand.",
            icon: <SocialMediaCommunity />,
          },
          {
            title: "Product support",
            description:
              "Information services or coordination between your operations, we offer support functionality for product-based organizations who need support in managing multi region operations with the multitude of product specific challenges.",
            icon: <ProductSupport />,
          },
          {
            title: "Technical Support",
            description:
              "Challenges, snags and complaints all need to be tackled with a solution-oriented approach developed to your operations, products, and services. We provide the capability to manage these facets through rigorous training and skill development across all your functional elements that then creates customer delight and loyalty.",
            icon: <TechnicalSupport />,
          },
          {
            title: "Warranty claims management",
            description:
              "Rigorously trained agents that manage entry of online claims, uploading claims from service systems, verification of claims, review and process of comprehensive warranty business rules with context-based decision to ensure your claims management process is as efficient as possible.",
            icon: <WarrantyClaim />,
          },
        ],
      },
    },
    {
      title: "Processing",
      image: image3,
      content: {
        description:
          "CCI has the people, scalability, and flexibility to manage high volume tasks that directly feed into your organizational activity systems. We become part of your value chain to then help you focus on efficiency.",
        solutions: [
          {
            title: "Back Office Support",
            description:
              "Streamlining the customer experience by improving the processes that support your core operations, ranging from accounting, content creation, administrative tasks and other support functions that may not have direct customer interaction but are vital to your business.",
            icon: <BackOffice />,
          },
          {
            title: "Data Entry, Processing & Management",
            description:
              "CCI support A.I organizations in their development process through support functionality in data pre-processing, cleaning, structuring, and managing large data sets which are then sent to technology organizations to feed into their machine learning models.",
            icon: <DataEntryProcessing />,
          },
          {
            title: "Data Validation",
            description:
              "We support companies in validating data and bringing quality assurance services to their mass data generation operations to make sure transactions and entries are detailed and accurate.",
            icon: <DataValidation />,
          },
          {
            title: "Finance and Accounting",
            description:
              "Helping businesses develop centralized contact center operations that deliver solution-oriented services which tackle customer challenges, complaints, requests, and queries.",
            icon: <FinancialAccounting />,
          },
          {
            title: "Insurance Processing",
            description:
              "From claims management, information gathering, validation of policy and coordination with your financial teams, we offer the full suite of insurance sector outsourced services.",
            icon: <InsuranceProcessing />,
          },
          {
            title: "Translation and localization",
            description:
              "With a diverse set of talent across Africa, with multi-lingual capabilities and cultural diversity, we offer our clients a full suite of local knowledge services that we tailor to your market requirements.",
            icon: <TranslationLocalization />,
          },
        ],
      },
    },
    {
      title: "Technical Expertise",
      image: image4,
      content: {
        description:
          "CCI use in-house operational expertise to analyze your service interactions across channels and value chain to then recommend and implement transformative changes through best-in-class approaches.",
        solutions: [
          {
            title: "Feedback Analysis, Calls & Issues",
            description:
              "Survey data, high call volume operations and improvements across the current BPO model provide our clients with the value of our multi-industry experience for operations that seek to improve, transition and scale.",
            icon: <FeedbackAnalysis />,
          },
          {
            title: "Omnichannel consulting",
            description:
              "We provide customers the opportunity to maximize on their operations by bringing our expert tenured team members to review, assess and recommend optimizations on current business practices. We program manage the changes across your digital channels and operations future proofing your procedures.",
            icon: <FinancialAccounting />,
          },
          {
            title: "Self-service portals",
            description:
              "Our operational and technology teams bring custom build experience that can allow your e-commerce or retail business to provide new avenues for workforce management by automating your service processes.",
            icon: <SelfService />,
          },
        ],
      },
    },
  ];
  const handleActiveTab = (ele: string) => setActiveTab(ele);
  const activeTabContent = tabs.find((ele) => ele.title === activeTab);
  return (
    <div className="py-[80px] container ">
      <div className="flex gap-5">
        {tabs.map((ele: any, index: number) => (
          <TabsItem
            {...ele}
            isActive={activeTab === ele.title}
            onHandleTab={handleActiveTab}
            key={index}
          />
        ))}
      </div>

      <TabContent
        description={activeTabContent?.content?.description}
        solutions={activeTabContent?.content?.solutions}
      />
    </div>
  );
}
