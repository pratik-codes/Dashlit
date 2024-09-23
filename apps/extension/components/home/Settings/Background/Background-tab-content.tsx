"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus,X ,Upload} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function BackgroundTabs() {
    const [activeTab, setActiveTab] = useState("my-pictures")
    const [showAddDialog, setShowAddDialog] = useState(false)
    const [pictureLink, setPictureLink] = useState("")
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        setUploadedFile(file)
      }
    }
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
    }
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      const file = event.dataTransfer.files?.[0]
      if (file) {
        setUploadedFile(file)
      }
    }
  
    const handleSubmit = () => {
      if (uploadedFile) {
        console.log("Uploading file:", uploadedFile.name)
      } else if (pictureLink) {
        console.log("Adding picture link:", pictureLink)
      }
      setShowAddDialog(false)
      setPictureLink("")
      setUploadedFile(null)
    }
  return (
    <div className="w-full mx-auto bg-black text-white p-6 rounded-lg">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-gray-900 rounded-full">
            <TabsTrigger value="my-pictures" className="rounded-full">My pictures</TabsTrigger>
            <TabsTrigger value="public-pictures" className="rounded-full">Public pictures</TabsTrigger>
            <TabsTrigger value="favourites" className="rounded-full">Favourites</TabsTrigger>
          </TabsList>
          {activeTab==="my-pictures" ? (
          <>  
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full bg-indigo-600 hover:bg-indigo-700">
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle className="flex justify-between items-center">
                  Upload Background Picture
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div
                  className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*"
                  />
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-400">
                    {uploadedFile ? uploadedFile.name : "Upload here or drag and drop your file."}
                  </p>
                </div>
                <div className="text-center">OR</div>
                <div>
                  <label htmlFor="picture-link" className="block text-sm font-medium mb-2">
                    Add your picture link
                  </label>
                  <Input
                    id="picture-link"
                    placeholder="Picture Link"
                    value={pictureLink}
                    onChange={(e) => setPictureLink(e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700">
                    Add
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </> ) : null }
        </div>
      </Tabs>
    </div>
  )
}