"use client";
import { Textarea } from "@/components/ui/textarea";
import { CircleX, FileUp, Loader, Paperclip, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addMessage } from "@/lib/features/conversationSlice";
import "@/styles/pages.css";
import { Message } from "@/lib/interface";

const useTypewriter = (text: string, speed = 20) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }

      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, index]);

  return displayText;
};

const MessageItem = ({
  content,
  isRight,
}: {
  content: string;
  isRight: boolean;
}) => {
  const displayText = useTypewriter(content);
  return (
    <div
      className={`${
        isRight ? "bg-[#E9E0E085] ml-auto" : "bg-white"
      } p-2 my-1 max-w-[80%] rounded-[12]`}
    >
      {isRight ? content : displayText}
    </div>
  );
};

function generateRandomSentence(wordCount = 30) {
  const words = [
    "hello",
    "hi",
    "goodbye",
    "please",
    "thanks",
    "sorry",
    "excuse",
    "yes",
    "no",
    "okay",
    "morning",
    "night",
    "welcome",
    "how",
    "what",
    "where",
    "when",
    "why",
    "who",
    "which",
    "help",
    "friend",
    "love",
    "family",
    "name",
    "happy",
    "sad",
    "angry",
    "hungry",
    "thirsty",
    "food",
    "water",
    "coffee",
    "tea",
    "milk",
    "bread",
    "rice",
    "meat",
    "chicken",
    "fish",
    "money",
    "buy",
    "sell",
    "cheap",
    "expensive",
    "hotel",
    "room",
    "bathroom",
    "shower",
    "bed",
    "bus",
    "car",
    "train",
    "plane",
    "taxi",
    "ticket",
    "station",
    "airport",
    "stop",
    "wait",
    "go",
    "come",
    "walk",
    "run",
    "sit",
    "stand",
    "look",
    "see",
    "watch",
    "listen",
    "speak",
    "talk",
    "read",
    "write",
    "call",
    "ask",
    "answer",
    "think",
    "know",
    "understand",
    "like",
    "want",
    "need",
    "have",
    "give",
    "take",
    "find",
    "lose",
    "open",
    "close",
    "hot",
    "cold",
    "big",
    "small",
    "fast",
    "slow",
    "early",
    "late",
    "new",
    "old",
    "right",
    "wrong",
    "easy",
    "hard",
    "near",
    "far",
    "clean",
    "dirty",
    "full",
    "empty",
    "day",
    "week",
    "month",
    "year",
    "today",
    "tomorrow",
    "yesterday",
    "now",
    "soon",
    "later",
    "man",
    "woman",
    "boy",
    "girl",
    "child",
    "baby",
    "father",
    "mother",
    "brother",
    "sister",
    "husband",
    "wife",
    "friend",
    "person",
    "people",
    "teacher",
    "student",
    "doctor",
    "nurse",
    "police",
    "work",
    "job",
    "school",
    "university",
    "class",
    "home",
    "house",
    "city",
    "village",
    "country",
    "beautiful",
    "ugly",
    "happy",
    "sad",
    "angry",
    "tired",
    "bored",
    "scared",
    "excited",
    "worried",
    "sun",
    "moon",
    "star",
    "sky",
    "rain",
    "snow",
    "wind",
    "cloud",
    "hot",
    "cold",
    "morning",
    "afternoon",
    "evening",
    "night",
    "breakfast",
    "lunch",
    "dinner",
    "snack",
    "delicious",
    "hungry",
    "shirt",
    "pants",
    "dress",
    "shoes",
    "hat",
    "gloves",
    "coat",
    "jeans",
    "socks",
    "scarf",
    "computer",
    "phone",
    "internet",
    "email",
    "message",
    "TV",
    "radio",
    "music",
    "movie",
    "game",
    "stop",
    "wait",
    "come",
    "go",
    "leave",
    "enter",
    "exit",
    "turn",
    "start",
    "finish",
  ];

  const sentence = [];
  for (let i = 0; i < wordCount; i++) {
    sentence.push(words[Math.floor(Math.random() * words.length)]);
  }

  return sentence.join(" ");
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const conversationTitle = useAppSelector(
    (state) => state.conversation.conversation.title
  );
  const { messages } = useAppSelector((state) => state.conversation);
  const [isLoading, setIsLoading] = useState(false);

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
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSend = () => {
    if (message.trim() || file) {
      dispatch(
        addMessage({
          id: Date.now().toString(),
          content: message,
        })
      );
      setMessage("");
      setFile(null);
      setIsLoading(true);
      setTimeout(() => {
        const text = generateRandomSentence();

        dispatch(
          addMessage({
            id: Date.now().toString(),
            content: text,
          })
        );
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full font-semibold size-5 mb-4">
        {conversationTitle}
      </div>

      <div className="flex h-full flex-col overflow-y-auto [scrollbar-gutter:stable]">
        {messages.map((item: Message, idx: number) => (
          <div className="w-full flex" key={item.id}>
            <MessageItem content={item.content} isRight={(idx + 1) % 2 === 1} />
          </div>
        ))}

        <div className="flex justify-center ">
          {isLoading && <Loader className="animate-spin" />}
        </div>
      </div>

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
            <div>{file.name}</div>
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
            onChange={handleChangeMessage}
            disabled={isLoading}
          />
          <Send
            className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600"
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
}
