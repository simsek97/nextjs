import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteNav from '@cbs-sports/fantasy-client-shared-lib/build/cjs/components/SiteNav';

const props = {
  links: [
    {
      title: "Sports HQ",
      path: "/live/",
    },
    {
      title: "Fantasy",
      path: "/fantasy/",
      subNav: [
        {
          title: "Home",
          path: "/fantasy/",
        },
        {
          title: "Play Now",
          path: "/fantasy/games/",
        },
        {
          title: "Baseball",
          path: "/fantasy/baseball/",
        },
        {
          title: "Draft Kit",
          path: "/fantasy/",
        },
        {
          title: "Football",
          path: "/fantasy/",
        },
        {
          title: "Basketball",
          path: "/fantasy/",
        },
      ],
    },
    {
      title: "NFL",
      path: "/nfl/",
    },
    {
      title: "MLB",
      path: "/mlb/",
    },
    {
      title: "NBA",
      path: "/nba/",
    },
    {
      title: "Champions League",
      path: "/soccer/champions-league/",
    },
  ],
}

const Header: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteNav 
        links={props.links}
        logoUrl="https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/core/cbssports-dc-horizontal-logo.svg"
        hideMessageIcon="true"
        hideQuestionIcon="true"
        hideSearchIcon="true"
      />
    </BrowserRouter>
  );
};

export default Header;
