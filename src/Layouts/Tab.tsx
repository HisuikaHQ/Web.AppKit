import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import cx from "clsx";
import { omitProps } from "../Common/Styling/omitProps";

const TabElement = styled.li.withConfig(omitProps("selected"))<{ selected: boolean }>`
  display: inline-block;
  padding: 0.5em;
  border-radius: 5px;
  background-color: ${({ selected }) =>
    selected ? "rgba(0, 0, 0, 0.1)" : "none"};
  outline: none;
  user-select: none;
  cursor: default;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

interface TabProps {
  children: ReactNode;
  className?: string | string[] | object;
  disabled?: boolean;
  focus?: boolean; // marked as private in PropTypes
  id: string; // marked as private in PropTypes
  selected?: boolean; // marked as private in PropTypes
  tabIndex?: string;
  tabRef?: (node: HTMLElement | null) => void; // marked as private in PropTypes
}

const TabComponent: FunctionComponent<TabProps> = ({
  children,
  className,
  disabled,
  focus = false,
  id,
  selected = false,
  tabIndex,
  tabRef,
  ...props
}) => {
  const nodeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selected && focus && nodeRef.current) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);

  return (
    <TabElement
      {...props}
      className={cx(
        "Layouts__Tab",
        "Tab",
        selected && "Layouts__Tab--selected",
        disabled && "Layouts__Tab--disabled",
        className,
      )}
      ref={(node) => {
        nodeRef.current = node;
        if (tabRef) tabRef(node);
      }}
      role="tab"
      id={`tab${id}`}
      selected={selected}
      aria-selected={selected ? "true" : "false"}
      aria-disabled={disabled ? "true" : "false"}
      aria-controls={`panel${id}`}
      tabIndex={tabIndex !== undefined ? Number(tabIndex) : selected ? 0 : -1}
      data-uitab
    >
      {children}
    </TabElement>
  );
};

export const Tab = Object.assign(TabComponent, { tabsRole: "Tab" });
