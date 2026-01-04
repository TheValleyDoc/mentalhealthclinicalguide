import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  content: string[];
  tools?: { name: string; link: string }[];
}

export function ExpandableSection({ title, content, tools }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl text-gray-900">{title}</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-6">
          <ul className="space-y-3 mb-4">
            {content.map((item, index) => {
              // Check if this is a numbered list item (starts with digit followed by period or parenthesis)
              const isNumberedItem = /^\d+[\.\)]/.test(item);
              const isParenNumberedItem = /^\(\d+\)/.test(item);
              
              if (isNumberedItem || isParenNumberedItem) {
                return (
                  <li key={index} className="ml-6 text-gray-700">
                    {item}
                  </li>
                );
              }
              
              // Regular bullet point
              return (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              );
            })}
          </ul>
          
          {tools && tools.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-sm text-gray-900 mb-3">Screening Tools & Resources:</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                  >
                    {tool.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}