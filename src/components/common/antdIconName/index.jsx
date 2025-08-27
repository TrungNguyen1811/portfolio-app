import * as Icons from '@ant-design/icons'

const AntdIconName = ({ iconName }) => {
  const IconComponent = Icons?.[iconName]
  if (!IconComponent) return null
  return <IconComponent />
}

export default AntdIconName
