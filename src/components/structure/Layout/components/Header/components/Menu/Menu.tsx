import "./menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <div className="media" style={{ width: "67px" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/0c92/e53b/818eec845c0a54a2054453474a11e43f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dtUt0t8T8jkYdNrGOwau~yMZCowdIkUtfth3TTCLriVRqeeg4CLaN3EGpRTU3i~OOp6VoVORguKcxVNofAAPGncfe1~oD~jE~TlFzu5KGks83llOp2e61bTC7TnVP9M-2KA~jxxbNqPxGYGBAlQ73x1Z8SMoAzJ9BHm1if4~X4V5LpMX7Z1rJzCIKz9wDUFuEZ8hHEdWdBMfrbbr3k1UMXskdeKlerKZLSBnSZpynYjX4EYKkwwwdgHIhyrbunXGJ~zW8B78oNilFqw9K9YnUJIaRqPpuepoKaDHBHS50MzaKTrGeF8GzFZ8Jcwhs~s5DSC8ewBUmB~27DN5~TdGQw__"
            alt="logo"
          />
        </div>
        <div className="media" style={{ width: "107px" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/769e/b17e/0d4219817c1c80b1996976f9c89558cc?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VuB~l~l0L-g2htI8ukGSuPOG8LFLpPXCeWHzI2Uv0Lyj0EqRRUqOIYQoea9q~x4z-VMoiINwG2NClfpZDoD69ZscMm28nU~lJjadaNUVuHO-ZtmxUb6mZVsXk~EBPYmBiLXbH3v1m7GfVdxbHdBCAIVnFUrdXwXgE4SmRbfilYwMiSdn4U3xvGpbuKK6izvVU7kQV0fD6og9BMTazMhFoNVqM-nWYKi7wLNuahz7UOVpWomD5jT6WwSUbZXzTZIb9F-rbxdT~5DHXB94XcJ8hRKl-w2GMMZJ4YxvWFKruNl6KSGFwunK595mVSaRjNsQsx7IWiJZcO1X3DTe5~p9mQ__"
            alt="Title"
          />
        </div>
      </div>
      <div className="actions">
        <div className="links">
          <a className="link" href="#">
            Acceuil
          </a>
          <a className="link" href="#">
            La solution
          </a>
          <a className="link" href="#">
            Ils nous font confiance
          </a>
          <a className="link" href="#">
            Retour d'expérience
          </a>
          <a className="link" href="#">
            Recherche club / joueur
          </a>
        </div>
        <button className="login">
          <div className="icon">
            <img src="/icon-avatar.svg" /> 
          </div>
          Mon compte
        </button>
      </div>
    </nav>
  );
};

export default Menu;
