import fetch from 'isomorphic-fetch';

import FeatureInterface from '../models/feature';

export default {
  async get(): Promise<FeatureInterface[]> {
    const res = await fetch(`${process.env.API_ENDPOINT}/features`);
    return res.json();
  }
};
