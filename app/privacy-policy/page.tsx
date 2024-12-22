import Image from "next/image";
import React from "react";
import privacyImage from "@/public/images/Privacy-Image-min-scaled.jpg";
import Heading from "@/components/heading";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="bg-[var(--secondary-color)]  py-[80px] pt-[150px]">
        <div className="container">
          <h2 className=" text-white font-semibold text-[20px]">
            AS PART OF LEGAL REQUIREMENT FOR OUR SOUTH AFRICA BUSINESS, CCI
            GLOBAL PRESENT THE PRIVACY STATEMENT THAT ENCOMPASSES THE PRACTICES
            OF OUR BUSINESS WITHIN AFRICA.
          </h2>
        </div>
      </section>
      <section>
        <div className="bg-[#f2f2f2] flex justify-between py-[80px]">
          <div className="container flex gap-20">
            <div className="w-[40%]">
              <Image src={privacyImage} alt="" />
            </div>
            <div className="w-[50%]">
              <Heading
                text="PRIVACY"
                className="text-[var(--secondary-color)]"
              />
              <p className="text-[var(--secondary-color)] leading-6 mb-5">
                CCI South Africa (Pty) Ltd (CCI South Africa) (“We”) respect and
                are committed to protecting and respecting your privacy wherever
                our customers and their ultimate customers do business.
              </p>
              <p className="text-[var(--secondary-color)] leading-6 mb-5">
                As a South African Business Processing Outsourcing (BPO)
                company, we have customer compliment spanning multiple
                geographies including South Africa, Australia, New Zealand, UK,
                the USA and other countries. We also operate our own call center
                operation business in South Africa.
              </p>
              <p className="text-[var(--secondary-color)] leading-6 mb-5">
                We are committed to complying with the applicable data privacy
                and security requirements in the countries in which we, our
                customers and end customers operate. Because of the differences
                among these jurisdictions, we have adopted a policy, which has a
                set of core values, policies and procedures intended to achieve
                compliance.
              </p>
              <p className="text-[var(--secondary-color)] leading-6 mb-5">
                This policy sets out the basis on which any personal data we
                collect or is provided to us or will be processed by us in
                respect of individuals residing outside of South Africa. Please
                read the following carefully to understand our views and
                practices regarding your personal data and how we will treat it.
              </p>
              <p className="text-[var(--secondary-color)] leading-6 mb-5">
                Where we process personal data in relation to persons residing
                in South Africa, this will be processed in accordance with the
                Protection of Personal Information Act.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#3c3c3c]">
        <div className="container py-[80px]">
          <h2 className="font-semibold text-[24px] text-white mb-5">
            INFORMATION WE MAY COLLECT FROM YOU
          </h2>
          <p className=" text-white font-semibold mb-5">
            We may collect and process the data we receive from you, our
            customers, end customers and data received from data providers, in
            accordance with these terms.
          </p>
          <p className="text-white font-semibold mb-5">
            We may receive information about you by your filling in forms or by
            corresponding with us by phone, e-mail or otherwise. This includes
            information you provide to third party customers where we may act as
            subcontractor both within South Africa and in jurisdictions other
            than South Africa including when you register to use their sites,
            subscribe to their service, place orders, participate in web chats,
            enter competitions, promotions or surveys and when we provide call
            centre services. The information we receive may include your name,
            address, e-mail address and phone number, financial, credit and
            other information which is pertinent to the product or service of
            customers or end customers.
          </p>
          <p className="text-white font-semibold">
            We will receive information about you from our interaction with you.
            We may combine this information with information you give to us or
            our customers or end customers and information we and they collect
            about you. We may use this information and the combined information
            for the purposes set out above (depending on the types of
            information we receive).
          </p>
        </div>
      </section>
      <section>
        <div className="bg-[#f2f2f2] flex justify-between py-[80px]">
          <div className="container">
            <p>USES MADE OF THE INFORMATION</p>
            <p>We use information held about you in the following ways:</p>
            <ul>
              <li>
                to carry out our obligations arising from any contracts entered
                into between you and an end customer or our customers and to
                provide you with the information, products and services that you
                request from them;
              </li>
              <li>
                to provide you with information about other goods and services
                they may offer or which they feel may interest you;
              </li>
              <li>
                to provide your details to our customers and any end customers
                for whom we are providing subcontracted services;
              </li>
              <li>
                to provide you, or permit our customers or end customers or
                selected third parties to provide you with information about
                goods or services we or they feel may be of interest to you.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>DISCLOSURE OF YOUR INFORMATION</p>
            <p>
              We may share your information with selected third parties
              including business partners, suppliers, customers, end customers
              and other sub-contractors for the performance of any contract we
              enter into with them or you.
            </p>
            <p>
              We may share your personal information with any member of our
              group including our holding and subsidiary companies.
            </p>
            <p>
              We may also disclose your personal information to third parties in
              the event that we sell or buy any business or assets, in which
              case we may disclose your personal data to the prospective seller
              or buyer of such business or assets, or if our group companies or
              substantially all of their assets are acquired by a third party,
              in which case personal data will be one of the transferred assets.
            </p>
            <p>
              We may also share your personal data where we are under a duty to
              disclose or share your personal data in order to comply with any
              legal obligation, or in order to enforce or comply with the terms
              and conditions of agreements which we have entered into; or to
              protect the rights, property, or safety of CCI South Africa, our
              customers, end customers or others. This may include exchanging
              information with other companies and organisations for the
              purposes of fraud protection and credit risk reduction.
            </p>
            <p>&nbsp;</p>
            <p>WHERE WE STORE YOUR PERSONAL DATA</p>
            <p>
              The data that we collect from you may be transferred to, and
              stored at, a destination outside South Africa. It may also be
              processed outside South Africa by our customers and end customers
              including in Australia, New Zealand, UK and the USA. You agree to
              this transfer, storing or processing. We will take all steps
              reasonably necessary to ensure that your data is treated securely
              and in accordance with this privacy policy, and in situations
              where we are acting as a subcontractor by processing your data on
              a customer’s or end customer’s behalf, in accordance with their
              requirements.
            </p>
            <p>&nbsp;</p>
            <p>YOUR RIGHTS</p>
            <p>
              You have the right to ask us not to process your personal data for
              marketing purposes.
            </p>
            <p>
              You have the right to ask us to update, correct or delete your
              personal information.
            </p>
            <p>
              You have the right to request us to confirm if we hold personal
              information about you.
            </p>
            <p>&nbsp;</p>
            <p>INFORMATION SECURITY</p>
            <p>
              We continuously establish and maintain appropriate, reasonable
              technical and organizational measures by taking appropriate,
              reasonable technical and organizational measures to safeguard and
              prevent information under our care from loss of, damage to or
              unauthorized access, processing, and destruction of personal
              information.
            </p>
            <p>&nbsp;</p>
            <p>CHANGES TO OUR PRIVACY POLICY</p>
            <p>
              Any changes we may make to our Privacy Policy in the future will
              be posted on our website. Please check back frequently to see any
              updates or changes to our privacy policy.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#4d9b9b] py-[80px]">
        <div className="container flex justify-between">
          <div className="w-[48%]">
            <h4 className="text-white font-semibold text-[24px] mb-3 ">
              CONTACT
            </h4>
            <p className="text-white font-semibold ">
              To utilise any of your data subject rights, questions, comments,
              and requests regarding this Privacy Policy are welcomed and should
              be addressed to privacy@cci-sa.co.za
            </p>
          </div>
          <div className="w-[48%]">
            <h4 className="text-white font-semibold text-[24px] mb-3 ">
              Documents
            </h4>

            <p className="text-white font-semibold ">
              To download Our PAIA Manual <Link href={""}> --Click Here</Link>
            </p>
            <p className="text-white font-semibold ">
              To download Our PAIA Form 1 <Link href={""}> --Click Here</Link>
            </p>
            <p className="text-white font-semibold ">
              To download Our PAIA Form 2 <Link href={""}> --Click Here</Link>
            </p>
            <p className="text-white font-semibold ">
              To download Our PAIA Form 3 <Link href={""}> --Click Here</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
