import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePage } from 'hooks/mobile';
import { withReducer } from 'store';
import { TabsA } from 'ui/mobile';
import portalReducer from 'services/portal/mobile/slices';
import { changeActiveTab } from 'services/portal/mobile/slices/uiSlice';
import { About, Club, Concert, Now } from './tabPanels';

const Portal = () => {
  const { activeTab } = useSelector((state) => state.portal.ui);

  const initializePage = usePage();

  const dispatch = useDispatch();

  useEffect(() => {
    initializePage('뮤코 하우스');
  }, [initializePage]);

  const tabsAProps = {
    activeTab: activeTab,
    tabs: [
      {
        id: 'now',
        label: 'NOW',
        action: () => dispatch(changeActiveTab('now')),
      },
      {
        id: 'club',
        label: '동아리',
        action: () => dispatch(changeActiveTab('club')),
      },
      {
        id: 'learning',
        label: '배움',
        action: () => dispatch(changeActiveTab('learning')),
      },
      {
        id: 'concert',
        label: '공연',
        action: () => dispatch(changeActiveTab('concert')),
      },
      {
        id: 'store',
        label: '스토어',
        action: () => dispatch(changeActiveTab('store')),
      },
      {
        id: 'about',
        label: '소개',
        action: () => dispatch(changeActiveTab('about')),
      },
    ],
    layoutId: 'portalTabsIndicator',
  };

  return (
    <div className="absolute inset-0 top-14">
      <TabsA {...tabsAProps} />
      {activeTab === 'about' && <About />}
      {activeTab === 'club' && <Club />}
      {activeTab === 'concert' && <Concert />}
      {activeTab === 'now' && <Now />}
    </div>
  );
};

export default withReducer('portal', portalReducer)(Portal);
