import * as React from 'react';
import Layout from '../src/components/layout';
import Features from '../src/components/features';
import FeatureInterface from '../src/models/feature';
import FeaturesService from '../src/services/features';

interface IState {
  features: FeatureInterface[];
}

interface IProps {}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      features: []
    };
  }

  async componentDidMount() {
    const features = await FeaturesService.get();
    this.setState({ features });
  }

  render() {
    return (
      <Layout>
        <Features features={this.state.features} />
      </Layout>
    );
  }
}
