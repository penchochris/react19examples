import { createContext, Suspense, use } from "react";

const ContextExample = createContext("hello, I'm a context");

const getPoke = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then((res) => res.json())
    .then((poke) => poke?.sprites?.front_default);

const ImagePromise = ({ imagePromise }) => {
  const pokeImg = use(imagePromise);
  return <img src={pokeImg} alt="bulbasaur" />;
};

const Example3 = () => {
  const imagePromise = getPoke();
  const context = use(ContextExample);
  return (
    <div>
      <h1>Use hook with a promise</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ImagePromise imagePromise={imagePromise} />
      </Suspense>
      <h1>Use hook with a context</h1>
      <p>{context}</p>
    </div>
  );
};

export default Example3;
