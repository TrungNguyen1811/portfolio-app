import { Select } from 'antd'
import Typography from 'antd/es/typography/Typography'
import { useEffect } from 'react'
import { useState } from 'react'

const SelectTag = ({ data, handleChange }) => {
  const [tags, setTags] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (data && data.length > 0) {
      setTags(data)
    } else setTags([])
  }, [data])

  const onChange = (newTags) => {
    setTags(newTags)
    handleChange(newTags.map((item) => item).join(','))
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      setInputValue('')
    }
  }

  return (
    <>
      <Select
        mode='tags'
        style={{ width: '100%' }}
        placeholder='Create tag'
        allowClear
        open={false}
        value={tags}
        tokenSeparators={[',']}
        showSearch={false}
        searchValue={inputValue}
        onChange={onChange}
        onSearch={setInputValue}
        onInputKeyDown={onKeyDown}
      />
      <Typography.Text type='secondary'>
        Press Enter to create a tag
      </Typography.Text>
    </>
  )
}

export default SelectTag
