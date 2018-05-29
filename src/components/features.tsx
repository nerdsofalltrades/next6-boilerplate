import * as React from 'react';

import FeatureInterface from '../models/feature';

interface IState {
  features: FeatureInterface[];
}
interface IProps {
  features: FeatureInterface[];
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      features: []
    };
  }

  componentWillReceiveProps(props) {
    const features = { ...props.features };
    this.setState({
      features
    });
  }

  render() {
    return (
      <ul>
        {this.state.features.map((feature: FeatureInterface, id) => (
          <li key={id}>
            {feature.name}
            {feature.version ? `, Version ${feature.version}` : null}
          </li>
        ))}
      </ul>
    );
  }
}
