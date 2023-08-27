import * as React from 'react';
import store from '../store';
import RootStack from './RootStack';
import NotAuthorizedStack from './NotAuthorizedStack';
import {observer} from 'mobx-react-lite';

const Navigation = () => {
  const navigationWrapper = React.useMemo(() => {
    if (store.commonStore.isUserAuth) {
      return <RootStack />;
    } else {
      return <NotAuthorizedStack />;
    }
  }, [store.commonStore.isUserAuth]);

  return <>{navigationWrapper}</>;
};

export default observer(Navigation);
