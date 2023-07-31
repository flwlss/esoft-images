import ObservableCommonStore from "./observableCommonStore";

export interface IRootStore {
  commonStore: ObservableCommonStore;
}

class RootStore implements IRootStore {
  commonStore: ObservableCommonStore;

  constructor() {
    this.commonStore = new ObservableCommonStore();
  }
}

export default new RootStore();
