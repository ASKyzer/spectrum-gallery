export default function CometStages() {
  const items = [
    {
      label: 'Customer name',
      value: 'Severus Snape',
    },
    {
      label: 'Birthdate',
      value: '23/02/1978',
    },
    {
      label: 'Occupation',
      value: 'Teacher',
    },
    {
      label: 'Smoker',
      value: 'Yes',
    },
    {
      label: 'Sum-insured',
      value: '€300,00',
    },
  ];

  const data = {
    lines: [
      {
        label: 'Birthdate',
        value: '23/04/1987',
        startsGroup: false,
      },
      {
        label: 'Smoke',
        value: 'Yes',
        startsGroup: false,
      },
      {
        label: 'Occupation',
        value: 'Teacher',
        startsGroup: false,
      },
      {
        label: 'Sum-insured',
        value: '€300,00',
        startsGroup: false,
      },
      {
        label: 'Payment Frequency',
        value: 'Monthly',
        startsGroup: false,
      },
      {
        label: 'Carrier',
        value: '€13,20',
        startsGroup: true,
      },
    ],
  };

  return (
    <div>
      <h1>Comet Details Card in React</h1>
      <comet-feedback-message
        theme='default'
        title='Theme default'
        primaryButtonText='Primary Action'
        secondaryButtonText='Secondary Action'
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          semper libero. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae. Proin volutpat, sapien ut facilisis
          ultricies, eros purus blandit velit, at ultrices mi libero quis ante.
          Curabitur scelerisque metus et libero convallis consequat.
          Pellentesque feugiat pulvinar nisl sed pellentesque.
        </p>
      </comet-feedback-message>
      <comet-details-card title='Customer Information' items={items} />
      <comet-default-button label='Default Button'>Caca</comet-default-button>
      <comet-summary
        iconType='three-dimensional'
        icon='car'
        title='Term-life calculation'
        totallabel='Total'
        total='54,19 € / Month'
        data={JSON.stringify(data)}
      ></comet-summary>
      <comet-stages stages={JSON.parse(JSON.stringify(items))}></comet-stages>
    </div>
  );
}
