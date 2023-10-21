const Notification = ({ notification }) => {
  if (!notification) return null;
  const { message, type } = notification;
  return <div className={type === 'success' ? 'successNotification' : 'errorNotification'}>{message}</div>;
};

export default Notification;
