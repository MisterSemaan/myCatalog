import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Toast = ({ toasts }) => toasts !== null
  && toasts.length > 0
  && toasts.map(toast => (
    <div key={toast.id} className={`alert alert-${toast.toastType}`}>
      {toast.msg}
    </div>
  ));

Toast.propTypes = { toasts: PropTypes.array.isRequired };

const mapStateToProps = state => ({ toasts: state.toast });

export default connect(mapStateToProps)(Toast);

// TODO: finish this
