import React from 'react';
import PropTypes from 'prop-types';
import {NotificationContainer } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationContainer>
      <p>{message}</p>
    </NotificationContainer>
  );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
