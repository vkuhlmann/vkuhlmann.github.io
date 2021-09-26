/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, memo} from 'react';
import clsx from 'clsx';
import {
  isSamePath,
  usePrevious,
  Collapsible,
  useCollapsible,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/IconExternalLink';
import styles from './styles.module.css';

const isActiveSidebarItem = (item, activePath) => {
  if (item.type === 'link') {
    return isSamePath(item.href, activePath);
  }

  if (item.type === 'category') {
    return item.items.some((subItem) =>
      isActiveSidebarItem(subItem, activePath),
    );
  }

  return false;
}; // Optimize sidebar at each "level"
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation

export const DocSidebarItems = memo(function DocSidebarItems({
  items,
  ...props
}) {
  return (
    <>
      {items.map((item, index) => (
        <DocSidebarItem
          key={index} // sidebar is static, the index does not change
          item={item}
          {...props}
        />
      ))}
    </>
  );
});
export default function DocSidebarItem({item, ...props}) {
  switch (item.type) {
    case 'category':
      if (item.items.length === 0) {
        return null;
      }

      return <DocSidebarItemCategory item={item} {...props} />;

    case 'link':
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
} // If we navigate to a category and it becomes active, it should automatically expand itself

function useAutoExpandActiveCategory({isActive, collapsed, setCollapsed}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;

    if (justBecameActive && collapsed) {
      setCollapsed(false);
    }
  }, [isActive, wasActive, collapsed]);
}

function DocSidebarItemCategory({item, onItemClick, activePath, ...props}) {
  let {items, label, collapsible, entrance} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const {collapsed, setCollapsed, toggleCollapsed} = useCollapsible({
    // active categories are always initialized as expanded
    // the default (item.collapsed) is only used for non-active categories
    initialState: () => {
      if (!collapsible) {
        return false;
      }

      return isActive ? false : item.collapsed;
    },
  });
  let entranceExtract = label.match(/^(?<label>.*?)~(?<entrance>.*)$/);
  if (entranceExtract != null) {
    label = entranceExtract.groups.label;
    entrance = entranceExtract.groups.entrance;
  }
  entrance = (entranceExtract != null) && items[0];

  useAutoExpandActiveCategory({
    isActive,
    collapsed,
    setCollapsed,
  });

  // console.log(`For ${label}, entrance is`);
  // console.log(entrance);
  let Clickable = React.a;
  if (entrance != null) {
    Clickable = Link;
  }

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Clickable
        className={clsx('menu__link', {
          'menu__link--sublist': collapsible,
          'menu__link--active': collapsible && isActive,
          [styles.menuLinkText]: !collapsible,
        })}
        onClick={
          collapsible && !(collapsed && entrance && !isActive)
            ? (e) => {
                e.preventDefault();
                toggleCollapsed();
              }
            : (entrance && ((e) => {

            })) || undefined
        }
        {...(entrance && {
          to: entrance.href,
          ...{...(isInternalUrl(entrance.href) && {
          isNavLink: true,
          exact: true,
          //onClick: onItemClick,
        })}
        })}
        href={collapsible ? '#' : undefined}
        {...props}>
        {label}
      </Clickable>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
        />
      </Collapsible>
    </li>
  );
}

function DocSidebarItemLink({item, onItemClick, activePath, ...props}) {
  const {href, label} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  return (
    <li className="menu__list-item" key={label}>
      <Link
        className={clsx('menu__link', {
          'menu__link--active': isActive,
        })}
        to={href}
        {...(isInternalUrl(href) && {
          isNavLink: true,
          exact: true,
          onClick: onItemClick,
        })}
        {...props}>
        {isInternalUrl(href) ? (
          label
        ) : (
          <span>
            {label}
            <IconExternalLink />
          </span>
        )}
      </Link>
    </li>
  );
}
