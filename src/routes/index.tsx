import { Outlet, Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import WorldLayout from '../pages/world/layout';
import World from '../pages/world';
import Inventory from '../pages/inventory';
import QuestLayout from '../pages/quests/layout';
import QuestList from '../pages/quests';
// import QuestDetail from '../pages/quests/detail';
import MarketplaceLayout from '../pages/marketplace/layout';
import Marketplace from '../pages/marketplace';
import MarketplaceList from '../pages/marketplace/list';
import NftRedirect from '../pages/nfts';
import NftLayout from '../pages/nfts/layout';
import NftDetail from '../pages/nfts/detail';
import EventLayout from '../pages/events/layout';
import EventList from '../pages/events';
// import EventDetail from '../pages/events/detail';
// import EventDetailSub from '../pages/events/detail/sub';
import News from '../pages/news';
import GameFiLayout from '../pages/gameFi/layout';
import GameFiSubLayout from '../pages/gameFi/subLayout';
import GameFiRedirect from '../pages/gameFi';
import Staking from '../pages/gameFi/staking';
import StakingDetail from '../pages/gameFi/staking/detail';
import Swap from '../pages/gameFi/swap';
import SwapDetail from '../pages/gameFi/swap/detail';
import Lppool from '../pages/gameFi/lppool';
import Governance from '../pages/governance';
import AccountLayout from '../pages/accounts/layout';
import AccountSubLayout from '../pages/accounts/subLayout';
import AccountRedirect from '../pages/accounts';
import AccountAssets from '../pages/accounts/assets';
import AccountActivity from '../pages/accounts/activity';
import LeaderboardLayout from '../pages/leaderboard/layout';
import Leaderboard from '../pages/leaderboard';
import LeaderboardDetail from '../pages/leaderboard/detail';
import Game from '../pages/game';
import NotFound from '../pages/notFound';

const route = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path='/world' element={<WorldLayout />}>
      <Route index element={<World />} />
    </Route>

    <Route path='/inventory' element={<Inventory />} />

    <Route path='/quests' element={<QuestLayout />}>
      <Route index element={<QuestList />} />
      {/* <Route path=':type' element={<QuestDetail />} /> */}
    </Route>

    <Route path='/marketplace' element={<MarketplaceLayout />}>
      <Route index element={<Marketplace />} />
      <Route path='lists' element={<Outlet />}>
        <Route index element={<MarketplaceList />} />
      </Route>
    </Route>

    <Route path='/nfts' element={<NftLayout />}>
      <Route index element={<NftRedirect />} />
      <Route path=':nftId' element={<NftDetail />} />
    </Route>

    <Route path='/events' element={<EventLayout />}>
      <Route index element={<EventList />} />
      {/* <Route path=':eventId' element={<Outlet />}> */}
      {/* <Route index element={<EventDetail />} /> */}
      {/* <Route path=':eventSubId' element={<EventDetailSub />} /> */}
      {/* </Route> */}
    </Route>

    <Route path='/news' element={<News />} />

    <Route path='/leaderboard' element={<LeaderboardLayout />}>
      <Route index element={<Leaderboard />} />
      <Route path=':type' element={<Outlet />}>
        <Route index element={<LeaderboardDetail />} />
      </Route>
    </Route>

    <Route path='/koala-fi' element={<GameFiLayout />}>
      <Route index element={<GameFiRedirect />} />
      <Route path='staking' element={<GameFiSubLayout type='staking' />}>
        <Route index element={<Staking />} />
        <Route path=':subType' element={<StakingDetail />} />
      </Route>
      <Route path='swap' element={<GameFiSubLayout type='swap' />}>
        <Route index element={<Swap />} />
        <Route path=':subType' element={<SwapDetail />} />
      </Route>
      <Route path='lppool' element={<GameFiSubLayout type='lppool' />}>
        <Route index element={<Lppool />} />
      </Route>
    </Route>

    <Route path='/governance' element={<Governance />} />

    <Route path='/accounts/:address' element={<AccountLayout />}>
      <Route index element={<AccountRedirect />} />
      <Route path='assets' element={<AccountSubLayout type='assets' />}>
        <Route index element={<AccountAssets />} />
      </Route>
      <Route path='activity' element={<AccountSubLayout type='activity' />}>
        <Route index element={<AccountActivity />} />
      </Route>
    </Route>

    <Route path='/game' element={<Game />} />

    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default route;
