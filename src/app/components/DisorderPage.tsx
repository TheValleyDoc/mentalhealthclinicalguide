import { DisorderData } from '../data/disorderData';
import { ExpandableSection } from './ExpandableSection';
import { TreatmentSection } from './TreatmentSection';

interface DisorderPageProps {
  data: DisorderData;
}

export function DisorderPage({ data }: DisorderPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-gray-900 mb-4">{data.title}</h1>
        <p className="text-lg text-gray-600">
          Clinical guidance for screening, diagnosis, and treatment planning
        </p>
      </div>

      <ExpandableSection 
        title={data.screening.title} 
        content={data.screening.content}
        tools={data.screening.tools}
      />

      <ExpandableSection title={data.diagnosis.title} content={data.diagnosis.content} />

      <TreatmentSection treatment={data.treatment} />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg text-amber-900 mb-2">Important Notice</h3>
        <p className="text-sm text-amber-800">
          This information is intended for healthcare professionals and should not replace
          clinical judgment. Always consider individual patient circumstances, comorbidities,
          and consult current treatment guidelines. If a patient is in crisis or expresses
          suicidal ideation, immediate psychiatric evaluation and safety planning are
          essential.
        </p>
      </div>
    </div>
  );
}