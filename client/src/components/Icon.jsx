import * as icons from 'react-bootstrap-icons';

export default function Icon({ name, ...props }) {
  const BootstrapIcon = icons[name];
  return <BootstrapIcon {...props} />;
};