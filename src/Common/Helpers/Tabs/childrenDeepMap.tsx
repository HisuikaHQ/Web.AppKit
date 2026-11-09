import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from "react";
import { isTab, isTabList, isTabPanel } from "./elementTypes";


function isTabChild(child: ReactElement) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

export function deepMap(
  children: ReactNode,
  callback: (child: ReactElement) => ReactElement
): ReactNode[] {
  return Children.map(children, (child): ReactNode => {
    // null happens when conditionally rendering TabPanel/Tab, see https://github.com/reactjs/react-tabs/issues/37
    if (!isValidElement<{ children?: ReactNode }>(child)) return child;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props.children && typeof child.props.children === "object") {
      return cloneElement(child, {
        children: deepMap(child.props.children, callback),
      });
    }

    return child;
  }) ?? [];
}

export function deepForEach(children: ReactNode, callback: (child: ReactElement) => void) {
  Children.forEach(children, (child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props.children && typeof child.props.children === "object") {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}
