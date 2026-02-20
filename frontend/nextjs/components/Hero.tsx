import React, { FC } from "react";
import InputArea from "./ResearchBlocks/elements/InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: (query: string) => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="relative min-h-[100vh] flex items-center pt-[60px] sm:pt-[80px] mt-[-60px] sm:mt-[-130px]">
      <div className="flex flex-col items-center justify-center w-full py-8 md:py-16 px-4">
        <h1 className="text-2xl sm:text-3xl font-medium text-center text-white mb-6 md:mb-10">
          Research any topic
        </h1>

        <div className="w-full max-w-[640px] pb-6">
          <div className="rounded-lg border border-gray-700/60 bg-gray-900/40 backdrop-blur-sm">
            <InputArea
              promptValue={promptValue}
              setPromptValue={setPromptValue}
              handleSubmit={handleDisplayResult}
            />
          </div>
          <p className="mt-4 text-center text-gray-500 text-xs">
            Verify important information and sources.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pb-8">
          {suggestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClickSuggestion(item.name)}
              className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-gray-600 bg-gray-800/50 text-gray-300 text-sm hover:border-gray-500 hover:bg-gray-800 transition-colors min-w-[90px]"
            >
              <img src={item.icon} alt="" width={16} height={16} className="opacity-70 invert" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  { id: 1, name: "Stock analysis on ", icon: "/img/stock2.svg" },
  { id: 2, name: "Plan a trip to ", icon: "/img/hiker.svg" },
  { id: 3, name: "Latest news on ", icon: "/img/news.svg" },
];

export default Hero;
