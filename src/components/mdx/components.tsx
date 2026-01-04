
import React from 'react';

export const mdxComponents = {
  h1: (props: any) => <h1 className="font-condensed text-6xl md:text-8xl font-bold text-white uppercase leading-none mb-6" {...props} />,
  h2: (props: any) => <h2 className="font-condensed text-4xl md:text-5xl font-bold text-white uppercase mb-4" {...props} />,
  h3: (props: any) => <h3 className="font-condensed text-3xl text-white uppercase mt-10 mb-4" {...props} />,
  p: (props: any) => <p className="font-inter text-gray-300 text-lg leading-relaxed mb-6" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-2 border-white pl-6 py-2 my-8 italic text-xl text-white font-serif" {...props} />,
  strong: (props: any) => <strong className="text-white font-bold" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 font-inter text-gray-300" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => <a className="text-white underline underline-offset-4 hover:text-brand-orange transition-colors" {...props} />,
  img: (props: any) => (
    <div className="w-full mb-8 overflow-hidden bg-gray-900">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
    </div>
  ),
};
