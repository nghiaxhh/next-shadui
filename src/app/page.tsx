"use client";
import { Textarea } from "@/components/ui/textarea";
import { CircleX, FileUp, Paperclip, Send } from "lucide-react";
import { useState, useRef } from "react";
import { poppins } from "./fonts";
import "@/styles/pages.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<unknown>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    // Xử lý files ở đây
    console.log(files);
    setFile(files[0]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const files = e.target.files;
    if (files) {
      // Xử lý files ở đây
      console.log(files);
      setFile(files[0]); // Cập nhật kiểu dữ liệu phù hợp với state
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className={`flex-1 w-full font-semibold size-5 ${poppins.className}`}
      >
        Conversation Name
      </div>
      <div>
        <div
          className={`bg-white relative gap-2 p-2 rounded-lg border ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-200"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!!file && (
            <div className="flex items-center mb-2 gap-1 w-fit bg-[#DAD0D38C] p-2 rounded-[12]">
              <FileUp />
              <div>{(file as File)?.name}</div>
              <CircleX
                size={14}
                className="ml-2 cursor-pointer"
                onClick={() => setFile(null)}
              />
            </div>
          )}
          <div className="flex items-center mx-4 gap-4">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
              multiple
            />
            <Paperclip
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={() => fileInputRef.current?.click()}
            />
            <Textarea
              className="flex-1 flex items-center bg-transparent border-none shadow-none focus-visible:ring-0 resize-none"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Send className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
