import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteNav from '@cbs-sports/fantasy-client-shared-lib/build/cjs/components/SiteNav';
import { IMessagesApi } from '@cbs-sports/fantasy-client-shared-lib/build/cjs/components/SiteNav/MessageCenter';

const SpoeData = [
  {
    line1: "Los Diablos",
    line2: "Doral NBA",
    dateFormat: "yyyyMMddHHmmss",
    cacheDate: "20190204170428",
    custId: 35964423,
    url: "10809063326.football.cbssports.com",
    icon: null,
    lineOne: "Los Diablos",
    lineTwo: "Doral NBA",
    visible: 1,
    dateCreated: "20180906000000",
    dateModified: "20180906000000",
    masterProductId: 25806,
    masterProduct: {
      id: 25806,
      vendorId: 1,
      productLine: 2,
      name: "2018, CBSSports.com Fantasy Football Single Free",
      vendorName: "CBSSports,.com",
      nameAbbreviation: "2018, SPLN FB FREE",
      typeId: 4,
      typeName: "SINGLE",
      year: 2018,
      appId: 25806,
      sportId: 1,
      leagueId: 59,
      serviceLevel: 1,
      serviceLevelName: "BASE",
      sport: {
        dateFormat: "MM-dd-yyyy HH:mm:ss.SSSS",
        cacheDate: "01-28-2019 14:11:52.0416",
        id: 1,
        name: "FOOTBALL",
        teamSport: "T",
        parentSport: null,
        sportSortOrder: null,
        dateCreated: "02-12-1998 00:00:00.0000",
        dateModified: "05-13-1998 00:00:00.0000",
      },
    },
    id: 35718881,
    order: 0,
    isPromo: false,
  },
  {
    line1: "Leo This is a really long team",
    line2: "Leo League",
    dateFormat: "yyyyMMddHHmmss",
    cacheDate: "20190204170428",
    custId: 35964423,
    url: "10809063326.football.cbssports.com",
    icon: null,
    lineOne: "Leo This is a really long team",
    lineTwo: "Leo League",
    visible: 1,
    dateCreated: "20180906000000",
    dateModified: "20180906000000",
    masterProductId: 25806,
    masterProduct: {
      id: 25806,
      vendorId: 1,
      productLine: 2,
      name: "2018, CBSSports.com Fantasy Football Single Free",
      vendorName: "CBSSports,.com",
      nameAbbreviation: "2018, SPLN FB FREE",
      typeId: 4,
      typeName: "SINGLE",
      year: 2018,
      appId: 25806,
      sportId: 1,
      leagueId: 59,
      serviceLevel: 1,
      serviceLevelName: "BASE",
      sport: {
        dateFormat: "MM-dd-yyyy HH:mm:ss.SSSS",
        cacheDate: "01-28-2019 14:11:52.0416",
        id: 1,
        name: "BASKETBALL",
        teamSport: "T",
        parentSport: null,
        sportSortOrder: null,
        dateCreated: "02-12-1998 00:00:00.0000",
        dateModified: "05-13-1998 00:00:00.0000",
      },
    },
    id: 35718881,
    order: 0,
    isPromo: false,
  },
  {
    line1: "Leo This is a really long team",
    line2: "Leo League",
    dateFormat: "yyyyMMddHHmmss",
    cacheDate: "20190204170428",
    custId: 35964423,
    url: "10809063326.football.cbssports.com",
    icon: null,
    lineOne: "Leo This is a really long team",
    lineTwo: "Leo League",
    visible: 1,
    dateCreated: "20180906000000",
    dateModified: "20180906000000",
    masterProductId: 25806,
    masterProduct: {
      id: 25806,
      vendorId: 1,
      productLine: 2,
      name: "2018, CBSSports.com Fantasy Football Single Free",
      vendorName: "CBSSports,.com",
      nameAbbreviation: "2018, SPLN FB FREE",
      typeId: 4,
      typeName: "SINGLE",
      year: 2018,
      appId: 25806,
      sportId: 1,
      leagueId: 59,
      serviceLevel: 1,
      serviceLevelName: "BASE",
      sport: {
        dateFormat: "MM-dd-yyyy HH:mm:ss.SSSS",
        cacheDate: "01-28-2019 14:11:52.0416",
        id: 1,
        name: "CHESS",
        teamSport: "T",
        parentSport: null,
        sportSortOrder: null,
        dateCreated: "02-12-1998 00:00:00.0000",
        dateModified: "05-13-1998 00:00:00.0000",
      },
    },
    id: 35718881,
    order: 0,
    isPromo: false,
  },
]
const dumbPromise = new Promise((resolve, reject) => {
  resolve(SpoeData)
})

const messageApi: IMessagesApi = {
  getMessages: () => {
    return new Promise((resolve, reject) => {
      {
        resolve(messages)
      }
    })
  },
  deleteMessages: (params?: any) => {
    return new Promise((resolve, reject) => {
      resolve(messages)
    })
  },
  markMessagesAsViewed: (params?: any) => {
    return new Promise((resolve, reject) => {
      resolve(messages)
    })
  },
}

const props = {
  links: [
    {
      title: "LEAGUE",
      path: "/",
      subNav: [
        {
          title: "HOME",
          path: "/",
        },
        {
          title: "SCHEDULE",
          path: "/",
        },
      ],
    },
    {
      title: "DRAFT",
      path: "/",
    },
    {
      title: "MY TEAM",
      path: "/",
    },
    {
      title: "PLAYERS",
      path: "/",
      subNav: [
        {
          title: "STATS",
          path: "/",
        },
        {
          title: "RANKINGS",
          path: "/",
        },
        {
          title: "PLAYER NEWS",
          path: "/",
        },
      ],
    },
    {
      title: "SCORES",
      path: "/",
    },
    {
      title: "STANDINGS",
      path: "/",
    },
    {
      title: "ADVICE",
      path: "/",
    },
  ],
}

const messages = {
  viewed: [
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: true,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: true,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1548441413",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: true,
      permanent: false,
      id: "global-1547571710",
      title: "<b>League Archive Process</b>",
      description:
        "We are currently in the process of finalizing data for the 2018 season.  that you believe might cause an issue with archiving your league. ",
      condition: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: true,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: true,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: true,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
  ],
  not_viewed: [
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1548441413",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      id: "global-1547571710",
      title: "<b>League Archive Process</b>",
      description:
        "We are currently in the process of finalizing data for the 2018 season.  that you believe might cause an issue with archiving your league. ",
      condition: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1548441413",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      id: "global-1547571710",
      title: "<b>League Archive Process</b>",
      description:
        "We are currently in the process of finalizing data for the 2018 season.  that you believe might cause an issue with archiving your league. ",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1550167933",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      title: "<b>League Archive Completed</b>",
      id: "global-1550167933",
      description:
        "Your 2018 season results <a href=\"javascript: void window.open('/support/stats/help','Support','width=1000,height=900,scrollbars=yes')\">Help Center</a>.",
      condition: true,
    },
    {
      created: "1549656536",
      viewed: false,
      permanent: false,
      id: "trade-offer-1549656535.7",
      title: "Trade Offer",
      description: "You have been <a href='/transactions/trade?show_pending=1'>offered a trade</a> by Jeane Ramos.",
      disable_link_expire: true,
    },
    {
      created: "1548441413",
      orig_condition: "$renv->{league}->is_mgmt && $renv->{owner}->commissioner && ($renv->{league}->{created} < 20190101)",
      viewed: false,
      permanent: false,
      id: "global-1547571710",
      title: "<b>League Archive Process</b>",
      description:
        "We are currently in the process of finalizing data for the 2018 season.  that you believe might cause an issue with archiving your league. ",
      condition: true,
    },
  ],
}

const Header: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteNav links={props.links} getUserTeamsCallback={dumbPromise} messagesApi={messageApi} />
    </BrowserRouter>
  );
};

export default Header;
