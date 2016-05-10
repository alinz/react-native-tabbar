import React, { Component } from 'react';

const DEFAULT_REF = 'DEFAULT_REF';

//this is a handy Wrapper component to let you access component which are not
//being rendered normally.
export default class Wrapper extends Component {
  constructor(props, context) {
    super(props, context);
    if (Array.isArray(this.props.children)) {
      throw new Error('Wrapper must wrap a single child only.')
    }

    this._ref_      = null;
    this._refValue_ = null; //store the ref value if ref is function
    this._refFn_    = null; //store the function passes as ref value
  }

  getWrappedRef() {
    const ref = this._refValue_ || this.refs[this._ref_];

    //we need this condition for redux smart component, wrapped with connect.
    if (ref && ref.getWrappedInstance) {
      return ref.getWrappedInstance();
    }
    return ref;
  }

  refFn(ref) {
    //storethe ref value associated with this value
    this._refValue_ = ref;
    //need to call original function on caller
    this._refFn_(ref);
  }

  //For some reasons we need this as false or the first tabs ref will
  //be null :( ahhhhhhhh
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { children } = this.props;
    const props = children.props;

    const ref = children.ref;

    //detecting whether ref is a string or a function.
    if ('function' === typeof ref) {
      this._ref_ = this.refFn.bind(this);
      this._refFn_ = ref;
    } else {
      this._ref_ = ref || DEFAULT_REF;
    }

    return (
      React.cloneElement(children, {...props, ref: this._ref_})
    );
  }
}
