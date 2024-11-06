import { Head } from "$fresh/runtime.ts";
import { MeteorShower } from "../components/MeteorShower.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio-deno</title>
      </Head>
      <div
        className="bg-black h-screen overflow-hidden flex justify-center items-center"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        }}
      >
        <MeteorShower />
        <div className="absolute h-screen w-screen" style={{ bottom: '-30%' }}>
          <img
            src="/asteroid.svg"
            alt="asteroid"
            className="animate-rotate"
            style={{
              animation: 'rotate 240s linear infinite',
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-rotate {
            animation: rotate 240s linear infinite;
          }
        `}
      </style>
    </>
  );
}
