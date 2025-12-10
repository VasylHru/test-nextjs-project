import Image from "next/image";

const Home = () => {
  return (
    <section>
      <h1>Welcome to Home</h1>
      <p>This is the home page.</p>
      <Image
        src="https://picsum.photos/200/300"
        alt="test"
        width={630}
        height={430}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </section>
  );
};

export default Home;
