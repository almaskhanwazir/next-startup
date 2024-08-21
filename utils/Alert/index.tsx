'use client'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Styles from './index.module.css'

interface Alert {
  message: string
  type: string
}

const Alert = () => {
  const [show, setShow] = useState(true)
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['showAlert'],
    queryFn: () => {
      return {
        alert: {
          message: 'Loading...',
        },
        isShow: false, 
        type:"",
        message:""
      }
    },
  })

  if (!data || !data.isShow) {
    return null
  } else {
  }


  return (
    data.isShow && (
      <div className="flex  justify-center items-center">
        <div className="fixed mt-10 !top-10">
          <div
            className={`px-4 pr-12 py-3 rounded flex ${
              data.type == 'success'
                ? Styles.alerBoxSuccess
                : Styles.alerBoxError
            }`}
            role="alert"
          >
            <strong className="font-bold mr-2">{data.type}</strong>
            <span className="block sm:inline">{data.message}</span>

            <span onClick={() => setShow(false)} className=" px-2 ">
              <CloseIcon />
            </span>
          </div>
        </div>
      </div>
    )
  )
}

export default Alert
