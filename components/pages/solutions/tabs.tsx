import React from "react";
import TabsItem from "./tabsItem";
import TabContent from "./tabContent";

export default function Tabs() {
  return (
    <div className="py-[80px] container ">
      <div className="flex gap-5">
        <TabsItem />
        <TabsItem />
        <TabsItem />
        <TabsItem />
      </div>

      <TabContent />
    </div>
  );
}
