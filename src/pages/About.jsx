import React from "react";

function About() {
  return (
    <div className="lg:p-8 text-egg-100 min-h-screen relative z-[1] overflow-hidden">
      <div
        style={{
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundImage:
            "url(https://images.pexels.com/photos/4031688/pexels-photo-4031688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">About GloNeuro</h1>
      </div>
      <div className="flex gap-0 rounded-xl overflow-clip">
        <div className="h-[50vh] w-[200vw]">
          <img
            src="https://images.pexels.com/photos/17483867/pexels-photo-17483867/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <p className="p-4 text-xl glass bg-base-500 text-egg-100 ">
          <h2 className="font-bold text-3xl mb-2">Who are we?</h2>
          We are an innovative organization founded by Neuroscience think tanks,
          researchers, and educationists who have been associated with the
          world’s key Neuroscience organizations, including the multi-lateral
          bodies. Our aim is to spread brain awareness, knowledge, and enhance
          the quality of brain health through public engagement, along with
          updating neuroscience students and scientists with opportunities,
          latest research, and upskilling. We follow an enthusiastic
          volunteer-based ecosystem approach to bring positive changes in the
          career of all interested in Neurosciences. Our team wishes to be known
          for easy-to-understand brain health facts and informative works.
        </p>
      </div>
      <br />
      <div className="p-4 glass bg-salmon-300 rounded-xl text-egg-100">
        <h1>Our Objectives at GloNeuro:</h1>
        <ul className=" m-4 list-disc">
          <li>
            To make people aware of the importance of maintaining cognitive and
            mental health and daily activities that may help them in the
            process.
          </li>
          <li>
            To spread awareness on factors and lifestyle activities that may
            interfere with brain health and can lead to the progression of
            different disorders.
          </li>
          <li>
            To help students of different backgrounds gain conceptual knowledge
            in the field of neuroscience.
          </li>
          <li>
            To update students from neuroscience backgrounds about the current
            research being done around the world.
          </li>
          <li>
            To update about different positions and research opportunities
            available in the field of neuroscience around the world.
          </li>
          <li>
            To guide budding neuroscientists about various educational and
            short-term research opportunities that ensure the successful pursuit
            of future career goals in academia, medicine, the health sciences,
            and research.
          </li>
          <li>
            To conduct webinars, discussion forums, and timely activities to
            promote scientific networking.
          </li>
          <li>
            To deliver audio-visual learning content across our social media
            handles.
          </li>
          <li>
            To organize interesting competitions among students helping them to
            gain interest and upskill their abilities to pursue a career in
            neuroscience.
          </li>
          <li>
            To promote neuroscience at the school level and make students learn
            about the intriguing opportunities available in this field.
          </li>
          <li>
            To develop an interactive platform where researchers and physicians
            can find appropriate content and network for the betterment of
            society.
          </li>
        </ul>
      </div>
      <div className="absolute top-[-10vh] z-[-1] right-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/bg-blob-1.png?alt=media&token=a4b988ec-f647-45a5-89a1-6681029c77a9&_gl=1*tik9xh*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5NzM0NzcxNy40Ny4xLjE2OTczNDkyMTkuMjIuMC4w"
          alt=""
        />
      </div>
      <div className="absolute top-[200vh]">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/bg-blob-2.png?alt=media&token=9790f5cd-6e0c-4a8a-98eb-8a158e1736d3&_gl=1*1siop9p*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5NzM0NzcxNy40Ny4xLjE2OTczNDkzNjQuNjAuMC4w"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
