export function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Create or pick a meme coin!",
      color: "bg-blue-100",
    },
    {
      number: 2,
      title: "Send it to 2 ETH within 24 hours",
      color: "bg-green-100",
    },
    {
      number: 3,
      title: "Launched liq from Dotto",
      color: "bg-gray-100",
    },
    {
      number: 4,
      title: "Dotto buys coins based on conversations",
      color: "bg-pink-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`${step.color} p-6 rounded-xl relative`}
        >
          <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-sm font-medium">
            {step.number}
          </div>
          <p className="text-sm font-medium mt-4">{step.title}</p>
        </div>
      ))}
    </div>
  )
}

