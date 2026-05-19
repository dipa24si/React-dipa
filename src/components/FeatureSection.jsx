import Card from "./Card";

export default function FeatureSection({ 
  title = "Fitur Unggulan",
  description = "Deskripsi fitur",
  features = []
}) {
  return (
    <section className="mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <div className="text-center">
              {feature.icon && (
                <div className="text-4xl mb-4 text-blue-600">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
