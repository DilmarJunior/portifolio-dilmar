import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export default function Icon({ icon }: FontAwesomeIconProps) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}