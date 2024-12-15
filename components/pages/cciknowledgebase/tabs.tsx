import React from "react";
import TabsItem from "./tabsItem";
import TabContent from "./tabContent";

export default function Tabs() {
  return (
    <div className=" container mb-[80px] ">
      <div className="flex gap-5 my-10">
        <TabsItem />
        <TabsItem />
        <TabsItem />
        <TabsItem />
      </div>

      <TabContent />
    </div>
  );
}
