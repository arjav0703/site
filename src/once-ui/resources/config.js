const baseURL = "arjav.tech";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Website",
  description:
    "Arjav is a 14 year old developer who loves to code and build things and a designer.",
};

// default open graph data
const og = {
  title: "Website",
  description: "Arjav is a 14 year old developer who loves to code and build things and a designer.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Individual",
  name: "Arjav Jain",
  description: "Arjav is a 14 year old developer who loves to code and build things and a designer.",
  email: "arjavjain0703@gmail.com",
};

// social links
const social = {
  twitter: "https://x.com/arjavjain0703",
  linkedin: "https://www.linkedin.com/in/arjav-jain-219476333/",
  github: "https://github.com/arjavjain0703",
  instagram : "https://instagram.com/arjavjain0703",
  discord: "https://discordapp.com/users/1265239979143987273",
};

export { baseURL, style, meta, og, schema, social };
