interface ImageProps {
  src: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageProps) => {
  const basepath = globalThis.origin.includes("localhost")
    ? ""
    : "/trouvetonxv";

  return <img src={`${basepath}${src}`} alt={alt} />;
};

export default Image;
