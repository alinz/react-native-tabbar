import React, { Component } from 'react-native';

const DEFAULT_REF = 'DEFAULT_REF';

//this is a handy Wrapper component to let you access component which are not
//being rendered normally.
export default class Wrapper extends Component {
  constructor(props, context) {
    super(props, context);
    if (Array.isArray(this.props.children)) {
      throw new Error('Wrapper must wrap a single child only.')
    }
    this._ref_ = null;
  }

  getWrappedRef() {
    const ref = this.refs[this._ref_];
    //we need this condition for redux smart component, wrapped with connect.
    if (ref && ref.getWrappedInstance) {
      return ref.getWrappedInstance();
    }
    return ref;
  }

  render() {
    const { children } = this.props;
    const props = children.props;

    this._ref_ = children.ref || DEFAULT_REF;
    return (
      React.cloneElement(children, {...props, ref: this._ref_})
    );
  }
}
