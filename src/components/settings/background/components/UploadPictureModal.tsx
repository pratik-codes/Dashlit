import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import ModalComponent from 'components/common/Modal'
import Compressor from 'compressorjs'
import React, { useState } from 'react'
import {
  addImageURL,
  uploadBackgroundImage
} from '../../../../firebase/functions/UploadActions'
import '../../../../styles/AntdStyles/Upload.css'
import InputComponent from '../../../common/InputComponent'
import Loader from '../../../common/Loader'
import triggerMessage from '../../../common/SnackBar'
import Button from '../../../common/button/button'

interface Props {
  isOpen: boolean
  closeModal: any
  openModal: any
  loadPictures: any
}

const UploadPictureModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal,
  loadPictures
}) => {
  const [isUploading, setIsUploading] = useState(false)
  const [pictureName, setPictureName] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')

  const closeHandler = () => {
    closeModal()
  }

  const uploadPictureHandler = async (data: any) => {
    setIsUploading(true)
    new Compressor(data.file, {
      quality: 0.8,
      success: async (compressedResult: any) => {
        const isUploaded = await uploadBackgroundImage(compressedResult)
        if (isUploaded) triggerMessage('Image uploaded successfully', 'success')
        else triggerMessage('Image upload failed :(', 'error')
        loadPictures()
        setIsUploading(false)
      }
    })
  }

  const pictureLinkAddHandler = async () => {
    if (pictureUrl?.length === 0) {
      triggerMessage('Please add link url and name', 'fail')
      return
    }
    await addImageURL(pictureUrl, pictureName)
    triggerMessage('Picture added.', 'success')
    loadPictures()
  }

  return (
    <div>
      <ModalComponent
        isOpen={isOpen}
        onClose={closeHandler}
        title="Upload Background Picture"
      >
        <ImgCrop aspect={16 / 9}>
          <Upload
            multiple={false}
            accept=".png,.jpeg,.jpg"
            customRequest={uploadPictureHandler}
            showUploadList={false}
          >
            <button
              type="button"
              style={{ borderRadius: '10px' }}
              className="border border-metal border-dashed hover:border-purple bg-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:outline-none font-medium h-40 items-center justify-center mr-3 mt-4 px-4 py-2 text-sm w-full"
            >
              {isUploading ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {' '}
                  <h1 className="font-bold text-white text-lg">Upload here</h1>
                  <p className="font-medium text-white">
                    or drag and drop your file.
                  </p>
                </>
              )}
            </button>
          </Upload>
        </ImgCrop>

        <div className="">
          <div className="font-bold my-6 text-center text-white text-lg">
            OR
          </div>
          <div className="font-bold mb-2 text-white text-lg text-white">
            Add your picture link
          </div>
          <div className="flex flex-col justify-start">
            <InputComponent
              type="text"
              onChange={(e: any) => setPictureUrl(e.target.value)}
              placeholder="Picture Link"
              className="bg-transparent border border-gray-900 focus:outline-none focus:ring font-bold mb-1 mt-3 outline-none p-1 placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-white text-lg w-full"
            />
            <div className="flex justify-start mt-4 space-x-2 w-full">
              <Button
                disabled={pictureUrl?.length === 0}
                kind="elevated"
                className="focus:outline-none"
                onClick={pictureLinkAddHandler}
              >
                Add
              </Button>
              <Button
                type="secondary"
                className="focus:outline-none"
                onClick={closeHandler}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}

export default UploadPictureModal
