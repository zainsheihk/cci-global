/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import TabsItem from "./tabsItem";
import TabContent from "./tabContent";
import NewsContainer from "./newsContainer";
import news1 from "@/public/images/Everest-Website-.png";
import news2 from "@/public/images/WhatsApp-Image-2024-09-03-at-12.27.31-PM.jpeg";
import news3 from "@/public/images/Strategic-Horizons-Mapping-The-CXM-Outsourcing-Landscape-for-English-Support-in-Africa.png";
import news4 from "@/public/images/4.png";
import news5 from "@/public/images/Screenshot-2024-05-10-223659.png";
import news6 from "@/public/images/ojot.png";
import thoughts1 from "@/public/images/African-Biz-MR.png";
import thoughts2 from "@/public/images/Mervyn.png";
import thoughts3 from "@/public/images/1235.png";
import thoughts4 from "@/public/images/8888.png";
import video1 from "@/public/images/cci-office.jpg";
import video2 from "@/public/images/durban.jpg";
import video3 from "@/public/images/south-africa.jpg";
import video4 from "@/public/images/633eace3eb4f8e79e36e9047_111-p-800.webp";
import video5 from "@/public/images/maxresdefault-63d7768d3d056.jpg";
import video6 from "@/public/images/accross-sites.jpg";
import video7 from "@/public/images/the-recognition.jpg";
import video8 from "@/public/images/dive-into-our-ld.jpg";
import video9 from "@/public/images/633eab8458c29d2c748b6301_6-p-800.webp";
import accolades1 from "@/public/images/bpesa-horizontal.png";
import accolades2 from "@/public/images/WhatsApp-Image-2024-10-20-at-10.34.05-1.jpeg";
import accolades3 from "@/public/images/CCI-2023-Excellence-Awards-300x158-1.jpg";
import accolades4 from "@/public/images/CCI-Stevie-Awards300x158.jpg";
import VideoContainer from "./videoContainer";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("News");
  const news = [
    {
      title:
        "CCI Global Named Major Contender in the 2024 Everest Peak Matrix CXM Report, Recognized Across APAC, EMEA, and the Americas",
      description:
        "CCI has been recognized in the 2024 Everest Peak Matrix CXM report for the third consecutive year, advancing from its previous position as an Aspirant to Major Contender. This achievement highlights CCI’s excellence in client service delivery across the APAC, EMEA and Americas, supported by its multilingual capabilities and innovative digital tools. With key partnerships and a strong focus on service and technology, CCI continues to lead in market impact.",
      image: news1,
    },
    {
      title:
        "Stevie® Awards IBA 2024: Thought Leader of the Year – Lizelle Strydom",
      description:
        "We’re excited to share that Lizelle Strydom Pottier has been honoured with the Stevie® Awards for Thought Leader of the Year. This prestigious recognition highlights her extraordinary leadership at CCI CareerBox Africa and her significant global impact. Lizelle’s innovative vision and dedication continue to inspire and drive meaningful change around the world.",
      image: news2,
    },
    {
      title:
        "Africa Set to Benefit From 1.5M Outsourced Customer Service Jobs by 2030, New Report Forecasts",
      description:
        "A new study by Everest Group and CCI Global reveals that Africa's BPO sector is poised to create 1-1.5 million jobs by 2030. Africa now rivals India and the Philippines in customer service outsourcing, thanks to its cultural affinity and talent availability. Key markets include South Africa, Kenya, and Egypt, with emerging CXM markets in Ghana, Rwanda, and Ethiopia. To learn more about the key benefits, risks, and comparisons of Africa as a CX delivery location, download the full report at the end of this article.",
      image: news3,
    },
    {
      title: "ELEVATE AFRICA CONFERENCE",
      description:
        "The Elevate Africa Conference, held at the CCI's new state-or-the-art, sustainable Contact Centre in Tatu City, Kenya, marked a milestone for Kenya's BPO sector. The event, attended by over 200+ distinguished guests, celebrated Kenya's potential with insightful dialogues, a grand celebration, and the inauguration of our 17th operational site.",
      image: news4,
    },

    {
      title: "CCI LAUNCHES US$ 50 MILLION CALL CENTRE AT TATU CITY",
      description:
        "Introducing CCI's newest site in Tatu City, marking a significant investment of US$50 million in Kenya's thriving BPO industry. This state-of-the-art facility, inaugurated by H.E. The President of Kenya, Dr. William S. Ruto, promises over 5,000 job opportunities, affirming Kenya's status as a premier hub for Business Process Outsourcing and CCI's commitment to community upliftment.  Explore the future of BPO with CCI Global, leading the charge towards innovation and excellence in customer service.",
      image: news5,
    },
    {
      title: "SUSTAINABILITY IS AT THE HEART OF CCI",
      description:
        "‘Our 'One Job, One Tree' Initiative embodies our commitment to sustainability, with each new hire symbolizing a promise to our planet. Discover how our efforts in South Africa and dedication to UN Sustainable Development Goals are making a real impact on the environment.’",
      image: news6,
    },
  ];

  const thoughts = [
    {
      title: "Africa’s Outsourcing Boom : Young Talent Fuels Industry Growth",
      description:
        " CCI Global, a major player, points to Africa's abundant, motivated talent pool as key to delivering high-quality customer interactions. Kenya, highlighted as a success story, sees significant investments like CCI Global's $50 million call center in Nairobi’s Tatu City, highlighting confidence in the country's BPO potential.",
      image: thoughts1,
    },
    {
      title: "How Africa Can Help Solve Cybersecurity Shortage",
      description:
        " Discover how African tech graduates, armed with advanced cybersecurity skills, can address the Western skills gap. Mervyn Pretorius of CCI Global highlights the unique challenges and expertise African IT professionals bring to the global cybersecurity landscape. By leveraging the talent, international companies can enhance their cyber defenses and create robust security solutions, all while addressing chronic unemployment in Africa. Learn about the opportunities and strategies for integrating African cybersecurity talent into the global workforce.",
      image: thoughts2,
    },
    {
      title:
        "Anusha Ramraj Unveils Her Expert Perspectives on the Pivotal Role of CFOs in the BPO Sector",
      description:
        " Anusha Ramraj, the dynamic CFO of CCI South Africa, has been instrumental in steering the company's global operations since 2020.  From her humble beginnings as a call centre agent to her ascent to CFO, Ramraj's journey is a testament to her leadership and the insights she brings to the table.",
      image: thoughts3,
    },
    {
      title:
        "Emotional Intelligence in Customer Service : The Key Differentiator",
      description:
        " Martin Roe, CEO of CCI Global, reveals how prioritizing emotional intelligence (EQ) is reshaping customer service as the ultimate edge against competitors. By tuning into real-time customer sentiment, businesses can exceed expectations.",
      image: thoughts4,
    },
  ];

  const videos = [
    {
      title: "CCI Global Sites",
      image: video1,
    },
    {
      title: "A NEW SITE IN SOUTH AFRICA, WITHIN COSMOPOLITAN CAPE TOWN",
      image: video2,
    },
    {
      title: "Take A Tour of Our Durban Facility",
      image: video3,
    },
    {
      title: "Take A Tour Of Johannesburg",
      image: video4,
    },
    {
      title: "Take A Tour of Our Kenya Operations",
      image: video5,
    },
    {
      title: "Learn More About Our I.T Infrastructure",
      image: video6,
    },
    {
      title: "CCI Awards & Recognition",
      image: video7,
    },
    {
      title: "Hear More About The Recognition We Give To Our Teams",
      image: video8,
    },
    {
      title: "Dive Into Our L&D Operations",
      image: video9,
    },
    {
      title: "Our Development Programmes",
      image: video9,
    },
  ];
  const accolades = [
    {
      title:
        "CCI and CareerBox Celebrate Big Wins at the 2024 BPESA Alchemy Awards!",
      description:
        "<p>An unforgettable night at the BPESA GBS Alchemy Awards 2024! Team CCI and CareerBox Africa proudly took home multiple prestigious awards, a true testament to the dedication, passion, and talent of our exceptional team.</p><p>&nbsp;</p><p>CCI received the Top Offshore Campaign Award, the Top Leadership Development Programme Award, and the Top National Inclusive Hiring Award, with individual recognitions including Shalen Rampersad for the Top Workforce Planning Professional Award, Tevashan Reddy as the 2nd Runner Up for the Top GBS Analyst Award, and Junaid Mohamed as the 2nd Runner Up for the Top GBS Support Professional Award. Meanwhile, CareerBox Africa celebrated winning the Top Impact Sourcing Partner Award and saw Luyanda Mbeje named the 1st Runner Up for the Top GBS Operational Manager Award.</p><p>&nbsp;</p><p>These accolades showcase the values and commitment that drive us forward. Each award reflects the collective effort of individuals who continuously go above and beyond, making a difference every day. Congratulations to everyone who played a part in this remarkable achievement—together, we’ve raised the bar, and we’re excited to reach even greater heights in the future!</p>",
      image: accolades1,
    },
    {
      title: "Celebrating Our Success at the CapeBPO Awards!",
      description:
        "<p>A huge congratulations to our incredible CCI South Africa and CareerBox Africa teams for their outstanding performance at the prestigious CapeBPO Awards! We’re thrilled to announce that we took home awards in five major categories, a testament to our dedication and hard work.</p><p>&nbsp;</p><p>🏆 Top Offshore Campaign – CCI South Africa<br> 🏆 Top Non-Technical Innovation – CCI South Africa<br> 🏆 Top BPO Analyst – Tevashan Reddy – CCI South Africa<br> 🏆 Top Impact Sourcing Partner – CareerBox Africa<br> 🏆 High Roller Award – CareerBox Africa</p><p>&nbsp;</p><p>These accolades highlight our team’s exceptional talent and innovative spirit, reinforcing our position as Africa’s leading BPO provider. We are immensely proud of our achievements and look forward to many more successes in the future.</p><p>Here’s to our remarkable journey and the exciting road ahead!</p>",
      image: accolades2,
    },
    {
      title:
        "BI Group Announces CCI As Winner 2023 Excellence in Customer Service Awards",
      description:
        "CCI Global is recognized as ‘Outsource Partner Of The Year’ at this year’s Business Intelligence Group awards. The awards acknowledge those who are helping companies better communicate with their customers to provide a differentiated level of customer service. CCI Global were awarded for achievements in providing unique and purpose driven service excellence across our portfolio. The awards add continued confidence in our ability to provide our International client base with top tier customer service support from Africa.",
      image: accolades3,
    },
    {
      title:
        "Recognized as The Customer Service Outsourcing Provider Of The Year in 2023",
      description:
        "CCI has been named a winner at the 17th Annual Stevie Awards for Sales & Customer Service. The 2023 competition received more than 2,300 nominations from 49 nations and territories. Entries were considered in categories for customer service and contact center achievements, sales and business development, and categories recognized new products and services, solution providers, and thought leadership initiatives. CCI showcased expertise across our E-Commerce campaigns where we have implemented efficiencies that significantly improved customer satisfaction scores for our clients.",
      image: accolades4,
    },
  ];
  const tabs = [
    {
      title: "News",
      content: <NewsContainer news={news} />,
    },
    {
      title: "Thought Leadership",
      content: <NewsContainer news={thoughts} />,
    },
    {
      title: "Video Library",
      content: <VideoContainer videos={videos} />,
    },
    {
      title: "Industry Accolades",

      content: <NewsContainer news={accolades} />,
    },
  ];
  const handleActiveTab = (ele: string) => setActiveTab(ele);
  const activeTabContent = tabs.find((ele) => ele.title === activeTab);

  return (
    <div className=" container mb-[80px] ">
      <div className="flex gap-5 my-10">
        {tabs.map((ele: any, index: number) => (
          <TabsItem
            {...ele}
            isActive={activeTab === ele.title}
            onHandleTab={handleActiveTab}
            key={index}
          />
        ))}
      </div>
      <TabContent content={activeTabContent?.content} />
    </div>
  );
}
