interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => (
  <footer className="card-footer">{children}</footer>
);

export default CardFooter;
