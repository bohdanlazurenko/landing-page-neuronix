export default function FeaturesSection() {
  const features = [
    {
      title: 'Autonomous Operations',
      description: 'Our systems self-manage, self-heal, and self-optimize, reducing manual intervention by up to 90%.',
      icon: '⚡'
    },
    {
      title: 'Intelligent Automation',
      description: 'Leverage AI-driven processes that learn and adapt to your unique business needs.',
      icon: '🤖'
    },
    {
      title: 'Seamless Integration',
      description: 'Effortlessly connect with your existing infrastructure and third-party services.',
      icon: '🔧'
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Neuronix?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of IT management
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-6 text-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}