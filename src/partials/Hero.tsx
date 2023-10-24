import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Al-Fariqy Raihan</GradientText> 👋
        </>
      }
      description={
        <>
          I am very interested in the field of software engineering, especially backend engineering, networking, devops engineering, information security, and blockchain.
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="https://storage.googleapis.com/pro-img-str/me.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <div></div>
        </>
      }
    />
  </Section>
);

export { Hero };
