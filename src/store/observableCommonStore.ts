/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { makeAutoObservable } from 'mobx';
import React from 'react';
import { getPhotosRequest } from './requests/commonStoreRequest';

class ObservableCommonStore {

  photos: IPhotoResponse | null = null;

  constructor() {
    console.log('ObservableCommonStore constructor');
    makeAutoObservable(this);
  }

  async getPhotos() {
    try {
      const data = await getPhotosRequest();
      if (data) {
        console.log('data result', data);
        this.photos = data
        return data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ObservableCommonStore;
