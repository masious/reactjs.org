/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import {Link} from 'gatsby';
import React from 'react';
import {colors, media} from 'theme';

const ArrowSvg = ({cssProps = {}}) => (
  <svg
    css={cssProps}
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d={`
      M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z
      `}
      fill="currentColor"
    />
  </svg>
);

const ButtonLink = ({children, type, ...rest}) => {
  let typeStyle;
  switch (type) {
    case 'primary':
      typeStyle = primaryStyle;
      break;
    case 'secondary':
      typeStyle = secondaryStyle;
      break;
  }

  return (
    <Link {...rest} css={[style, typeStyle]}>
      {children}
      {type === 'secondary' && <ArrowSvg cssProps={{marginRight: 10}} />}
    </Link>
  );
};

const style = {
  display: 'inline-flex',
  valign: 'center',
  fontSize: 16,

  [media.greaterThan('xlarge')]: {
    fontSize: 20,
  },
};

const primaryStyle = {
  backgroundColor: colors.brand,
  color: colors.black,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out',

  [media.greaterThan('xlarge')]: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  ':hover': {
    backgroundColor: colors.white,
  },
};

const secondaryStyle = {
  color: colors.brand,
  transition: 'color 0.2s ease-out',

  ':hover': {
    color: colors.white,
  },
};

export default ButtonLink;
