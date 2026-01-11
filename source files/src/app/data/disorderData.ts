export interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'public' | 'private';
  cost?: string;
  format?: 'in-person' | 'virtual' | 'both';
  considerations?: string;
  location?: string;
  services?: string[];
}

export interface SeverityContent {
  description: string;
  psychotherapy: string[];
  lifestyle?: string[];
  resources: Resource[];
}

export interface DisorderData {
  title: string;
  screening: {
    title: string;
    content: string[];
    tools?: { name: string; link: string }[];
  };
  diagnosis: {
    title: string;
    content: string[];
  };
  treatment: {
    mild: SeverityContent;
    moderate: SeverityContent;
    severe: SeverityContent;
  };
}

export const disordersData: Record<string, DisorderData> = {
  depression: {
    title: 'Depression',
    screening: {
      title: 'How to Screen for Depression',
      content: [
        'Use standardized screening tools such as PHQ-9 (Patient Health Questionnaire-9) or PHQ-2 for initial assessment.',
        'Screen for depressive symptoms including persistent sadness, loss of interest or pleasure, changes in appetite or sleep, fatigue, and difficulty concentrating.',
        'Assess for duration and severity of symptoms (symptoms present for at least 2 weeks).',
        'Inquire about functional impairment in work, social relationships, and daily activities.',
        'Screen for suicidal ideation or self-harm thoughts.',
        'Consider comorbidities such as anxiety, substance use, or chronic medical conditions.',
      ],
      tools: [
        { name: 'PHQ-9', link: 'https://www.phqscreeners.com/phq9' },
        { name: 'PHQ-2', link: 'https://www.phqscreeners.com/phq2' },
      ],
    },
    diagnosis: {
      title: 'How to Diagnose Depression',
      content: [
        'Major Depressive Disorder requires ≥5 symptoms present for at least 2 weeks, including either depressed mood or loss of interest/pleasure.',
        'Additional criteria include: significant weight change, insomnia or hypersomnia, psychomotor agitation or retardation, fatigue, feelings of worthlessness or guilt, diminished concentration, and recurrent thoughts of death.',
        'Use DSM-5-TR criteria for formal diagnosis.',
        'Rule out other medical causes (thyroid dysfunction, vitamin deficiencies, neurological conditions).',
        'Differentiate from bipolar disorder, persistent depressive disorder, and adjustment disorders.',
        'Assess severity using PHQ-9 scores: 5-9 (mild), 10-14 (moderate), 15-19 (moderately severe), 20+ (severe).',
      ],
    },
    treatment: {
      mild: {
        description:
          'Mild depression (PHQ-9 score 5-9) often responds well to supportive interventions and lifestyle modifications. Monitor symptoms closely and consider escalating treatment if no improvement in 6-8 weeks.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Focus on identifying and changing negative thought patterns',
          'Behavioral Activation - Increase engagement in pleasurable and meaningful activities',
          'Problem-Solving Therapy - Develop coping strategies for specific stressors',
          'Mindfulness-Based Cognitive Therapy - Combines mindfulness practices with CBT techniques',
          'Interpersonal Therapy (IPT) - Address relationship issues contributing to depression',
        ],
        lifestyle: [
          'Regular physical activity',
          'Balanced diet',
          'Adequate sleep',
          'Social support',
        ],
        resources: [
          {
            title: 'SAMHSA National Helpline',
            description:
              'Free, confidential, 24/7 treatment referral and information service for individuals and families facing mental health disorders.',
            link: 'https://www.samhsa.gov/find-help/national-helpline',
            type: 'public',
          },
          {
            title: 'NAMI HelpLine',
            description:
              'Information, resource referrals, and support offered by highly trained volunteers.',
            link: 'https://www.nami.org/help',
            type: 'public',
          },
          {
            title: 'BetterHelp Online Therapy',
            description:
              'Professional online counseling with licensed therapists via messaging, phone, or video.',
            link: 'https://www.betterhelp.com',
            type: 'private',
            cost: '$60-90/week',
            format: 'virtual',
            considerations: 'Requires internet access, not for crisis situations',
          },
          {
            title: 'Talkspace',
            description:
              'Online therapy platform connecting patients with licensed therapists.',
            link: 'https://www.talkspace.com',
            type: 'private',
            cost: '$69-109/week',
            format: 'virtual',
            considerations: 'Insurance accepted for some plans',
          },
          {
            title: 'Local Community Mental Health Centers',
            description:
              'Sliding scale fees based on income, often accept Medicaid.',
            link: '#',
            type: 'public',
          },
        ],
      },
      moderate: {
        description:
          'Moderate depression (PHQ-9 score 10-14) typically requires a combination of psychotherapy and consideration of pharmacotherapy. Regular monitoring and follow-up are essential.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Evidence-based first-line treatment',
          'Interpersonal Therapy (IPT) - Focus on relationship patterns and life transitions',
          'Behavioral Activation - Structured approach to increasing positive activities',
          'Acceptance and Commitment Therapy (ACT) - Focus on psychological flexibility',
          'Psychodynamic Therapy - Explore unconscious patterns and past experiences',
        ],
        resources: [
          {
            title: 'SAMHSA Treatment Locator',
            description:
              'Find mental health treatment facilities and programs across the United States.',
            link: 'https://findtreatment.samhsa.gov',
            type: 'public',
          },
          {
            title: 'Psychology Today Therapist Directory',
            description: 'Search for therapists by location, insurance, and specialty.',
            link: 'https://www.psychologytoday.com/us/therapists',
            type: 'private',
            cost: 'Varies by provider ($100-250/session typical)',
            format: 'both',
            considerations: 'Many accept insurance, verify coverage',
          },
          {
            title: 'Local Psychiatric Practices',
            description:
              'Comprehensive treatment including medication management and therapy.',
            link: '#',
            type: 'private',
            cost: '$150-300 initial consult, $75-150 follow-ups',
            format: 'both',
            considerations: 'Check insurance network participation',
          },
          {
            title: 'Employee Assistance Programs (EAP)',
            description:
              'Free, confidential counseling sessions offered through many employers.',
            link: '#',
            type: 'public',
          },
        ],
      },
      severe: {
        description:
          'Severe depression (PHQ-9 score ≥15) requires intensive treatment including pharmacotherapy and psychotherapy. Consider psychiatric referral and assess for hospitalization if patient is a danger to self or others.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Combined with medication management',
          'Dialectical Behavior Therapy (DBT) - For patients with self-harm behaviors',
          'Intensive Outpatient Programs (IOP) - Structured group and individual therapy',
          'Electroconvulsive Therapy (ECT) consultation - For treatment-resistant cases',
          'Transcranial Magnetic Stimulation (TMS) - Non-invasive brain stimulation',
        ],
        resources: [
          {
            title: '988 Suicide & Crisis Lifeline',
            description:
              'Free, 24/7 support for people in distress, prevention and crisis resources.',
            link: 'https://988lifeline.org',
            type: 'public',
          },
          {
            title: 'Crisis Text Line',
            description: 'Text HOME to 741741 for free, 24/7 crisis support.',
            link: 'https://www.crisistextline.org',
            type: 'public',
          },
          {
            title: 'Psychiatric Emergency Services',
            description: 'Hospital-based emergency psychiatric evaluation and stabilization.',
            link: '#',
            type: 'public',
          },
          {
            title: 'Intensive Outpatient Programs (IOP)',
            description:
              'Structured treatment 3-5 days/week, several hours per day.',
            link: '#',
            type: 'private',
            cost: '$300-500/day, often covered by insurance',
            format: 'both',
            considerations: 'Requires significant time commitment',
          },
          {
            title: 'Partial Hospitalization Programs (PHP)',
            description:
              'Day treatment program providing intensive psychiatric care.',
            link: '#',
            type: 'private',
            cost: 'Typically covered by insurance',
            format: 'in-person',
            considerations: 'Step-down from inpatient care',
          },
        ],
      },
    },
  },
  anxiety: {
    title: 'Anxiety',
    screening: {
      title: 'How to Screen for Anxiety',
      content: [
        'Use standardized tools such as GAD-7 (Generalized Anxiety Disorder-7) for initial screening.',
        'Screen for excessive worry, restlessness, difficulty concentrating, irritability, muscle tension, and sleep disturbance.',
        'Assess duration (symptoms present for at least 6 months for GAD) and severity.',
        'Inquire about panic attacks: sudden onset of intense fear with physical symptoms.',
        'Screen for avoidance behaviors and social anxiety symptoms.',
        'Evaluate functional impairment in work, relationships, and daily activities.',
        'Consider comorbid depression, substance use, and medical conditions.',
      ],
      tools: [
        { name: 'GAD-7', link: 'https://www.phqscreeners.com/gad7' },
      ],
    },
    diagnosis: {
      title: 'How to Diagnose Anxiety',
      content: [
        'Generalized Anxiety Disorder (GAD): Excessive worry about various events for ≥6 months, difficult to control, with ≥3 associated symptoms.',
        'Associated symptoms include restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbance.',
        'Panic Disorder: Recurrent unexpected panic attacks with persistent concern about future attacks.',
        'Social Anxiety Disorder: Marked fear of social situations where scrutiny may occur.',
        'Use DSM-5-TR criteria for formal diagnosis and to differentiate anxiety disorder subtypes.',
        'Rule out medical causes (hyperthyroidism, cardiac conditions, respiratory disorders).',
        'Assess severity using GAD-7 scores: 5-9 (mild), 10-14 (moderate), 15-21 (severe).',
      ],
    },
    treatment: {
      mild: {
        description:
          'Mild anxiety (GAD-7 score 5-9) often responds to psychotherapy and self-management strategies. Monitor symptoms and reassess if no improvement in 6-8 weeks.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Identify and challenge anxious thoughts',
          'Exposure Therapy - Gradual exposure to feared situations',
          'Relaxation Training - Progressive muscle relaxation, deep breathing exercises',
          'Mindfulness-Based Stress Reduction (MBSR) - Mindfulness meditation practices',
          'Acceptance and Commitment Therapy (ACT) - Accept anxiety while pursuing valued actions',
        ],
        lifestyle: [
          'Regular physical activity',
          'Balanced diet',
          'Adequate sleep',
          'Social support',
        ],
        resources: [
          {
            title: 'Anxiety and Depression Association of America (ADAA)',
            description: 'Free resources, support groups, and therapist directory.',
            link: 'https://adaa.org',
            type: 'public',
          },
          {
            title: 'NAMI Anxiety Disorders',
            description: 'Educational resources and support for anxiety disorders.',
            link: 'https://www.nami.org/anxiety-disorders',
            type: 'public',
          },
          {
            title: 'Calm App',
            description:
              'Guided meditation, sleep stories, and anxiety management tools.',
            link: 'https://www.calm.com',
            type: 'private',
            cost: '$14.99/month or $69.99/year',
            format: 'virtual',
            considerations: 'Self-guided, not a replacement for therapy',
          },
          {
            title: 'Headspace',
            description: 'Meditation and mindfulness app with anxiety-focused content.',
            link: 'https://www.headspace.com',
            type: 'private',
            cost: '$12.99/month or $69.99/year',
            format: 'virtual',
            considerations: 'Some content free, full access requires subscription',
          },
        ],
      },
      moderate: {
        description:
          'Moderate anxiety (GAD-7 score 10-14) typically requires psychotherapy with consideration of pharmacotherapy. Regular follow-up and symptom monitoring are important.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Evidence-based first-line treatment',
          'Exposure and Response Prevention (ERP) - For anxiety with avoidance',
          'Panic Control Therapy - Specific techniques for panic attacks',
          'Social Skills Training - For social anxiety disorder',
          'Biofeedback - Learn to control physiological responses to anxiety',
        ],
        resources: [
          {
            title: 'SAMHSA Treatment Locator',
            description: 'Find mental health treatment facilities specializing in anxiety.',
            link: 'https://findtreatment.samhsa.gov',
            type: 'public',
          },
          {
            title: 'Anxiety Disorders Center',
            description:
              'Specialized treatment centers offering evidence-based therapies.',
            link: '#',
            type: 'private',
            cost: '$125-200/session',
            format: 'both',
            considerations: 'Many centers offer virtual options',
          },
          {
            title: 'Group Therapy Programs',
            description:
              'Structured group CBT for anxiety, often more affordable than individual therapy.',
            link: '#',
            type: 'private',
            cost: '$40-80/session',
            format: 'both',
            considerations: 'Check insurance coverage',
          },
          {
            title: 'NOCD (for OCD)',
            description:
              'Specialized online therapy for obsessive-compulsive disorder and anxiety.',
            link: 'https://www.treatmyocd.com',
            type: 'private',
            cost: 'Varies, insurance accepted',
            format: 'virtual',
            considerations: 'Focuses on ERP therapy',
          },
        ],
      },
      severe: {
        description:
          'Severe anxiety (GAD-7 score ≥15) requires intensive treatment with both pharmacotherapy and psychotherapy. Consider psychiatric referral and higher level of care if functioning is significantly impaired.',
        psychotherapy: [
          'Intensive Cognitive Behavioral Therapy (CBT) - Multiple sessions per week',
          'Intensive Exposure Therapy - Focused, accelerated exposure treatment',
          'Dialectical Behavior Therapy (DBT) - For anxiety with emotional dysregulation',
          'Intensive Outpatient Programs (IOP) - Structured daily treatment',
          'Residential Treatment - For severe, treatment-resistant cases',
        ],
        resources: [
          {
            title: '988 Suicide & Crisis Lifeline',
            description: 'Support for anxiety-related crisis situations.',
            link: 'https://988lifeline.org',
            type: 'public',
          },
          {
            title: 'Crisis Text Line',
            description: 'Text HOME to 741741 for crisis support.',
            link: 'https://www.crisistextline.org',
            type: 'public',
          },
          {
            title: 'Intensive Outpatient Programs (IOP)',
            description: 'Structured anxiety treatment 3-5 days/week.',
            link: '#',
            type: 'private',
            cost: '$300-500/day, often covered by insurance',
            format: 'both',
            considerations: 'Requires time commitment but allows living at home',
          },
          {
            title: 'Residential Anxiety Treatment',
            description:
              '24/7 structured treatment in residential setting for severe anxiety.',
            link: '#',
            type: 'private',
            cost: 'Varies widely, insurance may cover',
            format: 'in-person',
            considerations: 'For treatment-resistant or severely impairing anxiety',
          },
          {
            title: 'Psychiatric Hospitalization',
            description: 'Inpatient care for acute anxiety crisis with safety concerns.',
            link: '#',
            type: 'public',
          },
        ],
      },
    },
  },
  substanceUse: {
    title: 'Substance Use Disorder',
    screening: {
      title: 'How to Screen for Substance Use Disorder',
      content: [
        'Use validated screening tools such as CAGE-AID, AUDIT (alcohol), DAST-10 (drugs), or NIDA Quick Screen.',
        'Screen for frequency and quantity of substance use across all categories (alcohol, opioids, stimulants, cannabis, etc.).',
        'Assess for loss of control, tolerance, withdrawal symptoms, and continued use despite negative consequences.',
        'Inquire about impact on work, relationships, health, and legal issues.',
        'Screen for risky behaviors: driving under influence, needle sharing, unsafe sexual practices.',
        'Evaluate co-occurring mental health disorders (depression, anxiety, PTSD).',
        'Assess motivation and readiness for change using motivational interviewing techniques.',
      ],
      tools: [
        { name: 'CAGE-AID', link: 'https://www.samhsa.gov/find-help/national-helpline' },
        { name: 'AUDIT', link: 'https://www.samhsa.gov/find-help/national-helpline' },
        { name: 'DAST-10', link: 'https://www.samhsa.gov/find-help/national-helpline' },
        { name: 'NIDA Quick Screen', link: 'https://www.samhsa.gov/find-help/national-helpline' },
      ],
    },
    diagnosis: {
      title: 'How to Diagnose Substance Use Disorder',
      content: [
        'Substance Use Disorder requires ≥2 criteria within 12-month period per DSM-5-TR.',
        'Criteria include: tolerance, withdrawal, using larger amounts/longer periods, unsuccessful efforts to cut down, excessive time spent obtaining/using/recovering, giving up activities, continued use despite problems.',
        'Additional criteria: craving, failure to fulfill obligations, use in hazardous situations, social/interpersonal problems, physical/psychological problems.',
        'Assess severity: Mild (2-3 criteria), Moderate (4-5 criteria), Severe (≥6 criteria).',
        'Identify specific substance(s) involved and evaluate polysubstance use.',
        'Conduct toxicology screening when indicated.',
        'Assess for medical complications and withdrawal risk.',
      ],
    },
    treatment: {
      mild: {
        description:
          'Mild Substance Use Disorder (2-3 criteria) may respond to brief interventions and outpatient counseling. Focus on motivational enhancement and harm reduction strategies.',
        psychotherapy: [
          'Motivational Interviewing (MI) - Enhance intrinsic motivation to change',
          'Brief Interventions - Short counseling sessions focused on reducing use',
          'Cognitive Behavioral Therapy (CBT) - Identify triggers and develop coping skills',
          'Harm Reduction Counseling - Minimize risks associated with continued use',
          'Contingency Management - Positive reinforcement for abstinence',
        ],
        resources: [
          {
            title: 'SAMHSA National Helpline',
            description:
              '24/7 free treatment referral service: 1-800-662-HELP (4357)',
            link: 'https://www.samhsa.gov/find-help/national-helpline',
            type: 'public',
          },
          {
            title: 'Alcoholics Anonymous (AA)',
            description: 'Free peer support groups worldwide using 12-step model.',
            link: 'https://www.aa.org',
            type: 'public',
          },
          {
            title: 'Narcotics Anonymous (NA)',
            description: 'Free peer support for individuals recovering from drug addiction.',
            link: 'https://www.na.org',
            type: 'public',
          },
          {
            title: 'SMART Recovery',
            description:
              'Self-empowerment addiction recovery support groups using science-based approach.',
            link: 'https://www.smartrecovery.org',
            type: 'public',
          },
          {
            title: 'Outpatient Addiction Counseling',
            description: 'Individual or group counseling 1-2 times per week.',
            link: '#',
            type: 'private',
            cost: '$50-150/session, many accept insurance',
            format: 'both',
            considerations: 'Sliding scale often available',
          },
        ],
      },
      moderate: {
        description:
          'Moderate Substance Use Disorder (4-5 criteria) typically requires intensive outpatient treatment with possible medication-assisted treatment (MAT). Regular monitoring and comprehensive support are essential.',
        psychotherapy: [
          'Cognitive Behavioral Therapy (CBT) - Evidence-based addiction treatment',
          'Motivational Enhancement Therapy (MET) - Build motivation for sustained change',
          'Contingency Management - Vouchers/rewards for maintaining abstinence',
          'Group Therapy - Peer support and skill development',
          'Family Therapy - Address family dynamics and build support system',
        ],
        resources: [
          {
            title: 'SAMHSA Treatment Locator',
            description: 'Find substance use treatment facilities nationwide.',
            link: 'https://findtreatment.samhsa.gov',
            type: 'public',
          },
          {
            title: 'Intensive Outpatient Programs (IOP)',
            description:
              'Structured treatment 3-5 days/week, 3 hours/day including group and individual therapy.',
            link: '#',
            type: 'private',
            cost: '$250-400/day, often covered by insurance',
            format: 'both',
            considerations: 'Allows continued work/school attendance',
          },
          {
            title: 'Medication-Assisted Treatment (MAT) Clinics',
            description:
              'Combines medications (methadone, buprenorphine, naltrexone) with counseling.',
            link: '#',
            type: 'both',
            cost: 'Varies, many accept Medicaid',
            format: 'both',
            considerations: 'Evidence-based for opioid use disorder',
          },
          {
            title: 'Recovery Housing/Sober Living',
            description:
              'Supportive living environment with accountability and structure.',
            link: '#',
            type: 'private',
            cost: '$500-1500/month',
            format: 'in-person',
            considerations: 'Drug-free living space, varies in structure',
          },
        ],
      },
      severe: {
        description:
          'Severe Substance Use Disorder (≥6 criteria) requires intensive treatment, often beginning with medical detoxification. Consider residential treatment and comprehensive aftercare planning. High risk for medical complications and withdrawal.',
        psychotherapy: [
          'Residential Treatment - Comprehensive 24/7 structured treatment',
          'Intensive Cognitive Behavioral Therapy (CBT) - Daily individual and group sessions',
          'Dialectical Behavior Therapy (DBT) - For co-occurring emotional dysregulation',
          'Trauma-Focused Therapy - Address underlying trauma contributing to use',
          'Relapse Prevention Training - Develop comprehensive recovery plan',
        ],
        resources: [
          {
            title: 'Medical Detoxification',
            description:
              '24/7 medical monitoring during withdrawal, inpatient or outpatient.',
            link: '#',
            type: 'both',
            cost: 'Often covered by insurance, varies widely',
            format: 'in-person',
            considerations: 'Essential for alcohol and benzodiazepine withdrawal',
          },
          {
            title: 'Residential Treatment Centers',
            description:
              '30-90 day programs with 24/7 care, therapy, and medical supervision.',
            link: '#',
            type: 'private',
            cost: '$5,000-80,000/month, insurance may cover',
            format: 'in-person',
            considerations: 'Varying levels of amenities and evidence-based practices',
          },
          {
            title: 'Partial Hospitalization Programs (PHP)',
            description: 'Day treatment 5-7 days/week, returning home at night.',
            link: '#',
            type: 'private',
            cost: 'Typically covered by insurance',
            format: 'in-person',
            considerations: 'Step-down from residential or detox',
          },
          {
            title: '988 Suicide & Crisis Lifeline',
            description: 'Crisis support including substance use crises.',
            link: 'https://988lifeline.org',
            type: 'public',
          },
          {
            title: 'Peer Recovery Support Services',
            description:
              'Certified peer specialists provide ongoing support and mentorship.',
            link: '#',
            type: 'public',
          },
        ],
      },
    },
  },
};