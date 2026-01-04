import { useState } from 'react';
import { SeverityContent, Resource } from '../data/disorderData';
import { ExternalLink } from 'lucide-react';

interface TreatmentSectionProps {
  treatment: {
    mild: SeverityContent;
    moderate: SeverityContent;
    severe: SeverityContent;
  };
}

type Severity = 'mild' | 'moderate' | 'severe';

export function TreatmentSection({ treatment }: TreatmentSectionProps) {
  const [selectedSeverity, setSelectedSeverity] = useState<Severity>('mild');
  const [resourceFilter, setResourceFilter] = useState<'all' | 'public' | 'private'>('all');

  const currentContent = treatment[selectedSeverity];

  const filteredResources = currentContent.resources.filter((resource) => {
    if (resourceFilter === 'all') return true;
    return resource.type === resourceFilter;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg shadow-sm p-6">
        <h2 className="text-2xl text-gray-900 mb-4">Treatment Options</h2>

        {/* Severity Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedSeverity('mild')}
            className={`px-6 py-2.5 rounded-lg transition-colors ${
              selectedSeverity === 'mild'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Mild
          </button>
          <button
            onClick={() => setSelectedSeverity('moderate')}
            className={`px-6 py-2.5 rounded-lg transition-colors ${
              selectedSeverity === 'moderate'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Moderate
          </button>
          <button
            onClick={() => setSelectedSeverity('severe')}
            className={`px-6 py-2.5 rounded-lg transition-colors ${
              selectedSeverity === 'severe'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Severe
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-900 mb-2 capitalize">{selectedSeverity} Severity</h3>
          <p className="text-gray-700">{currentContent.description}</p>
        </div>

        {/* Psychotherapy Options */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-900 mb-3">Psychotherapy Options</h3>
          <ul className="space-y-2">
            {currentContent.psychotherapy.map((therapy, index) => {
              // Check if this is a numbered list item (starts with digit followed by period or parenthesis)
              const isNumberedItem = /^\d+[\.\)]/.test(therapy);
              const isParenNumberedItem = /^\(\d+\)/.test(therapy);
              
              if (isNumberedItem || isParenNumberedItem) {
                return (
                  <li key={index} className="ml-6 text-gray-700">
                    {therapy}
                  </li>
                );
              }
              
              // Regular bullet point
              return (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{therapy}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Lifestyle Interventions (if present) */}
        {currentContent.lifestyle && currentContent.lifestyle.length > 0 && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg text-green-900 mb-3">Lifestyle & Evidence-Based Interventions</h3>
            <div className="space-y-4">
              {currentContent.lifestyle.map((item, index) => {
                // Check if this is a subheading (ends with a colon)
                if (item.endsWith(':')) {
                  return (
                    <h4 key={index} className="text-base font-semibold text-green-900 mt-3 first:mt-0">
                      {item}
                    </h4>
                  );
                }
                // Regular bullet point
                return (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <span className="text-green-800">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Resources Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-900">Resources</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setResourceFilter('all')}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  resourceFilter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setResourceFilter('public')}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  resourceFilter === 'public'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Public
              </button>
              <button
                onClick={() => setResourceFilter('private')}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  resourceFilter === 'private'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Private
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredResources.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No {resourceFilter} resources available for this severity level.
              </p>
            ) : (
              filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-gray-900">{resource.title}</h4>
            <span
              className={`px-2 py-0.5 rounded text-xs ${
                resource.type === 'public'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {resource.type === 'public' ? 'Public' : 'Private'}
            </span>
          </div>
          <p className="text-gray-700 text-sm mb-2">{resource.description}</p>
          {resource.location && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Location:</span> {resource.location}
            </p>
          )}
          {resource.services && resource.services.length > 0 && (
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-600">Services: </span>
              <span className="text-sm text-gray-600">{resource.services.join(', ')}</span>
            </div>
          )}
          {resource.cost && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Cost:</span> {resource.cost}
            </p>
          )}
          {resource.format && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Format:</span> {resource.format}
            </p>
          )}
          {resource.considerations && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Considerations:</span> {resource.considerations}
            </p>
          )}
        </div>
        {resource.link !== '#' && (
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}