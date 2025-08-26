import { Button, Flex } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import {
  HeaderStyle,
  UserTextStyle,
  FlexFullStyle,
  ProfileAvatarStyle,
} from './styled'

function PrivateHeader({ collapsed, setCollapsed }) {
  return (
    <HeaderStyle>
      <FlexFullStyle align='center' gap='middle' justify='space-between'>
        <Button
          type='default'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Flex align='center' gap={8}>
          <Flex vertical justify='center' align='start'>
            <UserTextStyle strong className='profile__name'>
              Huu Dong
            </UserTextStyle>
            <UserTextStyle className='profile__email'>
              empa@gmail.com
            </UserTextStyle>
          </Flex>
          <ProfileAvatarStyle size={48} icon={<span>Đ</span>} />
        </Flex>
      </FlexFullStyle>
    </HeaderStyle>
  )
}

export default PrivateHeader
