import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/routes";
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorPrimary: '#0463e8',
          colorComplete: '#52c41a',
          colorInProgress: '#faad14',
          colorInComplete: '#f5222d',
        },
        components: {
          Menu: {
            itemHeight: 48,
            itemPaddingInline: 24,
            fontSize: 16,
            iconSize: 18,
          },
        },
      }}
    >
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
