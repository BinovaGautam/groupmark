import { useState } from "react";

const useTabs = (initialTab: string) => {
  const [tab, setTab] = useState(initialTab);

  const handleTabChange = (tab: string) => {
    setTab(tab);
  }

  return {
    tab,
    handleTabChange,
  }
}


export default useTabs