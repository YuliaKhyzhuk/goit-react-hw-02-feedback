import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div className="NotificationContainer">
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
