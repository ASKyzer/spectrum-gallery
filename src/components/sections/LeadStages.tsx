import CometStages from '../comet/stages/CometStages';

export default function LeadStagesSection() {
  const stages = [
    {
      title: 'Lead Qualification',
      subtitle: 'Define leads qualification',
      router_link: 'stage/qualification',
      state: 'done',
      icon: 'external-policy',
    },
    {
      title: 'Preliminary Consultation',
      subtitle: 'Contact and introduce services',
      router_link: 'stage/consultation',
      state: 'done',
      icon: 'business-man',
    },
    {
      title: 'Offer creation',
      subtitle: 'Create an offer and share',
      router_link: 'stage/offer',
      state: 'active',
      icon: 'offer',
    },
    {
      title: 'Risk Assessment',
      subtitle: 'Vary tariffs for pre-existing conditions',
      router_link: 'stage/risk',
      state: 'next',
      icon: 'risk-analysis',
    },
    {
      title: 'Create Application',
      subtitle: 'Complete first step of the contract',
      router_link: 'stage/application',
      state: 'next',
      icon: 'car',
    },
  ];
  return <CometStages stages={stages} />;
}
