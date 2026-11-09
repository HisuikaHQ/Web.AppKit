import { isValidElement } from "react";

function makeTypeChecker(tabsRole: string) {
  return (element: unknown): boolean =>
    isValidElement(element) &&
    typeof element.type !== "string" &&
    (element.type as { tabsRole?: string }).tabsRole === tabsRole;
}

export const isTab = makeTypeChecker("Tab");
export const isTabList = makeTypeChecker("TabList");
export const isTabPanel = makeTypeChecker("TabPanel");
