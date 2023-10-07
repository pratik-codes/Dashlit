import { Container } from "../../../container";

function FeatureCard({ features }: { features: Array<any> }) {
  return (
    <Container className="mt-[4rem]">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {features.map(({ title, text, icon }) => (
          <div
            key={title}
            className="bg-gero-glow relative  overflow-hidden rounded-[1.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.25),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient hover:border-2 hover:border-grey md:rounded-[3.8rem] md:p-12"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-glass-gradient p-2">
              {icon}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
            <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default FeatureCard;
