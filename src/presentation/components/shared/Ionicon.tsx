import Icon, { IoniconsIconName } from '@react-native-vector-icons/ionicons';

interface Props {
  name: IoniconsIconName;
  size?: number;
  color?: string;
}

export const IonIcon = ({ name, size = 60, color = 'black' }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
