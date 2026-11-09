import React, { ReactNode } from "react";
import styled from "styled-components";
import cx from "clsx";

TabList.tabsRole = "TabList";

const TabListElement = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3px;
  padding-block: 5px;
`;

interface TabListProps {
  children: ReactNode;
  className?: string | string[] | object;
}

export function TabList({
  children,
  className,
  ...props
}: Readonly<TabListProps>) {
  return (
    <TabListElement
      {...props}
      className={cx("Layouts__TabList", "TabList", className)}
      role="tablist"
    >
      {children}
    </TabListElement>
  );
}
