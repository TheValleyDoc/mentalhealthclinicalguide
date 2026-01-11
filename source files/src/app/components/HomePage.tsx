import { Link } from "react-router-dom";
import { Heart, Stethoscope, AlertCircle } from "lucide-react";
import { ExternalLink } from "lucide-react";
import nsImage from "../../assets/087118530cbc58f4df5c46d723db18ef00abf0aa.png";

interface Resource {
  title: string;
  description: string;
  link: string;
  type: "public" | "private";
  format: string;
  cost: string;
}

const annapolisValleyResources: Resource[] = [
  {
    title: "Nova Scotia Health Mental Health & Addictions",
    description: "Public Self-Referral System",
    link: "https://mha.nshealth.ca/en",
    type: "public",
    format: "in-person",
    cost: "Free",
  },
  {
    title: "Pivoted Perspective",
    description:
      "Offers in person or virtual options. Individual Sessions. CBT. Offers option to do walk and talk option.",
    link: "https://www.pivotedperspective.com/",
    type: "private",
    format: "in-person/virtual",
    cost: "$175.00 per session",
  },
  {
    title: "Breathe Mindfulness",
    description:
      "Offers in person or virtual options. Individual or group sessions. CBT. Mindfulness based CBT. ACT.",
    link: "https://breathemindfulness.ca/",
    type: "private",
    format: "in-person/virtual",
    cost: "$175.00-$225.00 per session",
  },
  {
    title: "Psychotherapy For You",
    description:
      "Virtual option only. Individual sessions. CBT. Mindfulness based CBT. ACT.",
    link: "https://www.psychotherapyforyou.ca/",
    type: "private",
    format: "virtual",
    cost: "$160 per session",
  },
  {
    title: "Sommerlund",
    description:
      "Offers in person or virtual options. Individual sessions. CBT. Mindfulness based CBT. ACT.",
    link: "https://www.sommerlund.ca/",
    type: "private",
    format: "in-person/virtual",
    cost: "$150 per session",
  },
  {
    title: "Annapolis Valley Psychological Services",
    description:
      "Offers in person or virtual options. Individual sessions. CBT. Mindfulness based CBT. ACT. Specialty in intimate partner violence.",
    link: "https://www.annapolisvalleypsychologicalservices.ca/our-team",
    type: "private",
    format: "in-person/virtual",
    cost: "Cost not available for sessions on website",
  },
  {
    title: "True North Psychological",
    description:
      "Offers in person or virtual options. Individual sessions. CBT. Mindfulness based CBT. ACT. IPT.",
    link: "https://truenorthpsychological.com/",
    type: "private",
    format: "in-person/virtual",
    cost: "Cost not available on website",
  },
  {
    title: "Amy Rubin",
    description:
      "Offers in person or virtual options. Individual Sessions. CBT-based approach but does not report specific CBT therapy.",
    link: "http://amyrubin.ca/",
    type: "private",
    format: "in-person/virtual",
    cost: "$140 per session",
  },
  {
    title: "Resolve CT",
    description:
      "Offers in person or virtual options. Individual Sessions. Does not explicitly state CBT but practitioners trained in CBT.",
    link: "https://resolvect.ca/services",
    type: "private",
    format: "in-person/virtual",
    cost: "$125 per session",
  },
  {
    title: "Bower Jacquard Psychological Services",
    description:
      "Offers in person or virtual options. Individual or group sessions. CBT. ACT.",
    link: "https://bowerjacquardpsychologicalservices.com/services/#therapy",
    type: "private",
    format: "in-person/virtual",
    cost: "Cost not available on website",
  },
  {
    title: "Valley Inner Space",
    description:
      "Offers in person sessions. Individual sessions. Does not explicitly state CBT but practitioners trained in CBT.",
    link: "https://www.valleyinnerspace.ca/",
    type: "private",
    format: "in-person",
    cost: "Cost not available on website",
  },
  {
    title: "Inner Path Psychology",
    description:
      "Offers in person or virtual options. Individual sessions. CBT.",
    link: "https://innerpathpsychology.com/services/",
    type: "private",
    format: "in-person/virtual",
    cost: "$225 per session",
  },
  {
    title: "Scotia Psychological Services",
    description:
      "Virtual option only. Individual sessions. CBT. Has consultation services for practitioners interested in providing CBT therapy.",
    link: "https://www.scotiapsychologicalservices.com/",
    type: "private",
    format: "virtual",
    cost: "$180-$225 per session",
  },
  {
    title: "Therapy by Katherine",
    description:
      "Virtual option only. Individual sessions. Reports using CBT, ACT and motivational interviewing in conjunction but mostly narrative therapy.",
    link: "https://www.therapybykatherine.ca/",
    type: "private",
    format: "virtual",
    cost: "Cost not available on website",
  },
  {
    title: "Jenn Smith Counselling",
    description:
      "In person or Virtual options. Individual sessions. Uses techniques from CBT.",
    link: "https://www.jennsmithcounselling.com/",
    type: "private",
    format: "in-person/virtual",
    cost: "$160 per session",
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-gray-900">{resource.title}</h4>
            <span
              className={`px-2 py-0.5 rounded text-xs ${
                resource.type === "public"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {resource.type === "public" ? "Public" : "Private"}
            </span>
          </div>
          <p className="text-gray-700 text-sm mb-2">{resource.description}</p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Cost:</span> {resource.cost}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Format:</span> {resource.format}
          </p>
        </div>
        {resource.link !== "#" && (
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

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div
          className="text-center mb-16 rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center relative"
          style={{ backgroundImage: `url(${nsImage})` }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/85"></div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16">
            <h1 className="text-5xl text-white mb-4">
              Mental Health Clinical Guide for Primary Care
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              A resource for screening, diagnosis and the development of
              non-pharmacological treatment plans for common mental health
              presentations.
            </p>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-4 max-w-2xl mx-auto">
              <p className="text-gray-900">
                A free clinical reference tool for primary care physicians in
                the Annapolis Valley, Nova Scotia
              </p>
            </div>
          </div>
        </div>

        {/* Disorder Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Link
            to="/depression"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-3">Depression</h2>
            <p className="text-gray-600 mb-4">
              Clinical guidance for screening, diagnosing, and treating
              depressive disorders across mild, moderate, and severe
              presentations.
            </p>
            <span className="text-blue-600 hover:text-blue-800">
              View Guidelines →
            </span>
          </Link>

          <Link
            to="/anxiety"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-3">Anxiety</h2>
            <p className="text-gray-600 mb-4">
              Evidence-based approaches to screening, diagnosis, and treatment
              of anxiety disorders including GAD, panic, and social anxiety.
            </p>
            <span className="text-green-600 hover:text-green-800">
              View Guidelines →
            </span>
          </Link>

          <Link
            to="/substance-use"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-3">
              Substance Use Disorder
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive assessment and treatment protocols for substance use
              disorders with severity-based interventions.
            </p>
            <span className="text-purple-600 hover:text-purple-800">
              View Guidelines →
            </span>
          </Link>
        </div>

        {/* Types of Psychotherapies Explained */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl text-gray-900 mb-6 text-center">
            Types of Psychotherapies Explained
          </h2>

          <div className="space-y-8">
            {/* Cognitive Behavioural Therapy */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Cognitive Behavioural Therapy:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Cognitive Behavioural Therapy (CBT) is a structured,
                  evidence-based psychotherapy that focuses on identifying and
                  modifying unhelpful patterns of thinking and behaviour.
                  Typically delivered over 6-20 sessions, CBT treatment
                  typically focuses on helping individuals change unhelpful
                  patterns of thinking that contribute to emotional distress.
                  This therapy is based on proactive, shared therapeutic
                  relationship between individual and therapist. Common
                  strategies include learning to recognize and challenge
                  cognitive distortions that create problems and reevaluating
                  these thoughts considering evidence and reality. CBT also
                  helps individuals develop a better understanding of the
                  behavior and motivations of others, use structured
                  problem-solving skills to manage difficult situations more
                  effectively, and build a stronger sense of confidence in their
                  own abilities and coping skills.
                </p>
                <p>
                  CBT treatment also commonly involves efforts to change
                  unhelpful behavioral patterns that maintain distress. These
                  strategies may include gradually facing feared situations
                  rather than avoiding them, using role-playing exercises to
                  prepare for challenging or potentially problematic
                  interactions with others, and learning techniques to calm the
                  mind and relax the body, such as breathing exercises or
                  relaxation skills.
                </p>
                <p>
                  CBT emphasizes the here-and-now rather than exploring the
                  past. While a certain amount of information about one's
                  history is needed, the focus is on moving forward to develop
                  more effective ways of coping with life.
                </p>
                <p>
                  A key feature of CBT is its emphasis on practice outside of
                  therapy sessions. Clients are often encouraged to complete
                  homework assignments, such as thought records or behavioural
                  experiments, to reinforce skills learned in therapy and
                  promote lasting change.
                </p>
                <p className="mt-3">
                  <strong>READ MORE AT:</strong>
                </p>
                <a
                  href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/cognitive-behavioural-therapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                >
                  https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/cognitive-behavioural-therapy
                </a>
              </div>
            </div>

            {/* Interpersonal Therapy */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Interpersonal Therapy:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Interpersonal Therapy (IPT) is a time-limited, evidence-based
                  psychotherapy that focuses on improving mental health by
                  addressing difficulties in a person's current interpersonal
                  relationships and social functioning. IPT is based on the idea
                  that psychological symptoms occur within a social context and
                  are closely linked to problems in relationships, life roles,
                  and significant life changes. Rather than emphasizing early
                  childhood experiences or cognitive restructuring, IPT
                  concentrates on present-day relationships and how
                  interpersonal stressors contribute to emotional distress.
                </p>
                <p>
                  Treatment is typically delivered over 12–16 structured
                  sessions and focuses on one or two interpersonal problem
                  areas: grief (complicated bereavement), role transitions
                  (e.g., becoming a parent, retirement, or illness), role
                  disputes (ongoing conflict with a partner, family member, or
                  colleague), and interpersonal deficits (social isolation or
                  difficulty forming relationships). Early sessions involve
                  collaboratively linking mood symptoms to interpersonal
                  difficulties and selecting a focus area. Middle sessions
                  emphasize practical strategies such as communication analysis,
                  role-playing difficult conversations, clarification of
                  expectations, and encouraging emotional expression. The final
                  phase consolidates progress and helps the client apply new
                  interpersonal skills to future challenges.
                </p>
                <p>
                  For example, a client presenting with depression following a
                  recent job loss may identify a role transition as the primary
                  focus of IPT. Therapy would explore how the loss has affected
                  the client's identity, relationships, and sense of self-worth,
                  as well as increased tension with family members. The
                  therapist might help the client analyze a recent conflict with
                  their partner, practice expressing feelings of shame or
                  frustration more clearly, and develop strategies to seek
                  support rather than withdraw. As interpersonal functioning
                  improves and social support increases, depressive symptoms
                  often decrease, illustrating the central IPT principle that
                  improving relationships can directly improve mental health.
                </p>
                <p className="mt-3">
                  <strong>READ MORE AT:</strong>
                </p>
                <a
                  href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/interpersonal-psychotherapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                >
                  https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/interpersonal-psychotherapy
                </a>
              </div>
            </div>

            {/* Behavioural Activation Therapy */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Behavioural Activation Therapy:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Behavioural Activation Therapy (BAT) is an evidence-based
                  psychotherapy based on the understanding that low mood is
                  maintained by avoidance, withdrawal, and reduced engagement in
                  meaningful activities. Rather than focusing on changing
                  thoughts, BAT emphasizes helping individuals gradually
                  re-engage in activities that provide pleasure, a sense of
                  accomplishment, or personal meaning, even when motivation is
                  low. Therapy involves monitoring the relationship between
                  activities and mood, identifying personal values, and
                  collaboratively scheduling realistic, values-based actions to
                  increase positive reinforcement from the environment. For
                  example, a person with depression who has stopped socializing
                  and exercising may work with their therapist to schedule short
                  daily walks and brief check-ins with a friend; although these
                  activities initially feel effortful, consistent engagement can
                  lead to improved mood, increased energy, and reduced avoidance
                  over time.
                </p>
              </div>
            </div>

            {/* Mindfulness Based CBT */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Mindfulness Based Cognitive Behavioural Therapy:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Mindfulness-based cognitive behavioral therapy (MB-CBT) is an
                  evidence-based psychotherapy which integrates traditional
                  cognitive behavioral strategies with mindfulness practices to
                  help individuals develop greater awareness of their thoughts,
                  emotions, and bodily sensations in the present moment. Rather
                  than focusing solely on changing the content of negative
                  thoughts, MB-CBT emphasizes altering an individual's
                  relationship to those thoughts through nonjudgmental
                  observation and acceptance. Core techniques include
                  mindfulness meditation, body scanning, and mindful movement
                  alongside cognitive restructuring and behavioral activation.
                  By cultivating attentional control and self-compassion,
                  mindfulness-based CBT supports patients in responding more
                  adaptively to distressing experiences rather than reacting
                  automatically or avoidantly.
                </p>
              </div>
            </div>

            {/* Activation and Commitment Therapy */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Activation and Commitment Therapy:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Acceptance and Commitment Therapy (ACT) is a behavioral
                  therapy that helps individuals improve psychological
                  flexibility by changing their relationship with difficult
                  thoughts and emotions rather than trying to eliminate them.
                  ACT teaches people to notice internal experiences such as
                  anxiety, sadness, or cravings without judgment or avoidance,
                  while committing to behaviors that align with their personal
                  values. Core processes of ACT include acceptance, cognitive
                  defusion (stepping back from unhelpful thoughts),
                  present-moment awareness, self-as-context, values
                  clarification, and committed action. By focusing on what
                  matters most to the individual and encouraging meaningful
                  action even in the presence of distress, ACT supports
                  long-term well-being.
                </p>
              </div>
            </div>

            {/* Motivational Interviewing */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Motivational Interviewing:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Motivational interviewing (MI) is a collaborative,
                  person-centred, evidence-based counselling approach that aims
                  to strengthen a person's own motivation and commitment to
                  change by exploring and resolving ambivalence in a respectful,
                  non-judgmental way. Rather than confronting or directing, the
                  clinician uses empathy, reflective listening, and open-ended
                  questions to elicit the individual's values, goals, and
                  intrinsic reasons for change ("change talk"), while affirming
                  autonomy and readiness. For example, a clinician might say:
                  "On the one hand, drinking helps you relax after work, and on
                  the other, you've noticed it's affecting your sleep and blood
                  pressure—how do you see those fitting together?" This approach
                  helps patients articulate their own reasons for change, which
                  is associated with improved engagement and outcomes across
                  substance use disorders.
                </p>
              </div>
            </div>

            {/* Contingency Management */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl text-gray-900 mb-3">
                Contingency Management:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Contingency management (CM) is an evidence-based behavioural
                  treatment for substance use disorders that uses positive
                  reinforcement to promote desired behaviours, most commonly
                  abstinence or treatment adherence. Patients receive tangible
                  rewards (such as vouchers, gift cards, or privileges)
                  contingent on objective verification of behaviour change, like
                  negative urine drug screens or attendance at appointments.
                  Grounded in principles of operant conditioning, CM increases
                  the immediate rewards of recovery to compete with the
                  reinforcing effects of substances, and it has particularly
                  strong evidence for stimulant use disorders, as well as
                  growing support for opioids, alcohol, and cannabis when
                  combined with other treatments.
                </p>
              </div>
            </div>

            {/* Options in the Annapolis Valley */}
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Options in the Annapolis Valley:
              </h3>

              <div className="space-y-4">
                {annapolisValleyResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg text-amber-900 mb-2">
                Professional Use Only
              </h3>
              <p className="text-sm text-amber-800">
                This resource is designed for licensed healthcare professionals.
                Information provided should supplement, not replace, clinical
                judgment and current treatment guidelines. Always consider
                individual patient circumstances, comorbidities, and
                contraindications. For patients in crisis or with suicidal
                ideation, immediate psychiatric evaluation and appropriate
                interventions are required. Call Crisis Line Nova Scotia:
                1-888-429-8167 or 988 Suicide & Crisis Lifeline.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600 text-sm">
          <p>
            This is a free, open-source clinical reference tool designed for
            primary care physicians in the Annapolis Valley.
          </p>
          <p className="mt-2">
            Based on CANMAT 2023 Guidelines and current evidence-based research.
          </p>
        </div>
      </div>
    </div>
  );
}
